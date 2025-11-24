"use client";

import Tiktok from "./SocialMedia/Tiktok";
import Instagram from "./SocialMedia/Instagram";
import Facebook from "./SocialMedia/Facebook";
import Whatsapp from "./SocialMedia/Whatsapp";
import Youtube from "./SocialMedia/Youtube";
import Star1 from "./Stars/Star1";
import Star2 from "./Stars/Star2";
import Star3 from "./Stars/Star3";
import Star4 from "./Stars/Star4";
import Star5 from "./Stars/Star5";
import CleDeSol from "./MusicalNotes/CleDeSol";
import CrocheVerte from "./MusicalNotes/CrocheVerte";
import CrocheViolette from "./MusicalNotes/CrocheViolette";
import DoubleCrocheJaune from "./MusicalNotes/DoubleCrocheJaune";
import WhistlingEmoji from "./WhistlingEmoji/WhistlingEmoji";
import Duh from "./Duh/Duh";
import Yes from "./Yes/Yes";
import Lol from "./Lol/Lol";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import usePinImage from "../../../hooks/usePinImage";
import ScrollButton from "../ScrollButton";

const SocialMediaManagement = ({ data }) => {
  usePinImage({
    textId: "socialmedia-text",
    imageId: "cont-img-superwoman-pink-hair",
    triggerId: "page03_screen03",
  });

  return (
    <section
      className="w-full overflow-hidden !h-auto relative section-dark grid grid-cols-1 md:grid-cols-[55%_45%]"
      id="page03_screen03"
    >
      {/* <div className="md:hidden order-1 text-center">
        <h2
          className="heading-primary my-3 !text-[3rem]"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h2>
      </div> */}

      <ColumnContentWrapper id="socialmedia-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} className="subtitle--white" />
        <ParagraphText html={data.text} className="text--white" />
        <Title2 html={data.subtitle2} className="text--white" />
        <TextList html={data.socialmedia_services} />
        <EndTitle html={data.bigEndText} className="heading-secondary--white" />
      </ColumnContentWrapper>

      <div
        className="relative h-screen md:order-2 order-1 md:overflow-visible overflow-hidden "
        id="cont-img-superwoman-pink-hair"
      >
        <div className="md:hidden top-35 text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/digital_marketing/bg-screen3.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-[105%] md:top-[-13%] top-[-3%] right-0  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" />
        </div>

        <div className="absolute md:w-[72%] w-[110%] md:left-[11%] left-[-4%] bottom-0 h-auto">
          <img
            src="/images/digital_marketing/pinkhair-woman.png"
            className="w-full"
          />

          <Facebook />
          <Whatsapp />
          <Instagram />
          <Tiktok />
          <Youtube />

          <Star1 />
          <Star2 />
          <Star3 />
          <Star4 />
          <Star5 />
        </div>
        <div className="absolute w-[115%] md:bottom-[-15%] bottom-[-5%]  -left-10 rotate-177  pointer-events-none overflow-hidden ">
          <img
            src="/images/objects/torn_sheet.png"
            alt="Torn sheet"
            className=""
          />
        </div>
        <CleDeSol />
        <CrocheViolette />
        <DoubleCrocheJaune />
        <CrocheVerte />

        <Duh />
        <Yes />
        <Lol />

        <WhistlingEmoji />
        <ScrollButton to="page03_screen04" />
      </div>

      <div className="absolute z-99999 w-full top-[-7%] left-0 right-0 pointer-events-none overflow-hidden">
        <img
          src="/images/objects/torn-papers/torn-paper-1.png"
          alt="Torn sheet"
        />
      </div>
    </section>
  );
};
export default SocialMediaManagement;
