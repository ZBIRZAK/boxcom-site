'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Location = () => {
  const locationRef = useRef();

  useEffect(() => {
    const el = locationRef.current;

    gsap.to(el, {
      scale: 1.2,       
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1        
    });
  }, []);

  return (
    <div ref={locationRef} className="absolute w-[13%] bottom-[5%] right-[52%]">
      <img src="/images/signs/localisation.svg" />
    </div>
  );
};

export default Location;
