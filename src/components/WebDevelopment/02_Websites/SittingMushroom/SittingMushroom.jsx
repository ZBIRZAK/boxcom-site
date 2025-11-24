"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const SittingMushroom = () => {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        rotate: -10,
      },
      {
        rotate: 10,
        duration: 1.5,
        ease: "power1.inOut",
        transformOrigin: "50% 80%",
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bottom-[15%] left-0 w-[33%] pointer-events-none"
    >
      <img src="/images/web_dev/doodles/sitting_mushroom.svg" alt="Mushroom" />
    </div>
  );
};
export default SittingMushroom;
