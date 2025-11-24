"use client";

import BottomSection from "./BottomSection/BottomSection";
import styles from "./Experiences.module.scss";
import SmileyHeartEyes from "./SmileyHeartEyes";
import EyesLeftRight from "./EyesLeftRight";
import GlowingArrow from "./GlowingArrow";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import ImagePreloader from "../../Loaders/ImagePreloader";
import Man from "./Man";
import ScrollButton from "../../Buttons/ScrollButton";

function parseStringToElements(input) {
  // Split by [placeholder]
  const parts = input.split(/(\[[^\]]+\])/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[(.+)\]$/);
    if (match) {
      const key = match[1]; // e.g. "eyes"
      if (key === "smiley") {
        return <SmileyHeartEyes key={index} />;
      } else if (key === "eyes") {
        return <EyesLeftRight key={index} />;
      } else {
        throw new Error("Unknown kind of token found: " + key);
      }
    }
    // Otherwise, normal text
    return (
      <div key={index} className="inline-block drop-shadow-lg/75">
        {part}
      </div>
    );
  });
}

const Experiences = ({ data }) => {
  const title1 = parseStringToElements(data.title1);
  const isMobile = useIsMobile();
  console.log("Experiences DATA:", data);
  return (
    <section
      id="page02_screen01"
      className={`relative h-screen w-full overflow-hidden ${styles.ExperiencesSection}`}
    >
      <h1 className="hidden">{data.main_title}</h1>
      <ImagePreloader
        imageUrls={[
          "/images/creative_content/bg_screen1.jpg",
          "/images/creative_content/man-brightened.png",
        ]}
      >
        <div className="absolute inset-0 w-full h-full object-cover">
          <img
            src="/images/creative_content/bg_screen1.jpg"
            className="h-full w-full"
          />
        </div>
        {/* <Flower3 />
        <Flower1 />
        <Flower2 /> */}
        {/* <Duh /> */}
        {/* <Brush /> */}
        <GlowingArrow />

        <Man />
        <div className="absolute flex flex-col justify-center items-center md:!top-3/12 !top-5/12 md:left-[10%]  mx-5 heading-primary heading-secondary--white">
          <div className="flex gap-2 items-end mb-4">{title1}</div>
          <div
            className="bg-[#ff0062] md:py-[0.2em] py-[0.2em] md:px-[1em] px-[.2em] rounded-[20px] md:!text-[4rem] !text-[.7em] drop-shadow-lg/75 drop-shadow-white"
            dangerouslySetInnerHTML={{ __html: data.title2 }}
          />
        </div>

        {/* <h1
          dangerouslySetInnerHTML={{ __html: title1 }}
          className="absolute text-center top-3/12  w-[65%] heading-primary heading-secondary--white"
        ></h1> */}
        <BottomSection data={data} buttonContainer={styles.buttonContainer} />
        {/* <div className="absolute top-0 left-0 w-full h-auto">
          <Ball />
        </div> */}
        {!isMobile && <ScrollButton to="page02_screen02" />}
      </ImagePreloader>
    </section>
  );
};
export default Experiences;
