"use client";

import GlassOfTea from "./GlassOfTea/GlassOfTea";
import BooksGlobe from "./BooksGlobe/BooksGlobe";
import SmallRobot from "./SmallRobot/SmallRobot";
import BubbleBulbWrapper from "./BubbleBulbWrapper/BubbleBulbWrapper";
import Flower from "./Flower/Flower";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import EndTitle from "../../Contents/EndTitle";
import CTAButton from "./CTAButton";

const NarrativeSection2 = ({ data }) => {
  // useNextScreenAboveCurrent("page01_screen02", "page01_screen03");
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("narrative-text");
    const imageEl = document.getElementById("cont-img-women-wih-tea");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page01_screen02",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-women-wih-tea",
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
    <>
      <section
        id="page01_screen02"
        className="screen02 relative !h-auto grid grid-cols-1 md:grid-cols-[45%_55%] w-full md:min-h-screen z-10 section-light"
      >
        {/* Colonne gauche: image des 2 femmes */}
        <div
          className="overflow-hidden relative h-screen"
          id="cont-img-women-wih-tea"
        >
          {/* Mobile title */}
          <div className="md:hidden top-[10%] w-full absolute text-center z-1">
            <h2
              className="title !drop-shadow-lg/75"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
          </div>

          {/* VERSION COUPEE DE L'IMAGE POUR DESKTOP */}
          <img
            src="/images/women-working3-cut.png"
            className="w-full h-full object-cover hidden md:block"
          />

          {/* VERSION NON COUPEE DE L'IMAGE POUR MOBILE */}
          <img
            src="/images/women-working3-uncut.jpg"
            className="w-full h-full object-cover block md:hidden object-[65%_50%] scale-120 translate-y-[2%]"
          />

          {/* <img
            src="/images/women-working2-min.png"
            className="w-full h-full object-cover object-center md:object-[0%_70%]"
          /> */}

          <BubbleBulbWrapper />
          {/* <div className="absolute aspect-square w-[40%] left-[31%] top-[25%] border-2 border-orange-500">
            <div className="absolute w-[40%] -left-[7%] top-[87%]">
              <img src="/images/shapes/bubble-1.svg" />
            </div>
            <div className="absolute w-[40%] left-[87%] top-[83%]">
              <img src="/images/shapes/bubble-1.svg" className="scale-x-[-1]" />
            </div>
            <div className="absolute w-[40%] -left-[1%] top-[65%]">
              <img src="/images/shapes/bubble-2.svg" />
            </div>
            <div className="absolute w-[40%] left-[70%] top-[60%]">
              <img src="/images/shapes/bubble-2.svg" className="scale-x-[-1]" />
            </div>
            <div className="absolute w-[120%] left-[2%] top-[5%]">
              <img src="/images/shapes/bubble-3.svg" />
            </div>
          </div> */}
          <GlassOfTea />
          {/* <Donut /> */}
          <BooksGlobe />
          <Flower />
          <SmallRobot />
        </div>

        {/* Colonne droite: texte */}
        <ColumnContentWrapper id="narrative-text">
          <Title1 html={data.title} />
          <Subtitle1 html={data.subtitle} />
          <ParagraphText html={data.mainText} />
          <EndTitle html={data.bigEndText1} />
          <CTAButton data={data} />
          <div className="hidden md:block z-20">
            <ScrollButton to="page01_screen03" />
          </div>
        </ColumnContentWrapper>
      </section>
    </>
  );
};

export default NarrativeSection2;
