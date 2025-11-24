"use client";

import Loudspeaker from "./Loudspeaker/Loudspeaker";
import Euro from "./Currency/Euro";
import Dollar from "./Currency/Dollar";
import Up from "./Up/Up";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Calculator from "./Calculator/Calculator";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";

const Sea = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("sea-text");
    const imageEl = document.getElementById("cont-img-colorfull-girl");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page04_screen04",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-colorfull-girl",
          pinSpacing: false,
          // markers: true,
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [isMobile]);
  // console.log(data);

  return (
    <section
      id="page04_screen04"
      className="screen04 w-full !h-auto relative overflow-hidden section-light grid grid-col-1 md:grid-cols-[45%_55%]"
    >
      <div
        className="relative h-screen md:overflow-visible overflow-hidden"
        id="cont-img-colorfull-girl"
      >
        {/* TITRE MOBILE */}
        <div className="md:hidden absolute top-[20%] sm:top-[15%] sm:left-10 text-shadow-lg/50 text-center">
          <h2
            className="heading-primary !text-[3rem] title !text-shadow-lg/50"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/web_dev/bg-screen4.jpg"
          alt=""
          className="w-full h-full"
        />

        <div className="absolute w-[100%] md:w-[100%] max-h-[50%] md:max-h-full h-auto md:bottom-[-10%] bottom-[0%] md:left-[7%] z-[1]">
          <img
            src="/images/persons/colorful_girl.png"
            className="w-full h-full"
          />
          <Loudspeaker />
          <Euro />
          <Dollar />
          <Up />
          <Calculator />
        </div>
        <div className="absolute w-[110%] -left-10 md:top-[-12%] top-[-7%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        <div className="absolute w-[110%] -left-10 md:hidden block bottom-[-7%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
      </div>
      <ColumnContentWrapper id="sea-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList
          html={data.sea_services}
          className="[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4"
        />
        <EndTitle html={data.bigEndText} />
        <div className="hidden relative  md:block">
          <ScrollButton to="page04_screen05" />
        </div>
      </ColumnContentWrapper>
    </section>
  );
};
export default Sea;
