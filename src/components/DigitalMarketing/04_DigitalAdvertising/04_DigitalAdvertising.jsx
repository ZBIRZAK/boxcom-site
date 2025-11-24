"use client";

import { useEffect } from "react";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dollar from "./Dollar/Dollar";
import Euro from "./Euro/Euro";
import Chart from "./Chart/Chart";
import Location from "./Location/Location";
import Arobase from "./Arobase/Arobase";
import Hashtag from "./Hashtag/Hashtag";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import ScrollButton from "../../Buttons/ScrollButton";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";

const DigitalAdvertising = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("advertising-text");
    const imageEl = document.getElementById("cont-img-open-field");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page03_screen04",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-open-field",
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
      className="!h-auto overflow-hidden section-light relative grid grid-cols-1 md:grid-cols-[45%_55%] w-full md:min-h-screen"
      id="page03_screen04"
    >
      {/* <div className="md:hidden text-center">
        <h2
          className="heading-primary my-3 !text-[3rem]"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h2>
      </div> */}

      <div
        className="relative h-screen md:overflow-visible overflow-hidden"
        id="cont-img-open-field"
      >
        <div className="md:hidden top-20 !text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/digital_marketing/urban-street.png "
          className="w-full h-full object-cover "
        />
        <div className="absolute w-[155%] md:top-[-12%] top-[-10%] -left-5   pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet"  />
        </div>
        <div className="absolute w-[115%] md:bottom-[-15%] bottom-[-5%]  -left-10 rotate-177  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="" />
        </div>
        <div className="absolute -bottom-1 -right-[12%] md:w-[73%] w-[130%] ">
          <img
            src="/images/digital_marketing/yellow-robot.png"
            className=""
          ></img>
          

          <Arobase />
          <Dollar />
          <Euro />
          <Hashtag />
          <Location />
          <Chart />
        </div>
      </div>
      <ColumnContentWrapper id="advertising-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.digital_advertising_services} />
        <EndTitle html={data.bigEndText} />

        <div className="hidden left-15 relative md:block">
          <ScrollButton to="page03_screen05" />
        </div>
      </ColumnContentWrapper>
    </section>
  );
};

export default DigitalAdvertising;
