"use client";
import gsap from "gsap";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Surfer = ({ delay = 0 }) => {
  const [surfeuse, surfeuseRef, containerRef] = useDoodle(
    "/animations/ecran1/surfeuse.json",
    {
      from: { opacity: 0, x: -100 },
      to: {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          // animation quand on va à l'écran 2
          // gsap.to(containerRef.current, {
          //   scale: 1.2,
          //   x: 650,
          //   y: "-=200",
          //   ease: "power2.out",
          // });
        },
      },
    }
  );


  return (
    <div
      ref={containerRef}
      className="absolute w-[30%] md:-right-[35%] -right-[15%] md:bottom-[60%] bottom-[75%]"
    >
      {surfeuse && (
        <Lottie
          className="rotate-40"
          animationData={surfeuse}
          lottieRef={surfeuseRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};

export default Surfer;