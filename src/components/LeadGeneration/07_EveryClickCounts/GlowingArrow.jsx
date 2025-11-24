'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const GlowingArrow = () => {
    const arrowRef = useRef(null);

    useEffect(() => {
      if (!arrowRef.current) return;
  
      gsap.to(arrowRef.current, {
        y: -20,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
      });
    }, []);
    return (
      <div ref={arrowRef} className="absolute md:w-[12%] w-[22%] md:bottom-[1%] bottom-[20%] md:right-[30%] right-[10%] md:rotate-10 -rotate-50 ">
        <img src="/images/shapes/blue-arrow.svg" className="top-0 left-0" />
        <img
          src="/images/shapes/white-dots.svg"
          className="absolute top-0 left-0"
          style={{
            fill: "white",
            // filter: "drop-shadow(0 0 6px white) drop-shadow(0 0 3px white)",
            animation: "glowAnim 1s infinite alternate",
          }}
        />
      </div>
    );
  };
  
  export default GlowingArrow;
  