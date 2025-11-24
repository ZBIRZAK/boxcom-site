import * as cheerio from "cheerio";

export function parseSeoTagsForMetaData(seo) {
  if (!seo.success) {
    return {};
  }

  const $ = cheerio.load(seo.head);

  const canonical = $('link[rel="canonical"]').attr("href");

  const ogTitle = $('meta[property="og:title"]').attr("content");
  const ogType = $('meta[property="og:type"]').attr("content");
  const ogUrl = $('meta[property="og:url"]').attr("content");
  const ogSiteName = $('meta[property="og:site_name"]').attr("content");
  const ogLocale = $('meta[property="og:locale"]').attr("content");
  const ogUpdatedTime = $('meta[property="og:updated_time"]').attr("content");
  const articlePublished = $('meta[property="article:published_time"]').attr(
    "content"
  );
  const articleModified = $('meta[property="article:modified_time"]').attr(
    "content"
  );

  // === Extract Twitter Tags ===
  const twitterCard = $('meta[name="twitter:card"]').attr("content");
  const twitterTitle = $('meta[name="twitter:title"]').attr("content");
  const twitterLabel1 = $('meta[name="twitter:label1"]').attr("content");
  const twitterData1 = $('meta[name="twitter:data1"]').attr("content");
  const twitterLabel2 = $('meta[name="twitter:label2"]').attr("content");
  const twitterData2 = $('meta[name="twitter:data2"]').attr("content");

  const data = {
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: ogTitle,
      type: ogType,
      url: ogUrl,
      siteName: ogSiteName,
      locale: ogLocale,
      modifiedTime: ogUpdatedTime,
      publishedTime: articlePublished,
    },
    twitter: {
      card: twitterCard || "summary",
      title: twitterTitle,
      creator: twitterData1,
    },
    other: {
      // Custom meta tags not directly supported by Next.js Metadata API
      "twitter:label1": twitterLabel1,
      "twitter:data1": twitterData1,
      "twitter:label2": twitterLabel2,
      "twitter:data2": twitterData2,
    },
  };

  const desc = $('meta[name="description"]').attr("content");

  if (desc) {
    data.description = desc;
  }

  // console.log({ data });

  return data;
}
