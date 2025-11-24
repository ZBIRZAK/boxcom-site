'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Arobase = () => {
  const arobaseRef = useRef();

  useEffect(() => {
    const el = arobaseRef.current;

    gsap.to(el, {
      x: 30,              
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,          
      yoyo: true         
    });
  }, []);

  return (
    <div
      ref={arobaseRef}
      className="absolute md:w-[18%] w-[15%] md:top-[60%] top-[65%] md:left-[-13%] left-[15%] rotate-[-35deg]"
    >
      <img src="/images/signs/arobase-pink.svg" className="h-full w-full" />
    </div>
  );
};

export default Arobase;
