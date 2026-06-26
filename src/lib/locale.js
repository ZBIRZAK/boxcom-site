export const DEFAULT_LOCALE = "fr";
export const SUPPORTED_LOCALES = ["fr", "en"];

export function normalizeLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function isDefaultLocale(locale) {
  return normalizeLocale(locale) === DEFAULT_LOCALE;
}

export function getLocaleFromPathname(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  for (const locale of SUPPORTED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (
      normalizedPath === `/${locale}` ||
      normalizedPath.startsWith(`/${locale}/`)
    ) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}
