'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Button1 = () => {
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
      className="absolute md:bottom-[28.7%] bottom-[40.7%] md:-right-[41.1%] right-[43.7%] w-[2.5%] pointer-events-none"
    >
      <img
        src="/images/objects/calculator-button1.svg"
        alt="Calculator Button"
        className="w-full"
      />
    </div>
  );
};
export default Button1;
