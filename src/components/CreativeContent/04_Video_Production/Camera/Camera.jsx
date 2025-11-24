"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Camera = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    gsap.fromTo(
      el,
      {
        filter: "brightness(5) drop-shadow(0 0 12px white)", // start: super bright + glow
      },
      {
        filter: "brightness(1) drop-shadow(0 0 0px white)", // end: normal + no glow
        duration: 2,
        ease: "power4.inOut",
        repeat: -1,
        repeatDelay: 2,
      }
    );
  }, []);

  return (
    <div className="absolute w-[30%] left-[0%] top-[35%] md:-left-[10%] md:top-[30%] scale-x-[-1] rotate-20">
      <img ref={imgRef} src="/images/misc/camera.svg" />
    </div>
  );
};

export default Camera;
