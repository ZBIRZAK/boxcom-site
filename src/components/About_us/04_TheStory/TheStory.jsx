"use client";


import { useRouter } from "next/navigation";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Bulb from "./Bulb";
import BooksGlobe from "./BooksGlobe";
import Robot from "./Robot";
import Donut from "./Donut";
import ScrollButton from "../../Buttons/ScrollButton";

gsap.registerPlugin(ScrollTrigger);

const TheStory = ({ data }) => {
  // useNextScreenAboveCurrent("page01_screen02", "page01_screen03");
  const isMobile = useIsMobile();
  const router = useRouter();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("story-text");
    const imageEl = document.getElementById("cont-img-women-wih-tea2");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page06_screen04",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-women-wih-tea2",
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
    <>
      <section
        id="page06_screen04"
        className=" relative !h-auto grid grid-cols-1 md:grid-cols-[60%_40%] w-full md:min-h-screen z-10 section-dark"
      >
        <ColumnContentWrapper id="story-text" className={"mt-[5%]"} >
            <h1 className="title text-white">{data.title}</h1>
            <div className="text" dangerouslySetInnerHTML={{ __html: data.text }} />
            <p className="subtitle !text-[#ff0062]">{data.subtitle}</p>
            <div className="text" dangerouslySetInnerHTML={{ __html: data.text2 }} />
        </ColumnContentWrapper>
        <div className="md:order-2  flex justify-center items-center md:p-[15%]  h-screen overflow-hidden" id="cont-img-women-wih-tea2">
        <div
          className="overflow-hidden relative w-full h-full"
        >
          <img
            src="/images/persons/two_women_cut.jpg"
            className="w-full h-full object-cover object-center md:object-[0%_10%]"
          />

          <Bulb /> 

          {/* <Donut /> */}
          <BooksGlobe />
          <Robot/>
        </div>
        </div>
        <ScrollButton to="page06_screen05" />
      </section>
    </>
  );
};

export default TheStory;
