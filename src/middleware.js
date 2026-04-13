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

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = getHostname(request.headers.get("host") || url.host);
  const pathname = (url.pathname || "").toLowerCase();
  const forwardedProto = (request.headers.get("x-forwarded-proto") || "")
    .trim()
    .toLowerCase();
  const protocol = forwardedProto || url.protocol.replace(":", "");

  // Legacy WP-style URLs should canonicalize to homepage.
  if (pathname === "/index.php" || pathname === "/index.php/") {
    url.protocol = "https";
    url.host = host;
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  const needsProtocolRedirect = protocol !== "https";
  const shouldForceHttps =
    process.env.NODE_ENV === "production" && !isLocalHost(host);

  if (!shouldForceHttps || !needsProtocolRedirect) {
    return NextResponse.next();
  }

  url.protocol = "https";
  url.host = host;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
