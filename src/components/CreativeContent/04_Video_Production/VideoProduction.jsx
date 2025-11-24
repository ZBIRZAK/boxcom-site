"use client";
import { useEffect } from "react";
import Camera from "./Camera/Camera";
import Coffee from "./Coffee/Coffee";
import Yes from "./Yes/Yes";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import CameraMan from "./CameraMan";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import ScrollButton from "../../Buttons/ScrollButton";

const VideoProduction = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("video-production-text");
    const imageEl = document.getElementById("cont-img-man-taking-photos");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page02_screen04",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-man-taking-photos",
          pinSpacing: false,
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [isMobile]);

  return (
    <section
      id="page02_screen04"
      className="relative !h-auto overflow-hidden section-dark grid grid-cols-1 md:grid-cols-[65%_35%]"
    >
      {/* Text column */}

      <ColumnContentWrapper id="video-production-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.video_production_services} />
        <EndTitle html={data.bigEndText} />
      </ColumnContentWrapper>

      {/* Pinned image column */}
      <div
        id="cont-img-man-taking-photos"
        className="relative md:overflow-visible overflow-hidden order-1 md:order-2 h-screen"
      >
        <div className="absolute w-full h-full overflow-hidden">
          <img
            src="/images/creative_content/bg-cuisine.jpg"
            alt="A man is taking pictures with his camera"
            className="scale-120 translate-y-[10%] md:scale-120 object-cover w-full h-full"
          />
        </div>

        <div className="absolute w-[160%] md:top-[-17%] top-[-7%] -right-0   pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="  w-full  " />
        </div>
        

        {/* TITRE POUR MOBILE */}
        <div className="md:hidden top-20 !text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>

        {/* <h2
          className="heading-primary my-3w !text-[3rem]"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h2> */}

        <CameraMan />
        <div className="absolute w-[105%] md:bottom-[-10%] bottom-[-7%] -right-0 rotate-180  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className=" w-full  " />
        </div>
        <Yes />
        <Coffee />
        {/* <Stain /> */}
        <Camera />
        {!isMobile && <ScrollButton to="page02_screen06" />}
      </div>
    </section>
  );
};
export default VideoProduction;
