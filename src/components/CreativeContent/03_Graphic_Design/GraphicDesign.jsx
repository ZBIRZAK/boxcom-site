"use client";
import { useEffect } from "react";
import Crown from "./Crown/Crown";
import FaceEmoji from "./FaceEmoji/FaceEmoji";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import EyesLeftRight from "./EyesLeftRight";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import ScrollButton from "../../Buttons/ScrollButton";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const GraphicDesign = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("graphic-design-text");
    const imageEl = document.getElementById("cont-img-chicken-with-crown");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page02_screen03",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-chicken-with-crown",
          pinSpacing: false,
          // markers: true,
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [isMobile]);

  return (
    <section
      className="!h-auto section-light overflow-hidden relative grid grid-cols-1 md:grid-cols-[45%_55%] w-full md:min-h-screen"
      id="page02_screen03"
    >
      <div
        id="cont-img-chicken-with-crown"
        className="relative h-screen overflow-hidden"
      >
        <img
          src="/images/creative_content/bg-screen3.jpg"
          className="w-full h-full object-cover object-center"
        />
        

        {/* LE CADRE */}
        <div className="absolute w-[40%] bottom-[10%] right-[-12%] h-auto md:w-[35%] md:-bottom-[10%] md:right-[-6%]">
          <img
            src="/images/creative_content/painting.png "
            className="w-full h-full scale-120 md:scale-100"
          />
          <div className="absolute -left-[5%] top-[35%] md:top-5/12 md:left-[10%] scale-x-[-1] -rotate-12">
            <EyesLeftRight />
          </div>
          
        </div>

        {/* LE POULET */}
        <div className="absolute w-[85%] h-auto bottom-0 right-[29%] md:w-[58%] md:bottom-[-7%]">
          <img
            src="/images/creative_content/chicken.png"
            className="w-full h-full"
          />
          <Crown />
          <FaceEmoji />
        </div>
        <div className="absolute w-[105%] md:top-[-10%] top-[-7%] -left-5 pointer-events-none overflow-hidden">
            <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="" />
        </div>
        <div className="absolute w-[105%] md:bottom-[-10%] bottom-[-7%] -left-5 pointer-events-none overflow-hidden">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="" />
        </div>

        {/* Titre pour mobile */}
        <div className="md:hidden top-20 !text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
      </div>

      <ColumnContentWrapper id="graphic-design-text">
        <Title1 html={data.title} className={"-ml-2"} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.graphic_design_services} />
        <EndTitle html={data.bigEndText} />

        <div className="hidden relative md:block">
          <ScrollButton to="page02_screen04" />
        </div>
      </ColumnContentWrapper>
    </section>
  );
};
export default GraphicDesign;
