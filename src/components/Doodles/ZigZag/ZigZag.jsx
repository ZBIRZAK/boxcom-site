"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ZigZag = () => {
  const zigzagRef = useRef(null);
  useEffect(() => {
    if (zigzagRef.current) {
      gsap.fromTo(
        zigzagRef.current,
        { opacity: 0, x: -300 },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: zigzagRef.current,
            start: "top 50%",
            end: "top 10%",
            toggleActions: "restart none none reset",
          },
        }
      );
    }
  }, []);
  return (
    <div
      className="absolute top-[37%] md:top-[58%] right-[35%] md:right-[30%] w-[33%] md:w-[17%]"
      ref={zigzagRef}
    >
      <img src="/images/shapes/zigzag-pink.svg" className="w-full" />
    </div>
  );
};
export default ZigZag;
