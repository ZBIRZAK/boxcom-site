"use client";

import Bird from "./Bird";
import ZigzagRight from "./ZigZags/ZigzagRight";
import ZigzagLeft from "./ZigZags/ZigZagLeft";
import Lol from "./Lol";
import SpiralHypnotic from "./Spirals/SpiralHypnotic";
import Cube from "./Cube";
import SittingMushroom from "./SittingMushroom/SittingMushroom";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import EndTitle from "../../Contents/EndTitle";
import TextList from "../../Contents/TextList";
import usePinImage from "../../../hooks/usePinImage";

const DigitalStrategy = ({ data }) => {
  usePinImage({
    textId: "strategy-text",
    imageId: "cont-img-door-beach",
    triggerId: "page03_screen02",
  });

  return (
    <section
      className={`screen02 overflow-hidden w-full !h-auto relative grid grid-cols-1 md:grid-cols-[35%_65%] md:min-h-screen section-light`}
      id="page03_screen02"
    >
      {/* <div className="absolute w-full z-1 text-shadow-lg top-[4%] md:hidden text-center">
        <h2
          className="heading-primary my-3 !text-[3rem]"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h2>
      </div> */}

      <div
        className="relative h-screen md:overflow-visible overflow-hidden "
        id="cont-img-door-beach"
      >
        <div className="md:hidden top-35 text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/digital_marketing/door-sea.jpeg"
            className="h-full w-full object-cover scale-126 "
          />
        </div>
        <div className="absolute w-[105%] md:bottom-[-10%] bottom-[-5%] left-0 rotate-180  pointer-events-none overflow-hidden ">
          <img
            src="/images/objects/torn_sheet.png"
            alt="Torn sheet"
            className="scale-x-110 -rotate-1"
          />
        </div>
        <div className="absolute bottom-0 right-[0%] md:right-[-7%] w-full md:w-[90%]">
          <img src="/images/digital_marketing/man-sofa.png" />

          <div className="absolute top-[-22%] md:top-[-18%] left-[21%] md:left-[24%] w-[33%] rotate-[-15deg]">
            <img src="/images/shapes/spiral-ribbon.svg"></img>
          </div>
          <SittingMushroom />
          <SpiralHypnotic />
          <Lol />
          <ZigzagLeft />
          <ZigzagRight />

          <Bird />
        </div>

        <Cube />
        <div className="absolute w-[25%] md:w-[20%] top-[25%] md:top-[5%]  right-[27%] md:right-[20%] ">
          <img src="/images/nature/sun2.svg" />
        </div>
      </div>
      <ColumnContentWrapper id="strategy-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.consulting_services} />
        <EndTitle html={data.bigEndText} />

        <div className="hidden relative md:block">
          <ScrollButton to="page03_screen03" />
        </div>
      </ColumnContentWrapper>
    </section>
  );
};

export default DigitalStrategy;
