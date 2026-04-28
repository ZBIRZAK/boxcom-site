import { NextResponse } from "next/server";

function getHostname(hostHeader = "") {
  return hostHeader.split(":")[0].trim().toLowerCase();
}

function isLocalHost(host = "") {
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host === "[::1]"
  );
}

function getCanonicalHostname() {
  const fallback = "box-com.com";
  const candidates = [
    process.env.FRONTEND_HOST,
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    `https://${fallback}`,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      const hostname = new URL(candidate).hostname.toLowerCase();
      if (!isLocalHost(hostname)) return hostname;
    } catch {
      // Ignore invalid candidate and continue.
    }
  }

  return fallback;
}

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = getHostname(request.headers.get("host") || url.host);
  const canonicalHost = getCanonicalHostname();
  const pathname = (url.pathname || "").toLowerCase();
  const forwardedProto = (request.headers.get("x-forwarded-proto") || "")
    .trim()
    .toLowerCase();
  const protocol = forwardedProto || url.protocol.replace(":", "");
  const isIndexPhp = pathname === "/index.php" || pathname === "/index.php/";

  const shouldCanonicalize =
    process.env.NODE_ENV === "production" && !isLocalHost(host);
  const needsProtocolRedirect = shouldCanonicalize && protocol !== "https";
  const needsHostRedirect = shouldCanonicalize && host !== canonicalHost;
  const needsIndexPhpRedirect = isIndexPhp;

  if (!needsProtocolRedirect && !needsHostRedirect && !needsIndexPhpRedirect) {
    return NextResponse.next();
  }

  if (shouldCanonicalize) {
    url.protocol = "https";
    url.host = canonicalHost;
  }

  // Legacy WP-style URLs should canonicalize to homepage.
  if (needsIndexPhpRedirect) {
    url.pathname = "/";
    url.search = "";
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
