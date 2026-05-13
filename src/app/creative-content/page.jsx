import Experiences from "../../components/CreativeContent/01_Experiences/Experiences";
import ContentMarketing from "../../components/CreativeContent/02_Content_Marketing/ContentMarketing";
import {
  getCreativeContent,
  getCreativeContentSEO,
  getHeader,
} from "../../lib/BackendContents";
import GraphicDesign from "../../components/CreativeContent/03_Graphic_Design/GraphicDesign";
import VideoProduction from "../../components/CreativeContent/04_Video_Production/VideoProduction";
import StoryToLife from "../../components/CreativeContent/06_StoryToLife/StoryToLife";
import Header from "../../components/Headers/Header";
import Lately from "../../components/Our_projects/Lately";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import LDJsonScripts from "../../components/Seo/LDJsonScripts";
import { getHost } from "../../lib/helpers";
import { urls } from "../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getCreativeContentSEO();
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();

  return {
    ...data,
    description:
      "Creative content services including content marketing, design, video production, and storytelling to make your brand stand out.",
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${urls.creativeContent}`,
    },
    openGraph: {
      ...(data.openGraph || {}),
      url: `${host}${urls.creativeContent}`,
    },
  };
}

const CreativeContentPage = async () => {
  const header = await getHeader();

  let {
    dataExperiencesSection,
    dataContentMarketingSection,
    dataGraphicDesignSection,
    dataVideoProductionSection,
    dataStoryToLifeSection,
  } = await getCreativeContent();

  const seo = await getCreativeContentSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />

      <Header data={header} transitionToDark={true} />
      <Experiences data={dataExperiencesSection} />
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
};

export default CreativeContentPage;
