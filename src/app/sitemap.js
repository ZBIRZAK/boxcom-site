import { getHost } from "../lib/helpers";
import { localizeUrl, urls } from "../lib/urls";

export default function sitemap() {
  const host = getHost();
  const lastModified = new Date();

  const englishPages = [
    { path: urls.homepage, changeFrequency: "weekly", priority: 1 },
    { path: urls.digitalMarketing, changeFrequency: "weekly", priority: 1 },
    { path: urls.creativeContent, changeFrequency: "weekly", priority: 1 },
    { path: urls.webDevelopment, changeFrequency: "weekly", priority: 1 },
    { path: urls.leadGeneration, changeFrequency: "weekly", priority: 1 },
    { path: urls.about, changeFrequency: "weekly", priority: 1 },
    { path: urls.blog, changeFrequency: "weekly", priority: 1 },
    { path: urls.contact, changeFrequency: "weekly", priority: 1 },
  ];

  const untranslatedEnglishPages = [
    { path: urls.projects, changeFrequency: "weekly", priority: 1 },
    { path: urls.privacyPolicy, changeFrequency: "monthly", priority: 0.5 },
  ];

  const frenchPages = [
    { path: urls.homepage, changeFrequency: "weekly", priority: 1 },
    { path: urls.digitalMarketing, changeFrequency: "weekly", priority: 1 },
    { path: urls.creativeContent, changeFrequency: "weekly", priority: 1 },
    { path: urls.webDevelopment, changeFrequency: "weekly", priority: 1 },
    { path: urls.leadGeneration, changeFrequency: "weekly", priority: 1 },
    { path: urls.about, changeFrequency: "weekly", priority: 1 },
    { path: urls.blog, changeFrequency: "weekly", priority: 1 },
    { path: urls.contact, changeFrequency: "weekly", priority: 1 },
  ];

  return [
    ...englishPages.map((page) => ({
      url: host + localizeUrl(page.path, "en"),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: host + localizeUrl(page.path, "en"),
          fr: host + localizeUrl(page.path, "fr"),
        },
      },
    })),
    ...untranslatedEnglishPages.map((page) => ({
      url: host + page.path,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...frenchPages.map((page) => ({
      url: host + localizeUrl(page.path, "fr"),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: host + localizeUrl(page.path, "en"),
          fr: host + localizeUrl(page.path, "fr"),
        },
      },
    })),
  ];
}
