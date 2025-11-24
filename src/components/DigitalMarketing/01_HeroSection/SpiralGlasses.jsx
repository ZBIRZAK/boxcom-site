"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function animSpiral(elt) {
  const tl = gsap.timeline();

  tl.from(elt, {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
  });

  gsap.to(elt, {
    rotation: 360,
    duration: 3,
    repeat: -1,
    ease: "linear",
  });
}

const SpiralGlasses = () => {
  const left = useRef(null);
  const right = useRef(null);

  useGSAP(() => {
    animSpiral(left.current);
    animSpiral(right.current);
  });

  return (
    <div className="absolute w-[40%] left-[52%] top-[10%] rotate-12">
      <img
        src="/images/objects/empty-spiral-glasses-half-stroke.svg"
        className="w-full"
      />
      <img
        ref={left}
        src="/images/objects/left-spiral.svg"
        className="absolute opacity-60 w-[25%] top-[20%] left-[32%]"
      />
      <img
        ref={right}
        src="/images/objects/right-spiral.svg"
        className="absolute opacity-60 w-[18%] top-[25%] left-[72%]"
      />
    </div>
  );
};

export default SpiralGlasses;
