"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Ring = () => {
  const ringRef = useRef(null);

  useEffect(() => {
    if (ringRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // loop with pause

      tl.to(ringRef.current, {
        x: 3,
        rotation: 5,
        duration: 0.1,
        yoyo: true,
        repeat: 5, 
        ease: "power1.inOut",
      }).to(ringRef.current, {
        x: 0,
        rotation: 0,
        duration: 0.3, 
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <div
      ref={ringRef}
      className="absolute w-[7%] top-[30%] right-[30%] rotate-20"
    >
      <img src="/images/accessories/ring.png" alt="Ring" className="w-full" />
    </div>
  );
};

export default Ring;
