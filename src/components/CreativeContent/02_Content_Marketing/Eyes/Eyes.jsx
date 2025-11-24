"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const duration = 0.2;

function animEye(elt) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

  tl.fromTo(
    elt,
    {
      scaleY: 1,
    },
    {
      scaleY: 0.2,
      duration,
      ease: "power1",
      transformOrigin: "50% 70%",
    }
  ).to(elt, {
    scaleY: 1,
    duration,
    ease: "power1",
    transformOrigin: "50% 70%",
  });
}

const Eyes = () => {
  const ref = useRef();

  useEffect(() => {
    animEye(ref.current);
  }, []);

  return (
    <div className="absolute bottom-[15%] left-[26%] w-[15%] h-auto md:bottom-[24%] md:left-[14%] md:w-[10%] z-1">
      <img
        ref={ref}
        src="/images/facial_features/blue_eyes.svg"
        className="w-full h-full"
      />
    </div>
  );
};

export default Eyes;
