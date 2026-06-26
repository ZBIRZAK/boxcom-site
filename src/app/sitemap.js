import { getHost } from "../lib/helpers";
import { localizeUrl, urls } from "../lib/urls";

export default function sitemap() {
  const host = getHost();
  const lastModified = new Date();
  const buildLocalizedEntry = (page) => ({
    url: host + localizeUrl(page.path, page.locale),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        en: host + localizeUrl(page.path, "en"),
        fr: host + localizeUrl(page.path, "fr"),
        "x-default": host + localizeUrl(page.path, "fr"),
      },
    },
  });

  const englishPages = [
    { path: urls.homepage, changeFrequency: "weekly", priority: 1, locale: "en" },
    { path: urls.digitalMarketing, changeFrequency: "weekly", priority: 1, locale: "en" },
    { path: urls.creativeContent, changeFrequency: "weekly", priority: 1, locale: "en" },
    { path: urls.webDevelopment, changeFrequency: "weekly", priority: 1, locale: "en" },
    { path: urls.leadGeneration, changeFrequency: "weekly", priority: 1, locale: "en" },
    { path: urls.about, changeFrequency: "weekly", priority: 1, locale: "en" },
    { path: urls.contact, changeFrequency: "weekly", priority: 1, locale: "en" },
  ];

  const untranslatedEnglishPages = [
    { path: urls.projects, changeFrequency: "weekly", priority: 1 },
    { path: urls.privacyPolicy, changeFrequency: "monthly", priority: 0.5 },
  ];

  const frenchPages = [
    { path: urls.homepage, changeFrequency: "weekly", priority: 1, locale: "fr" },
    { path: urls.digitalMarketing, changeFrequency: "weekly", priority: 1, locale: "fr" },
    { path: urls.creativeContent, changeFrequency: "weekly", priority: 1, locale: "fr" },
    { path: urls.webDevelopment, changeFrequency: "weekly", priority: 1, locale: "fr" },
    { path: urls.leadGeneration, changeFrequency: "weekly", priority: 1, locale: "fr" },
    { path: urls.about, changeFrequency: "weekly", priority: 1, locale: "fr" },
    { path: urls.contact, changeFrequency: "weekly", priority: 1, locale: "fr" },
  ];

  return [
    ...englishPages.map(buildLocalizedEntry),
    ...untranslatedEnglishPages.map((page) => ({
      url: host + page.path,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...frenchPages.map(buildLocalizedEntry),
  ];
}
