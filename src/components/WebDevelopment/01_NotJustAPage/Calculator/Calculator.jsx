'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Calculator = () => {
  const calcRef = useRef(null);

  useEffect(() => {
    const calc = calcRef.current;

    // Floating oscillation
    gsap.to(calc, {
      y: 15, // float distance
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={calcRef}
      className="absolute md:bottom-[23%] bottom-[35%] md:-right-[50%] right-[35%] w-[15%] pointer-events-none"
    >
      <img src="/images/objects/calculator.svg" alt="Calculator" />
    </div>
  );
};
export default Calculator;
