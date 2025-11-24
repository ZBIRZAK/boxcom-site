'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Button3 = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    gsap.set(btn,{filter: "brightness(1)"})
    gsap.to(btn, {
      y: 15, 
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    
    gsap.to(btn, {
      delay:0.6,
      filter: "brightness(3)", 
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={buttonRef}
      className="absolute md:bottom-[25%] bottom-[37%] md:-right-[44.3%] right-[40.7%] w-[2.8%] pointer-events-none"
    >
      <img
        src="/images/objects/calculator-button2.svg"
        alt="Calculator Button"
        className="w-full"
      />
    </div>
  );
};
export default Button3;
