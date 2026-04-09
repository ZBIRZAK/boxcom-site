import { NextResponse } from "next/server";

function getHostname(hostHeader = "") {
  return hostHeader.split(":")[0].trim().toLowerCase();
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

  if (!needsProtocolRedirect) {
    return NextResponse.next();
  }

  url.protocol = "https";
  url.host = host;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
