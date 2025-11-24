'use client';
import Canvas from "./Canvas";
import Chart from "./Chart";
import Robot from "./Robot";
import Rocket from "./Rocket";
import Trophy from "./Trophy";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnalyticsOptimization = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("analytics-optimization-text");
    const imageEl = document.getElementById("cont-img-old-woman");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;


      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page05_screen06",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-old-woman",
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
      id="page05_screen06"
      className="relative overflow-hidden !h-auto grid grid-cols-1 md:grid-cols-[37%_63%] w-full md:min-h-screen section-light"
    >
      {/* COLONNE IMAGE */}
      <div id="cont-img-old-woman" className="relative h-screen overflow-hidden md:overflow-visible">
        <div className="md:hidden top-40 text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <div className="absolute w-[110%] -left-10 md:top-[-10%] top-[-5%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        <img
          src="/images/lead_generation/bg-analytics.jpg"
          className="absolute w-full h-full object-cover"
        />

        <img
          src="/images/lead_generation/old-woman.png"
          className="absolute w-[100%] left-1/2 -translate-x-1/2 bottom-0 scale-120"
        />

        <Rocket />
        <Trophy />
        <Chart />
        {/* <Canvas /> */}
        <Robot />
      </div>

      {/* COLONNE TEXTE */}
      <ColumnContentWrapper id="analytics-optimization-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.text2} className="[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4" />
        <EndTitle html={data.bigEndText} />

        <div className="hidden relative -bottom-11 md:block">
          <ScrollButton to="page05_screen07" />
        </div>
      </ColumnContentWrapper>
      
    </section>
  );
};

export default AnalyticsOptimization;
