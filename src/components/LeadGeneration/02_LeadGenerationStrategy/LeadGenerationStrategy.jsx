"use client";

import { useEffect } from "react";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import Button from "../../Buttons/Button2";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Calculator from "./Calculator";
import Books from "./Books";
import GlowingArrow from "./GlowingArrow";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const LeadGenerationStrategy = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("lead-text");
    const imageEl = document.getElementById("cont-img-man-riding-horse");
    console.log("textEl:", textEl);
    console.log("imageEl:", imageEl);

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      console.log("textHeight:", textHeight);
      console.log("imageHeight:", imageHeight);

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page05_screen02",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-man-riding-horse",
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
      id="page05_screen02"
      className="screen02 overflow-hidden relative !h-auto grid grid-cols-1 md:grid-cols-[45%_55%] w-full md:!min-h-screen z-10 section-light"
    >
      {/* COLONNE IMAGE */}
      <div
        id="cont-img-man-riding-horse"
        className="overflow-hidden  md:overflow-visible relative h-screen"
      >
        <div className="md:hidden top-35  text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/lead_generation/chess.png"
          className="w-full h-full object-cover md:object-bottom object-right "
        />
        <div className="absolute md:w-[79%] w-[100%] bottom-[0%] md:left-[30%] ">
          <img
            src="/images/persons/man-riding-horse.png"
            alt="Man Riding A Horse"
          />
          <Calculator />
          <Books />
          <GlowingArrow />
        </div>
        <div className="absolute w-[110%] -left-10 md:bottom-[-13%] bottom-[-7%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
      </div>

      {/* COLONNE TEXTE */}
      <ColumnContentWrapper id="lead-text" >
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.lead_generation_strategy_services} className="[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4" />
        <EndTitle html={data.bigEndText} />
        <div className="hidden relative w-full righ-0 !bottom-0 md:block">
          <ScrollButton to="page05_screen03" />
        </div>
      </ColumnContentWrapper>
      
    </section>
  );
};
export default LeadGenerationStrategy;
