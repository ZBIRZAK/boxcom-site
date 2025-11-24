"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../hooks/useDoodle";

const PinkHeart = ({ delay }) => {
  // const { scr1Scr2ScrollOptions } = context;
  const [heart, heartRef, containerRef] = useDoodle(
    "/animations/ecran1/little-heart.json",
    {
      from: {
        opacity: 0,
        scale: 0.3,
      },
      to: {
        opacity: 1,
        scale: 1,
        duration: 5,
        ease: "power2.out",
        onStart: () => {
          heartRef.current?.setSpeed(3);
          heartRef.current?.play();
        },
        //   onComplete: () => {
        //     gsap.to(containerRef.current, {
        //       scrollTrigger: scr1Scr2ScrollOptions,
        //       opacity: 0,
        //       marginTop: "15%",
        //       scale: 3,
        //     });
        //   },
      },
      delay,
    }
  );

  return (
    <div
      className="opacity-0 absolute md:w-[10%] w-[30%] bottom-[8%] md:left-[11%] left-[15%] transform rotate-y-[180deg]  z-20 "
      ref={containerRef}
    >
      {heart && (
        <Lottie
          animationData={heart}
          lottieRef={heartRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};
export default PinkHeart;
