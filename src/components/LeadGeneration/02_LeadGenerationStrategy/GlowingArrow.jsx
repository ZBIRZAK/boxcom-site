"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const GlowingArrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    if (!arrowRef.current) return;

    gsap.to(arrowRef.current, {
      y: -50,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div ref={arrowRef} className="absolute w-[30%] bottom-[8%] md:left-[0%] left-[70%] ">
      <img src="/images/shapes/blue-arrow.svg" className="top-0 left-0" />
      <img
        src="/images/shapes/white-dots.svg"
        className="absolute top-0 left-0"
        style={{
          filter: "drop-shadow(0 0 6px white) drop-shadow(0 0 3px white)",
        }}
      />
    </div>
  );
};

export default GlowingArrow;
