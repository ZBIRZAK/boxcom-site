"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import GirlWithGlasses from "./GirlWithGlasses/GirlWithGlasses";
import BecauseYourBrand from "./BecauseYourBrand/BecauseYourBrand";
import HomepageProvider from "../HomepageProvider";
import Marquee from "./Marquee/Marquee";
import ScrollButton from "../../Buttons/ScrollButton";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../../contexts/UserAgentProvider";

const HeroDecorations = dynamic(() => import("./HeroDecorations"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const context = {
  scr1Scr2ScrollOptions: {
    trigger: "#page01_screen02",
    start: "top 90%",
    end: "top 10%",
    // markers: true,
    scrub: 3,
    // toggleActions: "play none none reverse",
    toggleActions: "restart none none none",
    // toggleActions: onEnter onLeave onEnterBack onLeaveBack
  },
};

const HeroSection = ({ data }) => {
  const isMobile = useIsMobile();
  const [showDecorations, setShowDecorations] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setShowDecorations(true), 200);
      return () => clearTimeout(timer);
    }

    const activate = () => setShowDecorations(true);
    const events = ["pointerdown", "touchstart", "keydown", "scroll"];
    events.forEach((event) =>
      window.addEventListener(event, activate, { once: true, passive: true })
    );
    const fallbackTimer = setTimeout(activate, 12000);

    return () => {
      clearTimeout(fallbackTimer);
      events.forEach((event) => window.removeEventListener(event, activate));
    };
  }, [isMobile]);

  // useNextScreenAboveCurrent("page01_screen01", "page01_screen02");

  return (
    <HomepageProvider>
      <section
        id="page01_screen01"
        className="relative w-full h-screen overflow-hidden z-1"
      >
        <h1 className="hidden">{data.main_title}</h1>
        <img
          src="/images/bg_ecran1-1410.webp"
          srcSet="/images/bg_ecran1-1410.webp 1410w, /images/bg_ecran1.webp 1600w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="low"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10">
          <GirlWithGlasses context={context} />

          <BecauseYourBrand
            text1={data.title}
            text2={data.slogan}
            text1Duration={2}
            text1Delay={0.3}
            text2Duration={1}
            text2Delay={0.6}
            context={context}
          />

          {showDecorations && (
            <HeroDecorations context={context} isMobile={isMobile} />
          )}

          {showDecorations && (
            <>
              <div className="hidden md:block">
                <ScrollButton to="page01_screen02" />
              </div>
              <Marquee context={context} data={data} />
            </>
          )}
        </div>
      </section>
    </HomepageProvider>
  );
};

export default HeroSection;
