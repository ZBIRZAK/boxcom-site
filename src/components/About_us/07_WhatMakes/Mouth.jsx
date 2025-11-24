"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mouth = () => {
  const mouthRef = useRef(null);

  useEffect(() => {
    if (!mouthRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen07", 
        start: "top 60%",
        toggleActions: "restart none none none",
      },
      delay:2,
      repeat: -1,      
      repeatDelay: 3.8,
    });

    tl.to(mouthRef.current, {
      scale: 0,
      opacity:1,
      duration: 0.2,
      ease: "back.in(2)",
    }).to(mouthRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "back.in(2)",
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={mouthRef}
      className="absolute w-[15%] top-[15%] right-[5%] opacity-0"
    >
      <img src="/images/facial_features/mouth.svg" alt="Mouth" />
    </div>
  );
};

export default Mouth;
