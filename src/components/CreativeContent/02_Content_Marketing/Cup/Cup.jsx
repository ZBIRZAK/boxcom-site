"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Cup = () => {
  const chantilly = useRef();

  const fromScaleY = 1.3,
    fromYPercent = 10,
    toScaleY = 1,
    toYPercent = 20,
    duration = 0.5;

  useEffect(() => {
    gsap.fromTo(
      chantilly.current,
      {
        scaleY: fromScaleY,
        yPercent: fromYPercent,
      },
      {
        scaleY: toScaleY,
        yPercent: toYPercent,
        ease: "elastic.inOut",
        duration,
        repeat: -1,
        repeatDelay: 2,
        onComplete: () => {
          gsap.fromTo(
            chantilly.current,
            {
              scaleY: toScaleY,
              yPercent: toYPercent,
            },
            {
              scaleY: fromScaleY,
              yPercent: fromYPercent,
              ease: "elastic.inOut",
              duration,
            }
          );
        },
      }
    );
  }, []);

  return (
    <div className="absolute bottom-[3%] right-[5%] w-[25%] -rotate-20 h-auto z-1 scale-x-[-1] md:w-[25%] md:right-[10%] md:bottom-[8%]">
      <img src="/images/objects/empty-cup.svg" className="w-full h-full" />
      <img
        ref={chantilly}
        src="/images/objects/chantilly.svg"
        className="absolute -top-[15%] -left-[5%] w-[70%]"
      />
    </div>
  );
};
export default Cup;
