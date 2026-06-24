import gsap from "gsap";
import HeroAboutUs from "../../components/About_us/01_Hero/HeroAboutUs";
import Welcome from "../../components/About_us/02_Welcome/Welcome";
import MeetDot from "../../components/About_us/03_MeetDot/MeetDot";
import TheStory from "../../components/About_us/04_TheStory/TheStory";
import BoxComAfrica from "../../components/About_us/05_BoxComAfrica/BoxComAfrica";
import WhatMakes from "../../components/About_us/07_WhatMakes/WhatMakes";
import OurImpact from "../../components/About_us/08_OurImpact/OurImpact";
import OurTeam from "../../components/About_us/09_OurTeam/OurTeam";
import FirstStep from "../../components/About_us/10_FirstStep/FirstStep";
import Header from "../../components/Headers/Header";
import Expertise from "../../components/Homepage/03_Expertise/Expertise";
import {
  getAboutUs,
  getAboutUsSEO,
  getHeader,
  getHomepage,
} from "../../lib/BackendContents";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import LDJsonScripts from "../../components/Seo/LDJsonScripts";
import { getHost } from "../../lib/helpers";
import { urls } from "../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getAboutUsSEO();
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();
  const title = "About Boxcom | Digital Marketing & Creative Agency in Casablanca";
  const description =
    "Learn about Boxcom, our team, and our approach to digital marketing, creative content, web development, and growth strategy in Casablanca and across Morocco.";

  return {
    ...data,
    title,
    description,
    keywords: [
      "about boxcom",
      "boxcom agency",
      "digital agency casablanca",
      "creative agency morocco",
      "marketing agency morocco",
    ],
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${urls.about}`,
    },
    openGraph: {
      ...(data.openGraph || {}),
      title,
      description,
      url: `${host}${urls.about}`,
      type: "website",
    },
    twitter: {
      ...(data.twitter || {}),
      title,
      description,
    },
  };
}

const PageAbout = async () => {
  const header = await getHeader();
  const {
    dataWelcome,
    dataMeetDot,
    dataTheStory,
    dataBoxComAfrica,
    dataWhatMakes,
    dataOurImpact,
    dataOurTeam,
    dataFirstStep,
  } = await getAboutUs();

  const { dataExpertiseSection } = await getHomepage();

  const seo = await getAboutUsSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header dark data={header} />
      <HeroAboutUs />
      <Welcome data={dataWelcome} />
      <MeetDot data={dataMeetDot} />
      <TheStory data={dataTheStory} />
      <BoxComAfrica data={dataBoxComAfrica} />
      <Expertise
        id="page06_screen06"
        nextId="page06_screen07"
        data={dataExpertiseSection}
      />
      <WhatMakes data={dataWhatMakes} />
      <OurImpact data={dataOurImpact} />
      <OurTeam data={dataOurTeam} />
      <FirstStep data={dataFirstStep} />
    </>
  );
};

export default PageAbout;
