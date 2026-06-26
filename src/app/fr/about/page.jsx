import gsap from "gsap";
import HeroAboutUs from "../../../components/About_us/01_Hero/HeroAboutUs";
import Welcome from "../../../components/About_us/02_Welcome/Welcome";
import MeetDot from "../../../components/About_us/03_MeetDot/MeetDot";
import TheStory from "../../../components/About_us/04_TheStory/TheStory";
import BoxComAfrica from "../../../components/About_us/05_BoxComAfrica/BoxComAfrica";
import WhatMakes from "../../../components/About_us/07_WhatMakes/WhatMakes";
import OurImpact from "../../../components/About_us/08_OurImpact/OurImpact";
import OurTeam from "../../../components/About_us/09_OurTeam/OurTeam";
import FirstStep from "../../../components/About_us/10_FirstStep/FirstStep";
import Header from "../../../components/Headers/Header";
import Expertise from "../../../components/Homepage/03_Expertise/Expertise";
import {
  getAboutUs,
  getAboutUsSEO,
  getHeader,
  getHomepage,
} from "../../../lib/BackendContents";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../../lib/seo";
import LDJsonScripts from "../../../components/Seo/LDJsonScripts";
import { getHost } from "../../../lib/helpers";
import { localizeUrl, urls } from "../../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getAboutUsSEO("fr");
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();
  const title = "A Propos de Boxcom | Agence Digitale et Creative a Casablanca";
  const description =
    "Decouvrez Boxcom, agence digitale et creative a Casablanca, notre approche, notre experience et la maniere dont nous aidons les marques a gagner en visibilite et en croissance.";

  return {
    ...data,
    title,
    description,
    keywords: [
      "a propos boxcom",
      "agence digitale casablanca",
      "agence creative maroc",
      "agence communication maroc",
      "equipe marketing digital maroc",
    ],
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${localizeUrl(urls.about, "fr")}`,
      languages: {
        en: `${host}${localizeUrl(urls.about, "en")}`,
        fr: `${host}${localizeUrl(urls.about, "fr")}`,
      },
    },
    openGraph: {
      ...(data.openGraph || {}),
      title,
      description,
      url: `${host}${localizeUrl(urls.about, "fr")}`,
    },
    twitter: {
      ...(data.twitter || {}),
      title,
      description,
    },
  };
}

export default async function AboutFr() {
  const header = await getHeader("fr");
  const {
    dataWelcome,
    dataMeetDot,
    dataTheStory,
    dataBoxComAfrica,
    dataWhatMakes,
    dataOurImpact,
    dataOurTeam,
    dataFirstStep,
  } = await getAboutUs("fr");
  const { dataExpertiseSection } = await getHomepage("fr");
  const seo = await getAboutUsSEO("fr");

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header dark data={header} locale="fr" />
      <HeroAboutUs />
      <Welcome data={dataWelcome} />
      <MeetDot data={dataMeetDot} />
      <TheStory data={dataTheStory} />
      <BoxComAfrica data={dataBoxComAfrica} locale="fr" />
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
}
