import { NextResponse } from "next/server";
import { getLocaleFromPathname } from "./lib/locale";
import { localizeUrl, urls } from "./lib/urls";

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
  const fallback = "www.box-com.com";
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

function stripHomepageTrackingParams(url) {
  const cleanedUrl = url.clone();
  const homepagePaths = new Set([
    localizeUrl(urls.homepage, "fr"),
    localizeUrl(urls.homepage, "en"),
    "/fr",
  ]);
  const removableParams = ["trk", "rel"];
  let changed = false;

  if (!homepagePaths.has(cleanedUrl.pathname.toLowerCase())) {
    return { changed: false, url: cleanedUrl };
  }

  for (const param of removableParams) {
    if (cleanedUrl.searchParams.has(param)) {
      cleanedUrl.searchParams.delete(param);
      changed = true;
    }
  }

  return { changed, url: cleanedUrl };
}

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = getHostname(request.headers.get("host") || url.host);
  const canonicalHost = getCanonicalHostname();
  const pathname = (url.pathname || "").toLowerCase();
  const locale = getLocaleFromPathname(pathname);
  const forwardedProto = (request.headers.get("x-forwarded-proto") || "")
    .trim()
    .toLowerCase();
  const protocol = forwardedProto || url.protocol.replace(":", "");
  const isIndexPhp = pathname === "/index.php" || pathname === "/index.php/";
  const localizedRouteMappings = [
    urls.homepage,
    urls.about,
    urls.blog,
    urls.contact,
    urls.creativeContent,
    urls.digitalMarketing,
    urls.leadGeneration,
    urls.webDevelopment,
  ];
  const toInternalFrenchPath = (routePath) =>
    routePath === urls.homepage ? "/fr" : `/fr${routePath}`;
  const matchedPublicFrenchRoute = localizedRouteMappings.find(
    (routePath) => pathname === localizeUrl(routePath, "fr")
  );
  const matchedPublicEnglishRoute = localizedRouteMappings.find(
    (routePath) => pathname === localizeUrl(routePath, "en")
  );
  const matchedInternalFrenchRoute = localizedRouteMappings.find(
    (routePath) => pathname === toInternalFrenchPath(routePath)
  );
  const matchedLegacyEnglishRoute = localizedRouteMappings.find(
    (routePath) =>
      routePath !== urls.homepage &&
      pathname === routePath &&
      localizeUrl(routePath, "fr") !== routePath
  );

  const shouldCanonicalize =
    process.env.NODE_ENV === "production" && !isLocalHost(host);
  const needsProtocolRedirect = shouldCanonicalize && protocol !== "https";
  const needsHostRedirect = shouldCanonicalize && host !== canonicalHost;
  const needsIndexPhpRedirect = isIndexPhp;
  const needsInternalFrenchRedirect = !!matchedInternalFrenchRoute;
  const needsLegacyEnglishRedirect = !!matchedLegacyEnglishRoute;
  const homepageTrackingCleanup = stripHomepageTrackingParams(url);
  const needsHomepageTrackingRedirect = homepageTrackingCleanup.changed;

  if (
    !needsProtocolRedirect &&
    !needsHostRedirect &&
    !needsIndexPhpRedirect &&
    !needsHomepageTrackingRedirect &&
    !needsInternalFrenchRedirect &&
    !needsLegacyEnglishRedirect &&
    !matchedPublicFrenchRoute &&
    !matchedPublicEnglishRoute
  ) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", locale);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (matchedPublicFrenchRoute) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = toInternalFrenchPath(matchedPublicFrenchRoute);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", "fr");
    return NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (matchedPublicEnglishRoute) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = matchedPublicEnglishRoute;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", "en");
    return NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (shouldCanonicalize) {
    url.protocol = "https";
    url.host = canonicalHost;
  }

  if (needsHomepageTrackingRedirect) {
    url.search = homepageTrackingCleanup.url.search;
  }

  // Legacy WP-style URLs should canonicalize to homepage.
  if (needsIndexPhpRedirect) {
    url.pathname = "/";
    url.search = "";
  }

  if (needsInternalFrenchRedirect && matchedInternalFrenchRoute) {
    url.pathname = localizeUrl(matchedInternalFrenchRoute, "fr");
  }

  if (needsLegacyEnglishRedirect && matchedLegacyEnglishRoute) {
    url.pathname = localizeUrl(matchedLegacyEnglishRoute, "en");
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
