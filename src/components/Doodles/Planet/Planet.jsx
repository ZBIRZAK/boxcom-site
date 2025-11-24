"use client";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";
import gsap from "gsap";

const Planet = ({ delay }) => {
  const [planet, planetRef, containerRef] = useDoodle(
    "/animations/ecran1/planete.json",
    {
      from: { opacity: 0, scale: 0.3 },
      to: {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay,
        onComplete: () => {
          gsap.to(containerRef.current, {
            repeat: -1,
            yoyo: "true",
            duration: 5,
            ease: "power1.inOut",
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: 80, y: 50 },
                { x: 50, y: 80 },
                { x: 30, y: 40 },
                { x: 0, y: 0 },
              ],
              curviness: 1.5,
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
            },
          });
        },
      },
    }
  );

  return (
    <div
      ref={containerRef}
      className="absolute md:w-[20%] w-[50%] md:top-[12%] top-[2%] md:right-[1%] right-[-7%] z-5"
    >
      {planet && (
        <Lottie
          animationData={planet}
          lottieRef={planetRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};

export default Planet;
