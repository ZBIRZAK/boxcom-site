"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../hooks/useDoodle";

const Donut = () => {
  const [donut, donutRef, containerRef] = useDoodle(
    "/animations/ecran2/donuts.json",
    {
      from: { opacity: 0, scale: 0.3 },
      to: { opacity: 1, 
        delay:5,
        scale: 1, 
        duration: 3, 
        scrollTrigger : {
        trigger: "#page06_screen04",
        start: "top 5%",
        toggleActions: "restart none none none",
      },
      ease: "power3.inOut" },
    }
  );
  return (
    <div
      ref={containerRef}
      className="absolute bottom-[0%] md:bottom-[0%] left-[0%] w-[25%] md:w-[20%] scale-x-[1] md:scale-x-[1]"
    >
      {donut && <Lottie animationData={donut} lottieRef={donutRef} />}
    </div>
  );
};
export default Donut;
