"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heart = () => {
  const heartRef = useRef(null);

  useEffect(() => {
    if (!heartRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen07", 
        start: "top 60%",
        toggleActions: "restart restart restart restart",
        // markers: true,
      },
    });

    tl.fromTo(
      heartRef.current,
      { y: -200, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "bounce.out" }
    );

    tl.to(
      heartRef.current,
      {
        scale: 1.1,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
      },
      "+=0.2" 
    );
  }, []);

  return (
    <div
      ref={heartRef}
      className="absolute md:w-[50%] w-[15%] md:top-[15%] top-[50%] md:left-[10%] opacity-0"
    >
      <img src="/images/shapes/heart-red.svg" alt="Heart" />
    </div>
  );
};

export default Heart;
