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
      "Agence Digitale au Maroc | Marketing Digital, Contenu Creatif et Web | Boxcom";
    const description =
      "Boxcom, agence digitale au Maroc, accompagne les marques en marketing digital, contenu creatif, generation de leads et developpement web pour accelerer leur croissance.";

    return {
      ...data,
      title,
      description,
      keywords: [
        "agence digitale maroc",
        "agence marketing digital maroc",
        "agence creative casablanca",
        "generation de leads maroc",
        "developpement web maroc",
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
        "Agence Digitale au Maroc | Marketing Digital, Contenu Creatif et Web | Boxcom",
      description:
        "Boxcom, agence digitale au Maroc, accompagne les marques en marketing digital, contenu creatif, generation de leads et developpement web pour accelerer leur croissance.",
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
