import HeroSection from "./01_HeroSection/HeroSection";
import NarrativeSection2 from "./02_NarrativeSection/NarrativeSection2";
import Expertise from "./03_Expertise/Expertise";
import WhyChooseUs from "./04_WhyChooseUs/WhyChooseUs";
import ArtSection from "./05_Art/ArtSection";
import OurServices from "./06_OurServices/OurServices";
import VisionaryClients from "./07_VisionaryClients/VisionaryClients";
import LetsMakeItHappen from "./10_LetsMakeItHappen/LetsMakeItHappen";
import DeferredSections from "./DeferredSections";
import DropOfWater from "./01_HeroSection/DropOfWater/DropOfWater";
import Header from "../Headers/Header";
import LDJsonScripts from "../Seo/LDJsonScripts";

export default function HomepagePage({ header, homepage, seo, locale }) {
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
      <Header data={header} transitionToDark={true} locale={locale} />
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
      <OurServices data={dataServices} locale={locale} />
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
