import Experiences from "../../../components/CreativeContent/01_Experiences/Experiences";
import ContentMarketing from "../../../components/CreativeContent/02_Content_Marketing/ContentMarketing";
import {
  getCreativeContent,
  getCreativeContentSEO,
  getHeader,
} from "../../../lib/BackendContents";
import GraphicDesign from "../../../components/CreativeContent/03_Graphic_Design/GraphicDesign";
import VideoProduction from "../../../components/CreativeContent/04_Video_Production/VideoProduction";
import StoryToLife from "../../../components/CreativeContent/06_StoryToLife/StoryToLife";
import Header from "../../../components/Headers/Header";
import Lately from "../../../components/Our_projects/Lately";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../../lib/seo";
import LDJsonScripts from "../../../components/Seo/LDJsonScripts";
import { getHost } from "../../../lib/helpers";
import { localizeUrl, urls } from "../../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getCreativeContentSEO("fr");
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();

  return {
    ...data,
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
      url: `${host}${localizeUrl(urls.creativeContent, "fr")}`,
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
      <Lately
        sectionId="page02_screen07"
        portfolioCategoryId={process.env.PORTFOLIO_CREATIVE_CONTENT_ID}
      />
      <StoryToLife data={dataStoryToLifeSection} />
    </>
  );
}
