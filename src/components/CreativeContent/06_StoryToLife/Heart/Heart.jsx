"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";
const { default: gsap } = require("gsap");

const Heart = () => {
  const [heart, heartRef, containerRef] = useDoodle(
    "/animations/ecran1/little-heart.json",
    {
      from: { opacity: 0, scale: 0.3 },
      to: {
        opacity: 1,
        scale: 1,
        duration: 5,
        ease: "power2.out",
        onStart: () => {
          heartRef.current?.setSpeed(3);
          heartRef.current?.play();
        },
      },
    }
  );

  return (
    <div
      className="absolute top-[7%] md:top-[12%] right-[-5%] w-[42%] md:w-[37%] pointer-events-none"
      ref={containerRef}
    >
      {heart && (
        <Lottie animationData={heart} lottieRef={heartRef} loop autoplay/>
      )}
    </div>
  );
};

export default Heart;
