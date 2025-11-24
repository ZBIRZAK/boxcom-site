"use client";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import Pencil from "./Pencil/Pencil";
import Manuscript from "./Manuscript/Manuscript";
import Cup from "./Cup/Cup";
import PurpleFlower from "./PurpleFlower/PurpleFlower";
import Eyes from "./Eyes/Eyes";
import Bracelet from "./Bracelet/Bracelet";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import ImagePreloader from "../../Loaders/ImagePreloader";
import ScrollButton from "../../Buttons/ScrollButton";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ContentMarketing = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    console.log("Setting up ScrollTrigger for ContentMarketing", isMobile);

    const textEl = document.getElementById("content-marketing-text");
    const imageEl = document.getElementById("cont-img-girl-with-book");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page02_screen02",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-girl-with-book",
          pinSpacing: false,
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [isMobile]);

  console.log("Data in ContentMarketing:", data); 
  return (
    <section
      id="page02_screen02"
      className="screen02 relative !h-auto section-dark grid grid-cols-1 md:grid-cols-[65%_35%]"
    >
      {/* Text column */}
      <ColumnContentWrapper id="content-marketing-text" className={"!order-2 md:order-1 "}>
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text}  />
        <Title2 html={data.subtitle2} />
        <TextList html={data.content_services} className={"[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4"} />
        <EndTitle html={data.bigEndText} />
      </ColumnContentWrapper>

      {/* Pinned image column */}
      <div
        id="cont-img-girl-with-book"
        className="relative md:overflow-visible overflow-hidden !order-1 md:order-2 h-screen"
      >
        <img
          src="/images/creative_content/bg-girl-with-book.png"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/creative_content/girl-with-book.png"
          className="absolute w-[80%] scale-150 bottom-0 left-[20%] md:w-[90%] md:-bottom-[5%] md:-left-[6%] md:scale-100"
        />
        <div className="absolute w-[105%] md:bottom-[-10%] bottom-[-7%] right-0 pointer-events-none overflow-hidden">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="" />
        </div>
        <div className="md:hidden top-20 !text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <PurpleFlower />
        <Eyes />
        <Bracelet />
        <Cup />
        <Manuscript />
        <Pencil />
        {!isMobile && <ScrollButton to="page02_screen03" />}
      </div>
    </section>
  );
};

export default ContentMarketing;
