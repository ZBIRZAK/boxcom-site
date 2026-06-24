import { DEFAULT_LOCALE, normalizeLocale } from "./locale";

export function localizeUrl(path, locale = DEFAULT_LOCALE) {
  const normalizedLocale = normalizeLocale(locale);

  if (!path || /^https?:\/\//i.test(path) || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedLocale === DEFAULT_LOCALE) {
    return normalizedPath;
  }

  if (
    normalizedPath === `/${normalizedLocale}` ||
    normalizedPath.startsWith(`/${normalizedLocale}/`)
  ) {
    return normalizedPath;
  }

  return normalizedPath === "/"
    ? `/${normalizedLocale}`
    : `/${normalizedLocale}${normalizedPath}`;
}

export function formatUrl(token, locale = DEFAULT_LOCALE) {
  const tokenUC = (token + "").toUpperCase();

  switch (tokenUC) {
    case "%URL_DIGITAL_MARKETING%":
      return localizeUrl(urls.digitalMarketing, locale);
    case "%URL_CREATIVE_CONTENT%":
      return localizeUrl(urls.creativeContent, locale);
    case "%URL_WEB_DEV%":
      return localizeUrl(urls.webDevelopment, locale);
    case "%URL_LEAD_GENERATION%":
      return localizeUrl(urls.leadGeneration, locale);
    case "%URL_PROJECTS%":
      return localizeUrl(urls.projects, locale);
    case "%URL_BLOG%":
      return localizeUrl(urls.blog, locale);
    case "%URL_ABOUT_US%":
      return localizeUrl(urls.about, locale);
    case "%URL_CONTACT%":
      return localizeUrl(urls.contact, locale);
    case "%URL_HOMEPAGE%":
      return localizeUrl(urls.homepage, locale);
    case "%URL_PRIVACY_POLICY%":
      return localizeUrl(urls.privacyPolicy, locale);

    default:
      return localizeUrl(token, locale);
  }
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
