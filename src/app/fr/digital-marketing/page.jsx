import gsap from "gsap";
import HeroSection from "../../../components/DigitalMarketing/01_HeroSection/01_HeroSection";
import DigitalStrategy from "../../../components/DigitalMarketing/02_DigitalStrategy/02_DigitalStrategy";
import SocialMediaManagement from "../../../components/DigitalMarketing/03_SocialMediaManagement/03_SocialMediaManagement";
import DigitalAdvertising from "../../../components/DigitalMarketing/04_DigitalAdvertising/04_DigitalAdvertising";
import StartScaling from "../../../components/DigitalMarketing/05_StartScaling/05_StartScaling";
import Header from "../../../components/Headers/Header";
import Lately from "../../../components/Our_projects/Lately";
import {
  getDigitalMarketing,
  getDigitalMarketingSEO,
  getHeader,
} from "../../../lib/BackendContents";
import { useGSAP } from "@gsap/react";
import LDJsonScripts from "../../../components/Seo/LDJsonScripts";
import { parseSeoTagsForMetaData } from "../../../lib/seo";
import { getHost } from "../../../lib/helpers";
import { localizeUrl, urls } from "../../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getDigitalMarketingSEO("fr");
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();

  return {
    ...data,
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${localizeUrl(urls.digitalMarketing, "fr")}`,
      languages: {
        en: `${host}${localizeUrl(urls.digitalMarketing, "en")}`,
        fr: `${host}${localizeUrl(urls.digitalMarketing, "fr")}`,
      },
    },
    openGraph: {
      ...(data.openGraph || {}),
      url: `${host}${localizeUrl(urls.digitalMarketing, "fr")}`,
    },
  };
}

export default async function DigitalMarketingFr() {
  const header = await getHeader("fr");
  const {
    dataHeroSection,
    dataDigitalStrategy,
    dataSocialMediaManagement,
    dataDigitalAdvertising,
    dataStartScaling,
  } = await getDigitalMarketing("fr");
  const seo = await getDigitalMarketingSEO("fr");

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header data={header} dark={true} locale="fr" />
      <HeroSection data={dataHeroSection} />
      <DigitalStrategy data={dataDigitalStrategy} />
      <SocialMediaManagement data={dataSocialMediaManagement} />
      <DigitalAdvertising data={dataDigitalAdvertising} />
      <Lately
        sectionId="page03_screen06"
        portfolioCategoryId={process.env.PORTFOLIO_DIGITAL_MARKETING_ID}
      />
      <StartScaling data={dataStartScaling} />
    </>
  );
}
