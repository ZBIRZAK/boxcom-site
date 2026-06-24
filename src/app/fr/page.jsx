import { getHeader, getHomepage, getHomepageSEO } from "../../lib/BackendContents";
import { getHost } from "../../lib/helpers";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import { localizeUrl, urls } from "../../lib/urls";
import HomepagePage from "../../components/Homepage/HomepagePage";

export async function generateMetadata() {
  try {
    const seo = await getHomepageSEO("fr");
    const data = parseSeoTagsForMetaData(seo);
    const host = getHost();

    return {
      ...data,
      alternates: {
        ...(data.alternates || {}),
        canonical: `${host}${localizeUrl(urls.homepage, "fr")}`,
        languages: {
          en: `${host}${localizeUrl(urls.homepage, "en")}`,
          fr: `${host}${localizeUrl(urls.homepage, "fr")}`,
        },
      },
      openGraph: {
        ...(data.openGraph || {}),
        url: `${host}${localizeUrl(urls.homepage, "fr")}`,
      },
    };
  } catch {
    return {
      title: "Boxcom",
      description: "Boxcom",
    };
  }
}

export default async function HomepageFr() {
  const [header, homepage, seo] = await Promise.all([
    getHeader("fr"),
    getHomepage("fr"),
    getHomepageSEO("fr"),
  ]);

  return <HomepagePage header={header} homepage={homepage} seo={seo} locale="fr" />;
}
