import Experiences from "../../../components/CreativeContent/01_Experiences/Experiences";
import ContentMarketing from "../../../components/CreativeContent/02_Content_Marketing/ContentMarketing";
import {
  getCreativeContent,
  getCreativeContentSEO,
  getHeader,
} from "../../../lib/BackendContents";
import GraphicDesign from "../../../components/CreativeContent/03_Graphic_Design/GraphicDesign";
import VideoProduction from "../../../components/CreativeContent/04_Video_Production/VideoProduction";
import CreativeContentFAQSection from "../../../components/CreativeContent/07_FAQSection/07_FAQSection";
import StoryToLife from "../../../components/CreativeContent/06_StoryToLife/StoryToLife";
import Header from "../../../components/Headers/Header";
import Lately from "../../../components/Our_projects/Lately";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../../lib/seo";
import LDJsonScripts from "../../../components/Seo/LDJsonScripts";
import { areServiceFaqsEnabled, getHost } from "../../../lib/helpers";
import { localizeUrl, urls } from "../../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getCreativeContentSEO("fr");
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();
  const title =
    "Agence de Contenu Creatif au Maroc | Content Marketing, Design et Video | Boxcom";
  const description =
    "Boxcom cree des strategies de contenu creatif au Maroc: content marketing, design graphique, production video et diffusion de contenus pour renforcer votre marque.";

  return {
    ...data,
    title,
    description,
    keywords: [
      "agence contenu creatif maroc",
      "content marketing maroc",
      "design graphique casablanca",
      "production video maroc",
      "creation de contenu marque",
    ],
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${localizeUrl(urls.creativeContent, "fr")}`,
      languages: {
        en: `${host}${localizeUrl(urls.creativeContent, "en")}`,
        fr: `${host}${localizeUrl(urls.creativeContent, "fr")}`,
      },
    },
    openGraph: {
      ...(data.openGraph || {}),
      title,
      description,
      url: `${host}${localizeUrl(urls.creativeContent, "fr")}`,
    },
    twitter: {
      ...(data.twitter || {}),
      title,
      description,
    },
  };
}

export default async function CreativeContentFr() {
  const header = await getHeader("fr");
  const {
    dataExperiencesSection,
    dataContentMarketingSection,
    dataGraphicDesignSection,
    dataVideoProductionSection,
    dataStoryToLifeSection,
  } = await getCreativeContent("fr");
  const seo = await getCreativeContentSEO("fr");

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header data={header} transitionToDark={true} locale="fr" />
      <Experiences data={dataExperiencesSection} locale="fr" />
      <ContentMarketing data={dataContentMarketingSection} />
      <GraphicDesign data={dataGraphicDesignSection} />
      <VideoProduction data={dataVideoProductionSection} />
      {areServiceFaqsEnabled() && <CreativeContentFAQSection />}
      <Lately
        sectionId="page02_screen07"
        portfolioCategoryId={process.env.PORTFOLIO_CREATIVE_CONTENT_ID}
      />
      <StoryToLife data={dataStoryToLifeSection} />
    </>
  );
}
