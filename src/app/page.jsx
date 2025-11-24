import HeroSection from "../components/Homepage/01_HeroSection/HeroSection";
import NarrativeSection2 from "../components/Homepage/02_NarrativeSection/NarrativeSection2";
import Expertise from "../components/Homepage/03_Expertise/Expertise";
import WhyChooseUs from "../components/Homepage/04_WhyChooseUs/WhyChooseUs";
import ArtSection from "../components/Homepage/05_Art/ArtSection";
import SayItBetter from "../components/Homepage/09_SayItBetter/SayItBetter";
import OurServices from "../components/Homepage/06_OurServices/OurServices";
import VisionaryClients from "../components/Homepage/07_VisionaryClients/VisionaryClients";
import StillDoubting from "../components/Homepage/08_StillDoubting/StillDoubting";
import LetsMakeItHappen from "../components/Homepage/10_LetsMakeItHappen/LetsMakeItHappen";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import DropOfWater from "../components/Homepage/01_HeroSection/DropOfWater/DropOfWater";
import { getHeader, getHomepage, getHomepageSEO } from "../lib/BackendContents";
import Header from "../components/Headers/Header";
import { useGSAP } from "@gsap/react";
import Lately from "../components/Homepage/11_Lately/Lately";
import LDJsonScripts from "../components/Seo/LDJsonScripts";
import { parseSeoTagsForMetaData } from "../lib/seo";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getHomepageSEO();

  return parseSeoTagsForMetaData(seo);
}

export default async function Homepage() {
  const header = await getHeader();

  let {
    dataHeroSection,
    dataNarrativeSection,
    dataExpertiseSection,
    dataWhyChooseUs,
    dataBigIdeas,
    dataServices,
    dataClients,
    dataSeeForYourself,
    dataTestimonials,
    dataLetsMakeItHappen,
    dataLately,
  } = await getHomepage();

  const seo = await getHomepageSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <div className="relative">
        <Header data={header} transitionToDark={true} />
        <DropOfWater />
        <HeroSection data={dataHeroSection} />
        <NarrativeSection2 data={dataNarrativeSection} />
        <Expertise
          id="page01_screen03"
          nextId="page01_screen04"
          data={dataExpertiseSection}
        />
        <WhyChooseUs data={dataWhyChooseUs} />
        <ArtSection data={dataBigIdeas} />
        <OurServices data={dataServices} />
        <VisionaryClients data={dataClients} />
        <StillDoubting data={dataSeeForYourself} />
        <SayItBetter data={dataTestimonials} />
        <Lately data={dataLately} />
        <LetsMakeItHappen data={dataLetsMakeItHappen} />
      </div>
    </>
  );
}
