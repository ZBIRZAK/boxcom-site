"use client";

import { useEffect } from "react";
import Hammer from "./Hammer/Hammer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import Nail from "./Nail/Nail";
import Robot from "./Robot/Robot";
import Books from "./Books/Books";
import Crown from "./Crown/Crown";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";

const MaintenanceAndAnalytics = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("maintenance-text");
    const imageEl = document.getElementById("cont-img-man-with-beard");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page04_screen05",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-man-with-beard",
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
      id="page04_screen05"
      className={`screen03 w-full !h-auto relative section-dark grid grid-cols-1 md:grid-cols-[55%_45%] overflow-hidden`}
    >
      <div className="absolute w-[60%] -right-10 md:top-[-15%] top-[-2%] z-1 -rotate-3  pointer-events-none overflow-hidden ">
        <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
      </div>
      <div className="absolute w-[70%] -left-10 md:top-[-17%] top-[-3%] z-1  pointer-events-none overflow-hidden ">
        <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
      </div>
      <ColumnContentWrapper
        id="maintenance-text"
        className={"md:!order-1 !order-2"}
      >
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList
          html={data.maintenance_and_analytics_services}
          className="[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4"
        />
        <EndTitle html={data.bigEndText} />
      </ColumnContentWrapper>

      <div
        id="cont-img-man-with-beard"
        className="relative md:overflow-visible overflow-hidden h-screen md:!order-2 order-1"
      >
        {/* TITRE MOBILE */}
        <div className="md:hidden z-2 absolute w-full top-20 text-shadow-lg/75 text-center">
          <h2
            className="heading-primary my-3 !text-[3rem] title !text-shadow-lg/50"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/web_dev/bg_screen5.jpeg"
          className="w-full h-full object-cover scale-y-[1.3] scale-x-[1] sm:scale-x-[1] sm:scale-y-[1] translate-y-[100px] sm:translate-y-0 transform"
        />
        <div className="absolute w-[120%] -left-10 md:bottom-[-15%] bottom-[-8%] -rotate-3 z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        <div className="absolute w-[100%] sm:min-w-[100%] sm:max-h-full md:-bottom-[20%] bottom-0 left-1/2 -translate-x-1/2">
          <img src="/images/web_dev/man_with_a_beard.png" alt="Man" />
          <Hammer />
          <Nail />
          <Robot />
          <Books />
          <Crown />
        </div>

        <div className="hidden md:block">
          <ScrollButton to="page04_screen06" />
        </div>
      </div>
    </section>
  );
};
export default MaintenanceAndAnalytics;
