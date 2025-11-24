"use client";

import { useEffect } from "react";
import Dinosaur from "./Dinosaur/Dinosaur";
import Note from "./MusicalNotes/Note";
import SittingMushroom from "./SittingMushroom/SittingMushroom";
import WaterSplash from "./WaterSplash/WaterSplash";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlyingButterfly from "./FlyingButterfly";
import Creature from "./Creature";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";

const Websites = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("websites-text");
    const imageEl = document.getElementById("cont-pc-cubes");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page04_screen02",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-pc-cubes",
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
      id="page04_screen02"
      className="screen02 relative !h-auto grid grid-cols-1 md:grid-cols-[35%_65%] w-full md:min-h-screen section-light"
    >
      {/* Colonne gauche: image avec le laptop */}
      <div
        id="cont-pc-cubes"
        className="relative h-screen overflow-hidden md:overflow-visible"
      >
        {/* Mobile title */}
        <div className="md:hidden top-[8%]  w-full absolute text-center z-1">
          <h2
            className="heading-primary my-3 !text-[3.5rem] title !text-shadow-lg/50"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>

        <div className="absolute h-full w-full overflow-hidden">
          <img
            src="/images/web_dev/bg-websites.jpeg"
            className="h-[125%] md:h-[115%] w-auto object-cover"
          />
        </div>
        <div className="absolute h-[30%] w-full bottom-[18%] md:bottom-[23%]">
          <img
            src="/images/web_dev/laptop.png"
            className="absolute left-1/2 -translate-x-1/2 scale-[1.3] md:scale-[1.2]"
          />
        </div>
        <SittingMushroom />
        <Creature />
        <Note
          className="bottom-[40%] left-[55%] w-[15%]"
          src="/images/web_dev/doodles/note1.svg"
          repeatDelay={3}
        />
        <Note
          className="bottom-[50%] left-[35%] w-[10%]"
          src="/images/web_dev/doodles/note2.svg"
          repeatDelay={4}
        />
        <Note
          className="bottom-[30%] right-[20%] w-[10%]"
          src="/images/notes/cledesol.svg"
          repeatDelay={5}
        />
        <Dinosaur />
        <WaterSplash />
        <FlyingButterfly />
      </div>
      <ColumnContentWrapper id="websites-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.website_services} />
        <EndTitle html={data.bigEndText} />
        <div className="hidden relative md:block">
          <ScrollButton to="page04_screen03" />
        </div>
      </ColumnContentWrapper>
    </section>
  );
};
export default Websites;
