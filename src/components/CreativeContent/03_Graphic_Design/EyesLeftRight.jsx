"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const EyesLeftRight = () => {
  const L = useRef();
  const R = useRef();
  const repeatDelay = 1;
  const duration = 0.5;

  useEffect(() => {
    gsap.fromTo(
      L.current,
      {
        xPercent: -38,
        yPercent: -10,
      },
      {
        xPercent: 0,
        yPercent: 0,
        duration,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay,
      }
    );
    gsap.fromTo(
      R.current,
      {
        xPercent: -38,
        yPercent: -10,
      },
      {
        xPercent: 0,
        yPercent: 0,
        duration,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay,
      }
    );
  }, []);

  return (
    <div className="relative -rotate-15">
      <img
        src="/images/facial_features/empty-eyes.svg"
        className="inline-block w-26 h-26"
      />
      <img
        ref={L}
        src="/images/facial_features/left-eye.svg"
        className="absolute w-[25%] top-[43%] left-[11%] md:top-[40%] md:w-7"
      />
      <img
        ref={R}
        src="/images/facial_features/right-eye.svg"
        className="absolute w-[25%] top-[53%] right-[9%] md:w-7"
      />
    </div>
  );
};

export default EyesLeftRight;
