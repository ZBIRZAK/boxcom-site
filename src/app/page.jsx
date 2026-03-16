import HeroSection from "../components/Homepage/01_HeroSection/HeroSection";
import NarrativeSection2 from "../components/Homepage/02_NarrativeSection/NarrativeSection2";
import Expertise from "../components/Homepage/03_Expertise/Expertise";
import WhyChooseUs from "../components/Homepage/04_WhyChooseUs/WhyChooseUs";
import ArtSection from "../components/Homepage/05_Art/ArtSection";
import OurServices from "../components/Homepage/06_OurServices/OurServices";
import VisionaryClients from "../components/Homepage/07_VisionaryClients/VisionaryClients";
import LetsMakeItHappen from "../components/Homepage/10_LetsMakeItHappen/LetsMakeItHappen";
import DeferredSections from "../components/Homepage/DeferredSections";
import DropOfWater from "../components/Homepage/01_HeroSection/DropOfWater/DropOfWater";
import { getHeader, getHomepage, getHomepageSEO } from "../lib/BackendContents";
import Header from "../components/Headers/Header";
import LDJsonScripts from "../components/Seo/LDJsonScripts";
import { parseSeoTagsForMetaData } from "../lib/seo";

export async function generateMetadata() {
  try {
    const seo = await getHomepageSEO();
    return parseSeoTagsForMetaData(seo);
  } catch {
    return {
      title: "Boxcom",
      description: "Boxcom",
    };
  }
}

export default async function Homepage() {
  const [header, homepage, seo] = await Promise.all([
    getHeader(),
    getHomepage(),
    getHomepageSEO(),
  ]);

  const {
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
  } = homepage;

  return (
    <div className="relative">
      <LDJsonScripts seoData={seo.head} />
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
      <DeferredSections
        dataSeeForYourself={dataSeeForYourself}
        dataTestimonials={dataTestimonials}
        dataLately={dataLately}
      />
      <LetsMakeItHappen data={dataLetsMakeItHappen} />
    </div>
  );
}
