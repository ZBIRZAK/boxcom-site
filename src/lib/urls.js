import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  normalizeLocale,
  SUPPORTED_LOCALES,
} from "./locale";

function resolveLocale(locale) {
  if (locale) return normalizeLocale(locale);

  if (typeof window !== "undefined") {
    return getLocaleFromPathname(window.location.pathname);
  }

  return DEFAULT_LOCALE;
}

const localizedSlugs = {
  fr: {
    digitalMarketing:
      process.env.NEXT_PUBLIC_SLUG_DIGITAL_MARKETING_FR || "marketing-digital",
    creativeContent:
      process.env.NEXT_PUBLIC_SLUG_CREATIVE_CONTENT_FR || "contenu-creatif",
    webDevelopment:
      process.env.NEXT_PUBLIC_SLUG_WEB_DEVELOPMENT_FR || "developpement-web",
    leadGeneration:
      process.env.NEXT_PUBLIC_SLUG_LEAD_GENERATION_FR || "generation-de-leads",
    about: process.env.NEXT_PUBLIC_SLUG_ABOUT_FR || "a-propos-de-nous",
    blog: process.env.NEXT_PUBLIC_SLUG_BLOG_FR || "blog",
    projects: process.env.NEXT_PUBLIC_SLUG_PROJECTS_FR || "projects",
    contact: process.env.NEXT_PUBLIC_SLUG_CONTACT_FR || "contact",
    privacyPolicy:
      process.env.NEXT_PUBLIC_SLUG_PRIVACY_POLICY_FR || "privacy-policy",
  },
};

function getLocalizedPath(path, locale = DEFAULT_LOCALE) {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const frSlugs = localizedSlugs[normalizedLocale];
  if (!frSlugs) return normalizedPath;

  const routeMap = {
    [urls.digitalMarketing]: `/${frSlugs.digitalMarketing}`,
    [urls.creativeContent]: `/${frSlugs.creativeContent}`,
    [urls.webDevelopment]: `/${frSlugs.webDevelopment}`,
    [urls.leadGeneration]: `/${frSlugs.leadGeneration}`,
    [urls.about]: `/${frSlugs.about}`,
    [urls.blog]: `/${frSlugs.blog}`,
    [urls.projects]: `/${frSlugs.projects}`,
    [urls.contact]: `/${frSlugs.contact}`,
    [urls.privacyPolicy]: `/${frSlugs.privacyPolicy}`,
  };

  return routeMap[normalizedPath] || normalizedPath;
}

export function localizeUrl(path, locale) {
  const normalizedLocale = resolveLocale(locale);

  if (!path || /^https?:\/\//i.test(path) || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (
    normalizedPath === `/${normalizedLocale}` ||
    normalizedPath.startsWith(`/${normalizedLocale}/`)
  ) {
    return normalizedPath;
  }

  const localizedPath = getLocalizedPath(normalizedPath, normalizedLocale);

  if (normalizedLocale === DEFAULT_LOCALE) {
    return localizedPath;
  }

  return localizedPath === "/"
    ? `/${normalizedLocale}`
    : `/${normalizedLocale}${localizedPath}`;
}

export function formatUrl(token, locale) {
  const resolvedLocale = resolveLocale(locale);
  const tokenUC = (token + "").toUpperCase();

  switch (tokenUC) {
    case "%URL_DIGITAL_MARKETING%":
      return localizeUrl(urls.digitalMarketing, resolvedLocale);
    case "%URL_CREATIVE_CONTENT%":
      return localizeUrl(urls.creativeContent, resolvedLocale);
    case "%URL_WEB_DEV%":
      return localizeUrl(urls.webDevelopment, resolvedLocale);
    case "%URL_LEAD_GENERATION%":
      return localizeUrl(urls.leadGeneration, resolvedLocale);
    case "%URL_PROJECTS%":
      return localizeUrl(urls.projects, resolvedLocale);
    case "%URL_BLOG%":
      return localizeUrl(urls.blog, resolvedLocale);
    case "%URL_ABOUT_US%":
      return localizeUrl(urls.about, resolvedLocale);
    case "%URL_CONTACT%":
      return localizeUrl(urls.contact, resolvedLocale);
    case "%URL_HOMEPAGE%":
      return localizeUrl(urls.homepage, resolvedLocale);
    case "%URL_PRIVACY_POLICY%":
      return localizeUrl(urls.privacyPolicy, resolvedLocale);

    default:
      return localizeUrl(token, resolvedLocale);
  }
}

export function getLocalizedSiblingUrl(pathname = "/", targetLocale) {
  const normalizedTargetLocale = normalizeLocale(targetLocale);
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const currentLocale = getLocaleFromPathname(normalizedPath);
  const staticRoutes = [
    urls.homepage,
    urls.digitalMarketing,
    urls.creativeContent,
    urls.webDevelopment,
    urls.leadGeneration,
    urls.projects,
    urls.blog,
    urls.about,
    urls.contact,
    urls.privacyPolicy,
  ];

  for (const route of staticRoutes) {
    const localizedRoute = localizeUrl(route, currentLocale);

    if (normalizedPath === localizedRoute) {
      return localizeUrl(route, normalizedTargetLocale);
    }

    if (route !== urls.homepage && normalizedPath.startsWith(`${localizedRoute}/`)) {
      const suffix = normalizedPath.slice(localizedRoute.length);
      return `${localizeUrl(route, normalizedTargetLocale)}${suffix}`;
    }
  }

  for (const locale of SUPPORTED_LOCALES) {
    if (normalizedPath === `/${locale}`) {
      return localizeUrl(urls.homepage, normalizedTargetLocale);
    }
  }

  return localizeUrl(urls.homepage, normalizedTargetLocale);
}

export const urls = {
  homepage: "/",
  digitalMarketing: "/digital-marketing",
  creativeContent: "/creative-content",
  webDevelopment: "/web-development",
  leadGeneration: "/lead-generation",
  projects: "/projects",
  projectPost: "/projects/:slug",
  blog: "/blog",
  blogPost: "/blog/:slug",
  about: "/about",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
};
