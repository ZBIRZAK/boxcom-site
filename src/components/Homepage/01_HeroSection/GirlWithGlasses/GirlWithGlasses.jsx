"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PurpleStar from "../../../Doodles/PurpleStar/PurpleStar";
import BouncingCreature from "../BouncingCreature";

const GirlWithGlasses = ({ starStyles, delay = 2, duration = 3, context }) => {
  const refContainer = useRef(null);
  const { scr1Scr2ScrollOptions } = context;

  useEffect(() => {
    gsap.set(refContainer.current, {
      opacity: 0,
      bottom: -500,
    });

    gsap.to(
      refContainer.current,
      {
        opacity: 1,
        bottom: 0,
        duration,
        ease: "sine",
        onComplete: () => {
          // animation quand on va à l'écran 2
          gsap.to(refContainer.current, {
            scrollTrigger: scr1Scr2ScrollOptions,
            bottom: -300,
          });
        },
      },
      delay
    );

    // if (refContainer.current) {
    //   gsap.fromTo(
    //     refContainer.current,
    //     { opacity: 0, bottom: -500 },
    //     {
    //       opacity: 1,
    //       bottom: 0,
    //       duration,
    //       delay,
    //       ease: "sine",
    //     }
    //   );
    // }
  }, []);

  return (
    <div
      id="girl_with_glasses"
      className="absolute  left-1/2 -translate-x-1/2 translate-y-0  md:w-[60%] w-[100%] md:h-auto h-[70%] z-20 opacity-0"
      ref={refContainer}
    >
      <img
        // src="/images/homepage/hiba.png"
        src="/images/homepage/girl-with-glasses.png"
        className="w-full h-full object-cover drop-shadow-[0_0_14px_rgb(76,76,76)]"
      />
      <BouncingCreature delay={5} />
      <PurpleStar containerStyles={starStyles} context={context} delay={6} />
    </div>
  );
};

export default GirlWithGlasses;
