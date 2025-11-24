"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Magnifier = () => {
  const ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ref.current,
      {
        scale: 5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        delay: 3,
      }
    ).to(ref.current, {
      scale: 1.5,
      repeat: 1,
      yoyo: true,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 3 * -50, y: 3 * 70 },
        ],
      },
      ease: "none",
      duration: 3,
    });
  }, []);

  return (
    <div ref={ref} className="absolute md:w-[8%] w-[15%] left-[75%] top-[40%]">
      <img src="/images/objects/magnifier-alpha.svg" />
    </div>
  );
};

export default Magnifier;
