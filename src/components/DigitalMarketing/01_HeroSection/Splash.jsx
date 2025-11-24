"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import { useGSAP } from "@gsap/react";

const Splash = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    const splash = ref.current;
    if (!splash) return;

    gsap.set(splash, {
      opacity: 1,
      scale: 0.3,
      x: -100,
      y: 100,
      rotation: isMobile ? -15 : 45,
      transformOrigin: "50% 50%",
    });

    gsap.to(splash, {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      onComplete: () => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true, dsplashay: 0.5 });
        tl.to(splash, {
          rotation: isMobile ? -13 : 43,
          scale: 1.02,
          duration: 0.6,
          ease: "sine.inOut",
        }).to(splash, {
          rotation: isMobile ? -17 : 47,
          scale: 1,
          duration: 0.6,
          ease: "sine.inOut",
        });
      },
    });
  });

  return (
    <div
      ref={ref}
      className="absolute md:w-[60%] w-[50%] md:rotate-45 md:-right-[45%] -right-[30%] md:bottom-[30%] bottom-[40%]"
    >
      <img src="/images/water/splash-stroke-without-a-drop.svg" alt="splash" />
      {/* <img src="/images/water/splash-stroke-x2-without-a-drop.svg" alt="splash" /> */}
    </div>
  );
};

export default Splash;
