"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const DropOfWater = () => {
  const dropRef = useRef(null);

  useEffect(() => {
    gsap.to(dropRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: "#page01_screen02",
        start: "top top",
        toggleActions: "restart none none reverse",
      },
    });
    gsap.fromTo(
      dropRef.current,
      { rotate: 100 },
      {
        rotate: 0,
        ease: "none",
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: -50, y: -50 },
            { x: -70, y: 200 },
            { x: 70, y: 400 },
            { x: -20, y: 600 },
            { x: 0, y: 800 },
            { x: -100, y: 1000 },
            { x: -150, y: 1100 },
          ],
          curviness: 1.5,
          autoRotate: false,
        },
        onComplete: () => {
          gsap.set(dropRef.current, { opacity: 0 });
        },
        scrollTrigger: {
          trigger: "#page01_screen02",
          start: "top top",
          end: "top 50%",
          // scrub: true,
          // markers: true,
          toggleActions: "restart none none none",
          // onLeave: () => gsap.set(dropRef.current, { opacity: 0 }),
          // onEnterBack: () => gsap.set(dropRef.current, { opacity: 1 }),
        },
      }
    );
  }, []);

  return (
    <div
      className="absolute z-100 w-[4%] top-[2%] left-[15%] opacity-0"
      ref={dropRef}
      style={{ transform: "scaleX(-1)" }}
    >
      <img src="/images/drop.svg" alt="" className="w-[100%]" />
    </div>
  );
};

export default DropOfWater;
