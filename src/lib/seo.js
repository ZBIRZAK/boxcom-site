import * as cheerio from "cheerio";
import { getHost } from "./helpers";

const DEFAULT_META_DESCRIPTION = "Boxcom";
const DEFAULT_META_TITLE = "Boxcom";

function normalizeCanonical(url) {
  if (!url) return undefined;

  const host = getHost();

  try {
    const parsed = new URL(url, host);
    const canonical = new URL(parsed.pathname, host);
    canonical.hash = "";
    canonical.search = "";

    if (canonical.pathname !== "/" && canonical.pathname.endsWith("/")) {
      canonical.pathname = canonical.pathname.replace(/\/+$/, "");
    }

    return canonical.toString();
  } catch {
    return undefined;
  }
}

export function parseSeoTagsForMetaData(seo) {
  if (!seo?.success || !seo?.head) {
    return {
      title: DEFAULT_META_TITLE,
      description: DEFAULT_META_DESCRIPTION,
    };
  }

  const $ = cheerio.load(seo.head);

  const canonicalRaw = $('link[rel="canonical"]').attr("href");
  const canonical = normalizeCanonical(canonicalRaw);

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

  const robotsMeta = ($('meta[name="robots"]').attr("content") || "").toLowerCase();
  const googleBotMeta = ($('meta[name="googlebot"]').attr("content") || "").toLowerCase();
  const honorBackendNoindex = process.env.HONOR_BACKEND_NOINDEX === "true";
  const index = honorBackendNoindex ? !robotsMeta.includes("noindex") : true;
  const follow = honorBackendNoindex ? !robotsMeta.includes("nofollow") : true;
  const googleIndex = honorBackendNoindex ? !googleBotMeta.includes("noindex") : true;
  const googleFollow = honorBackendNoindex ? !googleBotMeta.includes("nofollow") : true;

  const data = {
    title:
      $('meta[property="og:title"]').attr("content") ||
      $("title").text() ||
      DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
    alternates: {
      canonical,
    },
    robots: {
      index,
      follow,
      nocache: false,
      googleBot: {
        index: googleBotMeta ? googleIndex : index,
        follow: googleBotMeta ? googleFollow : follow,
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
  data.description = desc || DEFAULT_META_DESCRIPTION;

  // console.log({ data });

  return data;
}
