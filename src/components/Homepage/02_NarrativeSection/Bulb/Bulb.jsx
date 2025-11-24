"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const Bulb = ( ) => {
  const [bulb, bulbRef, containerRef] = useDoodle(
    "/animations/ecran2/ampoule.json",
    {
      from: { opacity: 0 },
      to: {
        opacity: 1,
        duration: 3,
        ease: "power3.inOut",
      },
    }
  );
  return (
    <div
      className="absolute top-[33%] left-[50%] -translate-x-1/2 cursor-pointer w-[35%] md:w-[20%]"
      ref={containerRef}
    >
      {bulb && (
        <Lottie
          animationData={bulb}
          lottieRef={bulbRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};
export default Bulb;
