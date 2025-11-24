"use client";

import { useEffect } from "react";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import Chart from "./Chart/Chart";
import Hashtag1 from "./Hashtag1/Hashtag";
import SeoDoodle from "./Seo/SeoDoodle";
import Triangles from "./Triangles/Triangles";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arobase from "./Arobase/Arobase";
import Stars from "./Stars/Stars";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";

const Seo = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("seo-text");
    const imageEl = document.getElementById("cont-img-shapes");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page04_screen03",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-shapes",
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
      id="page04_screen03"
      className="relative overflow-hidden !h-auto section-dark grid grid-cols-1 md:grid-cols-[55%_45%]"
    >
       <div className="absolute w-[60%] -left-10 md:top-[-14%] top-[-1%] -rotate-3 z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
       <div className="absolute md:w-[60%] w-[70%] -right-10 md:top-[-15%] top-[-1%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
  
      <ColumnContentWrapper id="seo-text" className="md:order-2">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.seo_services} />
        <EndTitle html={data.bigEndText} />
      </ColumnContentWrapper>

      <div
        id="cont-img-shapes"
        className="relative md:overflow-visible overflow-hidden order-1 h-screen"
      >
        {/* TITRE MOBILE */}
        <div className="md:hidden z-1 top-20 absolute order-1 text-center text-shadow-lg">
          <h2
            className="heading-primary my-3 !text-[3rem] title !text-shadow-lg/50"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/web_dev/bg-planets.jpeg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <Stars />
        <div className="absolute max-h-[80%] sm:max-h-full w-full bottom-0 md:-left-10 z-1">
          <img src="/images/persons/man-with-rocket.png" alt="Man" />
          <SeoDoodle />
          <Hashtag1 />
          <Chart />
          <Arobase />
        </div>
        <div className="absolute w-[110%] -right-10 md:bottom-[-15%] bottom-[-7%] rotate-177 z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        
        <div className="hidden  md:block">
          <ScrollButton to="page04_screen04" />
        </div>
      </div>
      
    </section>
  );
};
export default Seo;
