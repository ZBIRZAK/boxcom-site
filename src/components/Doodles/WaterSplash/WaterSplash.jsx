"use client";

import { useDoodle } from "../../../hooks/useDoodle";
import gsap from "gsap";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import Drop1 from "./Drops/Drop1";
import Drop2 from "./Drops/Drop2";
import Drop3 from "./Drops/Drop3";
import Drop4 from "./Drops/Drop4";

const WaterSplash = ({
  leftSplashStyles,
  rightSplashStyles,
  delay = 4.7,
  duration = 1,
  waveSpeed = 1,
  context,
}) => {
  const [doodleSplash] = useDoodle("/animations/ecran1/water_splash.json");
  const { scr1Scr2ScrollOptions } = context;

  const splashLeftRef = useRef(null);
  const splashLefLottietRef = useRef(null);
  const splashRightRef = useRef(null);
  const splashRightLottieRef = useRef(null);

  useEffect(() => {
    if (splashLeftRef.current && doodleSplash) {
      gsap.set(".splashContainer", {
        opacity: 0,
        y: 100,
      });

      gsap.to(
        ".splashContainer",
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power2.out",
          onStart: () => {
            splashLefLottietRef.current?.setSpeed(waveSpeed);
            splashRightLottieRef.current?.setSpeed(waveSpeed);

            splashLefLottietRef.current?.play();
            splashRightLottieRef.current?.play();
          },
          onComplete: () => {
            gsap.to(".splashContainer", {
              scrollTrigger: scr1Scr2ScrollOptions,
              opacity: 0,
              y: 100,
            });
          },
        },
        delay
      );
    }
  }, [doodleSplash]);

  return (
    <div className="md:block hidden">
      <div
        ref={splashRightRef}
        className="absolute w-[35%] top-[37%] right-[10%] rotate-10 z-1"
      >
        {doodleSplash && (
          <Lottie
            className="splashContainer"
            animationData={doodleSplash}
            lottieRef={splashRightLottieRef}
            loop={false}
            autoplay={false}
          />
        )}
        <Drop1 />
        <Drop2 />
        <Drop3 />
      </div>

      <div ref={splashLeftRef} className={leftSplashStyles}>
        {doodleSplash && (
          <Lottie
            className="splashContainer"
            animationData={doodleSplash}
            lottieRef={splashLefLottietRef}
            loop={false}
            autoplay={false}
          />
        )}
        <Drop1 />
        <Drop2 />
        <Drop3 />
      </div>
    </div>
  );
};

export default WaterSplash;
