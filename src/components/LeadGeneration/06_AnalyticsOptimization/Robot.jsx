"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Robot = () => {
  const magnifierRef = useRef(null);
  const robotRef = useRef(null);

  useEffect(() => {
    const magnifier = magnifierRef.current;
    const robot = robotRef.current;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2, 
    });

    tl.fromTo(

      robot,
      { opacity: 0, scale: 0.5 },
      { 
        delay: 3.5,
        opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    tl.to(
      magnifier,
      {
        filter: "brightness(1.2) contrast(1.5) saturate(1.5)", 
        duration: 0.5,
        ease: "power1.out",
      },
      ">"
    );
    tl.to(
      magnifier,
      {
        filter: "brightness(1) contrast(1) saturate(1)", 
        duration: 0.5,
        ease: "power1.out",
      },
      ">"
    );
    tl.to(
      robot,
      {
        x: -40,
        duration: 2,
        yoyo: true,
        repeat: 7,
        ease: "sine.inOut",
      },
      ">" 
    );
  }, []);

  return (
    <div
      ref={robotRef}
      className="absolute top-[67%] right-[5%] w-[15%] h-auto pointer-events-none"
    >
      {/* Robot */}
      <img
        src="/images/shapes/robot.svg"
        className="w-full h-full relative z-10"
        alt="Robot"
      />

      {/* Magnifier */}
      <div
        ref={magnifierRef}
        className="absolute z-0 w-[80%] top-[0%] left-[-60%]"
      >
        <img src="/images/objects/magnifier-alpha.svg" />
      </div>
    </div>
  );
};

export default Robot;
