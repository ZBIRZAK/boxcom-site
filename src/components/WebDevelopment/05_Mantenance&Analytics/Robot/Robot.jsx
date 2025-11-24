"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Robot = () => {
  const magnifierRef = useRef(null);
  const robotRef = useRef(null);

  useEffect(() => {
    const magnifier = magnifierRef.current;
    const robot = robotRef.current;

    gsap.to(magnifier, {
      scale: 1.1,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    gsap.to(robot, {
      scale: 1.1,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={robotRef}
      className="absolute md:top-[41%] top-[58%] left-[10%] w-[20%] h-auto pointer-events-none"
    >
      {/* Robot */}
      <img
        src="/images/shapes/robot.svg"
        className="w-full h-full relative z-10  -scale-x-100"
        alt="Robot"
      />

      {/* Loupe */}
      <div
        ref={magnifierRef}
        className="absolute z-0 w-[80%] top-[0%] right-[-60%]"
      >
        <img
          src="/images/objects/magnifier-alpha.svg"
          alt="Magnifier"
          className="-scale-x-100"
        />
      </div>
    </div>
  );
};

export default Robot;
