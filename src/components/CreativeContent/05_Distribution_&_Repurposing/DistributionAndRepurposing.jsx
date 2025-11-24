"use client";

import ScrollButton from "../../Creative_content/ScrollButton";
import styles from "./DistributionAndRepurposing.module.scss";
import Dog from "./SkatingGirl/SkatingGirl";
import Hello from "./Hello/Hello";
import Plane1 from "./Planes/Plane1";
import Plane2 from "./Planes/Plane2";
import Plant from "./Plant/Plant";
import { useIsMobile } from "../../../contexts/UserAgentProvider";

const DistributionAndRepurposing = ({ data }) => {
  const isMobile=useIsMobile();
  return (
    <section
      className={`relative bg-white grid grid-cols-[45%_55%] ${styles.distributionAndRepurposingSection}`}
      id="page02_screen05"
    >
      <div className="h-screen relative pr-[4rem] overflow-hidden">
        <img
          src="/images/creative_content/bg-girl-colorful-costume.png"
          className="w-full h-full object-cover object-top"
        />
        <Plane1 />
        <Dog />
        <div className="absolute w-[85%] h-auto -bottom-[20%] right-0">
          <img
            src="/images/creative_content/woman-paper-plane.png"
          />
        </div>
        <Plane2 />
        <Hello />
        
        <Plant />
      </div>

      <div className="px-12 pt-[100px] relative">
        <h2
          dangerouslySetInnerHTML={{ __html: data.title }}
          className="heading-primary mb-4"
        ></h2>
        <p
          dangerouslySetInnerHTML={{ __html: data.subtitle }}
          className="subtitle mb-3"
        ></p>
        <div
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-black"
        ></div>
        <h2
          dangerouslySetInnerHTML={{ __html: data.subtitle2 }}
          className="font-bold text-2xl text-black mb-4"
        ></h2>
        <ul
          dangerouslySetInnerHTML={{
            __html: data.distribution_and_repurposing_services,
          }}
          className="text-black"
        ></ul>
        <h2
          dangerouslySetInnerHTML={{ __html: data.bigEndText }}
          className="heading-secondary  bottom-0 mb-4"
        ></h2>
        {!isMobile && <ScrollButton to="page02_screen06" />}
      </div>
    </section>
  );
};
export default DistributionAndRepurposing;
