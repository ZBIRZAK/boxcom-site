"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const Flower1 = () => {
  const [flower, flowerRef, containerRef] = useDoodle(
    "/animations/ecran10/flower1.json",
    {}
  );

  return (

    <div className="absolute bottom-[-4%] md:left-[70%] left-[40%] w-[25%] transform -scale-x-100">
      <div className="absolute bottom-0 left-0" ref={containerRef}>
        <Lottie animationData={flower} lottieRef={flowerRef} />
      </div>
    </div>
  );
};

export default Flower1;
