"use client";
import BigIdeas from "./BigIdeas";
import useNextScreenAboveCurrent from "../../../hooks/useNextScreenAboveCurrent";
import Stain from "./Stain";
import Duh from "./Duh/Duh";
import BrushStains from "./BrushStains/BrushStains";
import BiggerResults from "./BiggerResults";
import styles from "./ArtSection.module.scss";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollButton from "../../Buttons/ScrollButton";

const ArtSection = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("art-text");
    const imageEl = document.getElementById("cont-img-man-in-painting");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page01_screen05",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-man-in-painting",
          pinSpacing: false,
          // markers: true,
        });

        return () => {
          st.kill(); // kill only this ScrollTrigger
        };
      }
    }
  }, [isMobile]);

  return (
    <section
      id="page01_screen05"
      className="relative w-full md:min-h-screen !h-auto grid md:grid-cols-[55%_45%] grid-cols-1 section-light z-30"
    >
      <BiggerResults data={data} />

      <div className="flex justify-center md:order-1 order-3 items-center bg-white text-black">
        <div id="art-text" className="max-w-[650px]">
          <BigIdeas data={data} paragraphStyles={styles.paragraph} />
        </div>
      </div>

      <div
        className="overflow-hidden order-2 relative h-screen"
        id="cont-img-man-in-painting"
      >
        <img
          src="/images/homepage/bg-tableau.webp"
          className="absolute top-0 left-0 h-full"
        />
        <img
          src="/images/homepage/astronaute.png"
          className="absolute -bottom-[20px] left-1/2 transform -translate-x-1/2 h-[92%]"
        />
        <div className="absolute top-[22%] md:left-[26%] left-[10%] w-[300px]">
          <Duh />
        </div>

        <BrushStains />
        <div className="hidden md:block">
          <ScrollButton to="page01_screen06" />
        </div>
      </div>
    </section>
  );
};

export default ArtSection;
