import { getHeader, getHomepage, getHomepageSEO } from "../lib/BackendContents";
import { parseSeoTagsForMetaData } from "../lib/seo";
import { getHost } from "../lib/helpers";
import { localizeUrl, urls } from "../lib/urls";
import HomepagePage from "../components/Homepage/HomepagePage";

export async function generateMetadata() {
  try {
    const seo = await getHomepageSEO("en");
    const data = parseSeoTagsForMetaData(seo);
    const host = getHost();

    return {
      ...data,
      description:
        "Digital marketing agency in Morocco helping brands grow through strategy, creative content, web development, and lead generation.",
      alternates: {
        ...(data.alternates || {}),
        canonical: `${host}${localizeUrl(urls.homepage, "en")}`,
        languages: {
          en: `${host}${localizeUrl(urls.homepage, "en")}`,
          fr: `${host}${localizeUrl(urls.homepage, "fr")}`,
        },
      },
      openGraph: {
        ...(data.openGraph || {}),
        url: `${host}${localizeUrl(urls.homepage, "en")}`,
      },
    };
  } catch {
    return {
      title: "Boxcom",
      description:
        "Digital marketing agency in Morocco helping brands grow through strategy, creative content, web development, and lead generation.",
    };
  }
}

export default async function Homepage() {
  const [header, homepage, seo] = await Promise.all([
    getHeader("en"),
    getHomepage("en"),
    getHomepageSEO("en"),
  ]);

  return <HomepagePage header={header} homepage={homepage} seo={seo} locale="en" />;
}
