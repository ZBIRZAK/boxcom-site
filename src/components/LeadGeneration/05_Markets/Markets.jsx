"use client";

import { useEffect, useRef } from "react";
import Dollar from "./Dollar";
import GlobeEarth from "./GlobeEarth";
import Mushroom from "./Mushroom";
import SEO from "./SEO";
import Sun from "./Sun";
import gsap from "gsap";
import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Markets = ({ data }) => {

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("markets-text");
    const imageEl = document.getElementById("cont-img-woman-paperplane");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page05_screen05",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-woman-paperplane",
          pinSpacing: false,
          // markers: true,
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [isMobile]);
  const seoRef = useRef(null);
  const containerRef = useRef(null);
  const sunRef = useRef(null);
  const mushroomRef = useRef(null);
  const globeRef = useRef(null);
  const dollarRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page05_screen05",
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "restart restart restart restart",
        // markers: true,
      },
      repeat: -1,
      repeatDelay: 0,
    });

    tl.fromTo(
      containerRef.current,
      { y: -350, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power1.out" })
    
    tl.fromTo(seoRef.current, {
      filter: "brightness(1)",
    },{
      filter: "brightness(2)",   // plus lumineux
      duration: 0.2,
      yoyo: true,
      repeat: 70,                // boucle infinie
      ease: "sine.inOut", 
    }, "<"); 

    // 🌞 Sun appears
    tl.fromTo(
      sunRef.current,
      { y: 100, opacity: 0, scale: 0 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out" }
    , "<1");

    // 🌞 Sun rotation runs in parallel (keeps spinning)
    tl.to(sunRef.current, { rotate: 360, duration: 12, ease: "linear" }, "<");

    // 🍄 Mushroom appears
    tl.fromTo(
      mushroomRef.current,
      { scale: 0.3, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out",
      },
      "<1" 
    );
    tl.to(mushroomRef.current, {
      scale:1,
      duration: 15,
      ease: "linear",
    }, '<1');

    // 🌍 Globe appears
    tl.fromTo(
      globeRef.current,
      { scale: 0.3, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: "elastic.out" },
      "<2" 
    );

    // 💵 Dollar appears
    tl.fromTo(
      dollarRef.current,
      { y: 100, opacity: 0, scale: 0 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out" },
      "<2.5" 
    );

    // 💵 Dollar rotation for 5s
    tl.to(dollarRef.current, {
      rotate: 360,
      duration: 5,
      ease: "linear",
    }, "<0.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="page05_screen05"
      className="relative overflow-hidden !h-auto grid grid-cols-1 md:grid-cols-[65%_35%] w-full md:min-h-screen section-dark"
    >
      <div className="absolute w-[60%] -left-10 md:top-[-15%] top-[-2%] z-1  pointer-events-none overflow-hidden ">
        <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
      </div>
      <div className="absolute md:w-[60%] w-[70%]  -right-10 md:top-[-15%] top-[-2%] z-1  pointer-events-none overflow-hidden ">
        <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
      </div>
      
      <ColumnContentWrapper id="markets-text">
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.text2} className="[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4" />
        <EndTitle html={data.bigEndText} />
      </ColumnContentWrapper>

      <div
        id="cont-img-woman-paperplane"
        className="relative md:overflow-visible overflow-hidden order-1 md:order-2 md:h-screen h-[80vh]"
      >
        <div className="absolute w-[140%] -rotate-3 -right-10 md:bottom-[-15%] bottom-[-12%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        <div className="md:hidden top-5 text-shadow-lg w-full absolute text-center z-1">
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h2>
        </div>
        <img
          src="/images/lead_generation/bg-markets.jpg"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute w-full h-full overflow-hidden">
          <img
            src="/images/lead_generation/woman-paperplane.png"
            className="absolute w-[100%] right-[0] -bottom-[9%]"
          />
        </div>

        <SEO seoRef={seoRef} containerRef={containerRef} />
        <Sun ref={sunRef} />
        <Mushroom ref={mushroomRef} />
        <Dollar ref={dollarRef} />
        <div ref={globeRef} className="absolute w-full h-full overflow-hidden">
          <GlobeEarth />
        </div>

        <div className="hidden md:block">
          <ScrollButton to="page05_screen06" />
        </div>
      </div>
    </section>
  );
};

export default Markets;
