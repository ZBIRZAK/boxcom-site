"use client";
import gsap from "gsap";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Surfer = ({ containerStyles, delay, context }) => {
  const { scr1Scr2ScrollOptions } = context;

  const [surfeuse, surfeuseRef, containerRef] = useDoodle(
    "/animations/ecran1/surfeuse.json",
    {
      from: { opacity: 0, x: -100 },
      to: {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        onStart: () => {
          surfeuseRef.current?.play();
        },
        onComplete: () => {
          // animation quand on va à l'écran 2
          gsap.to(containerRef.current, {
            scrollTrigger: scr1Scr2ScrollOptions,
            scale: 1.2,
            x: 650,
            y: "-=200",
            ease: "power2.out",
          });
        },
      },
      delay,
    }
  );

  const RideTheWave = () => {
    gsap.to(containerRef.current, {
      scale: 1.2,
      x: 650,
      y: -50,
      duration: 2,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="md:block hidden absolute w-[10%] top-[45%] right-[25%] rotate-[0deg] cursor-pointer z-30"
      onClick={() => RideTheWave()}
    >
      {surfeuse && (
        <Lottie
          animationData={surfeuse}
          lottieRef={surfeuseRef}
          loop={true}
          autoplay={false}
        />
      )}
    </div>
  );
};

export default Surfer;
