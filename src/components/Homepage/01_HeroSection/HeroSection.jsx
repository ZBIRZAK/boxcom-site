"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GirlWithGlasses from "./GirlWithGlasses/GirlWithGlasses";
import BecauseYourBrand from "./BecauseYourBrand/BecauseYourBrand";
import Surfer from "../../Doodles/Surfer/Surfer";
import Hello from "../../Doodles/Hello/Hello";
import Enveloppe from "../../Doodles/Enveloppe/Enveloppe";
import Planet from "../../Doodles/Planet/Planet";
import HomepageProvider from "../HomepageProvider";
import Marquee from "./Marquee/Marquee";
import OrangeFlower from "../../Doodles/OrangeFlower/OrangeFlower";
import PinkMushroom from "../../Doodles/PinkMushroom/PinkMushroom";
import YellowButterfly from "../../Doodles/YellowButterfly/YellowButterfly";
import MusicalNote1 from "../../Doodles/MusicalNote1/MusicalNote1";
import MusicalNote2 from "../../Doodles/MusicalNote2/MusicalNote2";
import MusicalNote3 from "../../Doodles/MusicalNote3/MusicalNote3";
import Butterfly from "./Butterfly/Butterfly";
import ScrollButton from "../../Buttons/ScrollButton";
import PinkHeart2 from "../../Doodles/PinkHeart/PinkHeart2";
import WaterSplashes from "./WaterSplashes";
import BlueFlower2 from "./BlueFlower2";
import RedMushroom2 from "./RedMushroom2";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../../contexts/UserAgentProvider";

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
    if (isMobile) return;
    const timer = setTimeout(() => setShowDecorations(true), 200);
    return () => clearTimeout(timer);
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
          fetchPriority="high"
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

          {showDecorations && !isMobile && (
            <>
              <WaterSplashes />

              <Surfer delay={6} context={context} />

              <Hello delay={5} />
              <Planet delay={5} />

              <Enveloppe delay={10} />
              <Butterfly />

              <BlueFlower2 delay={5} />

              <OrangeFlower context={context} delay={5} />
              <PinkHeart2 delay={5} />
              <RedMushroom2 delay={5} />
              <PinkMushroom context={context} delay={5} />

              <YellowButterfly context={context} delay={5} />

              <MusicalNote1 delay={5} />
              <MusicalNote2 delay={5} />
              <MusicalNote3 delay={5} />
            </>
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
