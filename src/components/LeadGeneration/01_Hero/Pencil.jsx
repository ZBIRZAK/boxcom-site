"use client";

import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);

const Pencil = () => {
  const pencilRef = useRef();
  const k = 2;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      pencilRef.current,
      { yPercent: -700, rotation: -60 },
      {
        yPercent: 0,
        rotation: 60,
        duration: 2,
        ease: "bounce.out",
        transformOrigin: "50% 100%",
      },
      "start"
    );
    tl.to(pencilRef.current, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: k * 30, y: k * 50 },
          { x: k * 100, y: k * -60 },
        ],
        curviness: 0,
      },
      transformOrigin: "50% 100%",
      duration: 0.5,
      ease: "power1.in",
    });
  }, []);

  //  -rotate-60
  return (
    <div ref={pencilRef} className="absolute w-[2%] left-[5%] top-[20%]">
      <img src="/images/pencil.svg" />
    </div>
  );
};

export default Pencil;
