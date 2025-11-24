"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const Flower = () => {
  const [flower, flowerRef, containerRef] = useDoodle(
    "/animations/ecran2/flower.json",
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
      ref={containerRef}
      className="absolute bottom-[24%] md:bottom-[24%] right-[52%] md:right-[46%] w-[20%]"
    >
      {flower && <Lottie animationData={flower} lottieRef={flowerRef} />}
    </div>
  );
};
export default Flower;
