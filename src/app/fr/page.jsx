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
    const title =
      "Agence de Marketing Digital au Maroc | Contenu Creatif & Developpement Web | Boxcom";
    const description =
      "Boxcom est une agence de marketing digital a Casablanca qui allie creativite et performance. Strategie de contenu, social media, developpement web et e-commerce au Maroc.";

    return {
      ...data,
      title,
      description,
      keywords: [
        "agence marketing digital maroc",
        "agence digitale maroc",
        "agence digitale casablanca",
        "strategie de contenu maroc",
        "social media maroc",
        "community management maroc",
        "creation de contenu digital maroc",
        "developpement web maroc",
        "creation site web maroc",
        "site e-commerce maroc",
        "referencement naturel maroc",
      ],
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
        title,
        description,
        locale: "fr_MA",
        url: `${host}${localizeUrl(urls.homepage, "fr")}`,
      },
      twitter: {
        ...(data.twitter || {}),
        title,
        description,
      },
    };
  } catch {
    return {
      title:
        "Agence de Marketing Digital au Maroc | Contenu Creatif & Developpement Web | Boxcom",
      description:
        "Boxcom est une agence de marketing digital a Casablanca qui allie creativite et performance. Strategie de contenu, social media, developpement web et e-commerce au Maroc.",
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
