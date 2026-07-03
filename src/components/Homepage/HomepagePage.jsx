import HeroSection from "./01_HeroSection/HeroSection";
import NarrativeSection2 from "./02_NarrativeSection/NarrativeSection2";
import Expertise from "./03_Expertise/Expertise";
import BoxComAfrica from "../About_us/05_BoxComAfrica/BoxComAfrica";
import WhyChooseUs from "./04_WhyChooseUs/WhyChooseUs";
import ArtSection from "./05_Art/ArtSection";
import OurServices from "./06_OurServices/OurServices";
import VisionaryClients from "./07_VisionaryClients/VisionaryClients";
import LetsMakeItHappen from "./10_LetsMakeItHappen/LetsMakeItHappen";
import DeferredSections from "./DeferredSections";
import DropOfWater from "./01_HeroSection/DropOfWater/DropOfWater";
import Header from "../Headers/Header";
import LDJsonScripts from "../Seo/LDJsonScripts";

export default function HomepagePage({
  header,
  homepage,
  seo,
  locale,
  homepageBoxComAfrica,
}) {
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
        nextId="page01_screen03b"
        data={dataExpertiseSection}
      />
      <BoxComAfrica
        data={homepageBoxComAfrica}
        locale={locale}
        sectionId="page01_screen03b"
        nextId="page01_screen04"
        titleOverride={
          locale === "fr"
            ? "DEUX ENTITÉS. UN MÊME ÉCOSYSTÈME."
            : "TWO ENTITIES. ONE ECOSYSTEM."
        }
        contentOverrides={
          locale === "fr"
            ? {
                title1: "",
                content1:
                  "<strong>Boxcom est l'architecte :</strong><br />stratégie digitale, contenu, web, performance. Nous construisons la structure, la marque, l'écosystème.",
                title2: "",
                content2: "",
                title3: "",
                content3:
                  "<strong>Boxcom Africa est l'amplificateur :</strong><br />relations presse, réputation, influence, rayonnement panafricain. Nous portons la voix des marques qui font avancer l'Afrique.",
                title4: "",
                content4: "",
                bottomText:
                  "Deux périmètres différents. Une même intention : rendre votre message inoubliable.",
              }
            : {
                title1: "",
                content1:
                  "<strong>Boxcom is the Architect:</strong><br />digital strategy, content, web, performance. We build the structure, the brand, the ecosystem.",
                title2: "",
                content2: "",
                title3: "",
                content3:
                  "<strong>Boxcom Africa is the Amplifier:</strong><br />press relations, reputation, influence, pan-African reach. We carry the voice of brands shaping Africa's future.",
                title4: "",
                content4: "",
                bottomText:
                  "Different scopes. One intention: making your message unforgettable.",
              }
        }
        questionOverride={
          locale === "fr" ? "Vous avez un projet RP ?" : "Got a PR project?"
        }
        ctaOverride={
          locale === "fr" ? "Visitez Boxcom Africa" : "Visit Boxcom Africa"
        }
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
