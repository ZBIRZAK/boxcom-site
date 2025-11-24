"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const scrollTrigger = {
  trigger: "#page01_screen02",
  start: "top 5%",
  toggleActions: "restart none none none",
};

const Bubble = ({ containerRef }) => {
  const [bubble, bubbleRef] = useDoodle("/animations/ecran2/bulle.json", {
    from: { opacity: 0 },
    to: {
      opacity: 1,
      duration: 3,
      ease: "power3.inOut",
      scrollTrigger,
    },
  });

  return (
    <div className="absolute bottom-[55%] md:bottom-[62%] left-[50%] -translate-x-1/2 w-[55%] md:w-[40%]">
      <div ref={containerRef}>
        {bubble && (
          <Lottie
            animationData={bubble}
            lottieRef={bubbleRef}
            loop={true}
            autoplay={true}
          />
        )}
      </div>
    </div>
  );
};

export default Bubble;
