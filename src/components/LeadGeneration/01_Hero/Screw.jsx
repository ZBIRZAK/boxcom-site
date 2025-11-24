"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Screw = () => {
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
        duration: 2,
        ease: "bounce.out",
        delay: 2,
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="absolute w-[4%] left-[25%] top-[80%] -rotate-60  pointer-events-none"
    >
      <img src="/images/objects/nail.svg" />
    </div>
  );
};
export default Screw;
