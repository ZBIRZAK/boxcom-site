"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftFirework = () => {
  const fireworkRef = useRef();

  useEffect(() => {
    const firework = fireworkRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page03_screen05",
        start: "top 50%",
        end: "bottom bottom",
        toggleActions: "restart none restart none",
        // markers:true,
      },
    });
    tl.set(firework, { scale: 0.5, x: 100, y: 100, rotation: -60 });
    tl.to(firework, {
      delay: 5,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power1.in",
    });
  }, []);

  return (
    <div
      ref={fireworkRef}
      className="absolute z-0 w-[20%] -left-[-14%] top-[4%] transform -scale-x-100"
    >
      <img
        src="/images/misc/firework.svg"
        className="h-full w-full"
        id="left-firework"
      />
    </div>
  );
};
export default LeftFirework;
