"use client";

import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Creature = ({ containerStyles, delay = 5 }) => {
  // const { scr1Scr2ScrollOptions } = context;
  const [creature, creatureRef, containerRef] = useDoodle(
    "/animations/ecran1/small-pink-dude.json", // 20 Mo !!!!!
    {
      from: {
        opacity: 0,
        scale: 0.9,
      },
      to: {
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "bounce.in",
        // onComplete: () => {
        //     gsap.to(containerRef.current, {
        //       scrollTrigger: scr1Scr2ScrollOptions,
        //       opacity: 0,
        //       marginTop: "15%",
        //       scale: 3,
        //     });
        // }
      },
      delay,
    }
  );

  return (
    <div className={containerStyles} ref={containerRef}>
      {creature && (
        <Lottie
          animationData={creature}
          lottieRef={creatureRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};
export default Creature;
