"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CameraMan = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    gsap.fromTo(
      el,
      {
        filter: "brightness(2) drop-shadow(0 0 12px white)", // start: super bright + glow
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

  // w-[clamp(550px,40vw,700px)]
  return (
    <div className="absolute -bottom-20 right-0 w-[100%] md:w-[100%] md:right-0 md:-bottom-30 flex justify-end items-end pointer-events-none">
      <img
        ref={imgRef}
        src="/images/persons/photographer.png"
        alt="A man is taking pictures with his camera"
      />
    </div>
  );
};

export default CameraMan;
