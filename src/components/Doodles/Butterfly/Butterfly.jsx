"use client";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Butterfly = ({ containerStyles, delay }) => {
  const [butterfly, butterflyRef, containerRef] = useDoodle(
    "/animations/ecran1/papillon_rose.json",
    {
      from: { opacity: 0, scale: 0.5 },
      to: {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        onStart: () => {
          butterflyRef.current?.play();
        },
      },
      delay,
    }
  );

  return (
    <div ref={containerRef} className={containerStyles}>
      {butterfly && (
        <Lottie
          animationData={butterfly}
          lottieRef={butterflyRef}
          loop={true}
          autoplay={false}
        />
      )}
    </div>
  );
};

export default Butterfly;
