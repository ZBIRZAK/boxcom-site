"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const RedMushroom = ({ containerStyles, context, delay }) => {
  const { scr1Scr2ScrollOptions } = context;

  const [redMushroom, redMushroomRef, containerRef] = useDoodle(
    "/animations/ecran1/red-mushroom.json",
    {
      from: {
        opacity: 0,
        scale: 0.3,
        bottom: -100,
      },
      to: {
        opacity: 1,
        scale: 2,
        duration: 3,
        bottom: 0,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(containerRef.current, {
            scrollTrigger: scr1Scr2ScrollOptions,
            opacity: 0,
            marginTop: "15%",
            scale: 3,
          });
        },
      },
      delay,
    }
  );

  return (
    <div className="opacity-0 absolute md:w-[7%] w-[20%] md:top-[82%] top-[85%] md:left-[13%] left-[25%] z-20 " ref={containerRef}>
      {redMushroom && (
        <Lottie
          animationData={redMushroom}
          lottieRef={redMushroomRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};
export default RedMushroom;
