import { NextResponse } from "next/server";

const CANONICAL_HOST = "box-com.com";

function getHostname(hostHeader = "") {
  return hostHeader.split(":")[0].trim().toLowerCase();
}

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = getHostname(request.headers.get("host") || url.host);
  const forwardedProto = (request.headers.get("x-forwarded-proto") || "")
    .trim()
    .toLowerCase();
  const protocol = forwardedProto || url.protocol.replace(":", "");

  const isCanonicalDomain = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;

  if (!isCanonicalDomain) {
    return NextResponse.next();
  }

  const needsHostRedirect = host !== CANONICAL_HOST;
  const needsProtocolRedirect = protocol !== "https";

  if (!needsHostRedirect && !needsProtocolRedirect) {
    return NextResponse.next();
  }

  url.protocol = "https";
  url.host = CANONICAL_HOST;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
