"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const Donut = () => {
  const [donut, donutRef, containerRef] = useDoodle(
    "/animations/ecran2/donuts.json",
    {}
  );
  return (
    <div
      ref={containerRef}
      className="absolute bottom-[0%] md:bottom-[-4%] left-[0%] w-[25%] md:w-[15%] scale-x-[-1] md:scale-x-[1]"
    >
      {donut && <Lottie animationData={donut} lottieRef={donutRef} />}
    </div>
  );
};
export default Donut;
