"use client";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const BlueFlower = ({ containerStyles, delay }) => {
  const [blueFlower, blueFlowerRef, containerRef] = useDoodle(
    "/animations/ecran1/blue_flower.json",
    {
      from: { opacity: 0, scale: 0.2 },
      to: {
        opacity: 1,
        scale: 0.8,
        duration: 5,
        ease: "power2.out",
      },
      delay,
    }
  );

  return (
    <div ref={containerRef} className="absolute md:w-[15%] w-[50%] bottom-[-3%] md:left-[2%] left-[-5%] z-20">
      {blueFlower && (
        <Lottie
          animationData={blueFlower}
          lottieRef={blueFlowerRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};

export default BlueFlower;
