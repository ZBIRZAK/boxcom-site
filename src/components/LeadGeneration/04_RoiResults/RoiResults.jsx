"use client";
import { useEffect } from "react";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import EndTitle from "../../Contents/EndTitle";
import ParagraphText from "../../Contents/ParagraphText";
import Subtitle1 from "../../Contents/Subtitle1";
import TextList from "../../Contents/TextList";
import Title1 from "../../Contents/Title1";
import Title2 from "../../Contents/Title2";
import Chart from "./Chart";
import Dollar from "./Dollar";
import Euro from "./Euro";
import Rocket from "./Rocket";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RoiResults = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("roi-results-text");
    const imageEl = document.getElementById("cont-img-woman-card");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page05_screen04",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-woman-card",
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
      id="page05_screen04"
      className="relative overflow-hidden !h-auto grid grid-cols-1 md:grid-cols-[37%_63%] w-full md:min-h-screen section-light"
    >
      <div
        id="cont-img-woman-card"
        className="overflow-hidden md:overflow-visible relative h-screen"
      >
        <div className="absolute w-[110%] -left-10 md:top-[-7%] top-[-5%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        <div className="absolute w-[110%] -left-10 md:top-[-7%] md:hidden block bottom-[-5%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        <div className="md:hidden top-35 text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/lead_generation/bg-roi-results.jpg"
          className="absolute w-full h-full object-cover"
        />

        <img
          src="/images/lead_generation/woman-card.png"
          className="absolute md:w-[80%] w-[90%] right-0 bottom-0"
        />

        <Euro />
        <Dollar />
        <Rocket />
        <Chart />
      </div>

      {/* COLONNE TEXTE */}
      <ColumnContentWrapper id="roi-results-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.text2} className="[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4 ]" />
        <EndTitle html={data.bigEndText} />

      <div className="hidden md:block">
        <ScrollButton to="page05_screen05" />
      </div>
      </ColumnContentWrapper>

    </section>
  );
};

export default RoiResults;
