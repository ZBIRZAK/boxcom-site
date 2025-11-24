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

const Creature = () => {
  const L = useRef();
  const R = useRef();

  useEffect(() => {
    animEye(L.current);
    animEye(R.current);
  }, []);

  return (
    <div className="absolute w-[20%] aspect-square md:top-[-18%] top-[-10%] right-[-9%] rotate-20">
      <img
        src="/images/creatures/creature-empty.svg"
        className="inline-block w-full"
      />
      <img
        ref={L}
        src="/images/creatures/creature-left-eye.svg"
        className="absolute md:top-[41%] top-[40%] left-[11%] w-[33%]"
      />
      <img
        ref={R}
        src="/images/creatures/creature-right-eye.svg"
        className="absolute md:top-[43%] top-[40%] right-[19%] w-[35%]"
      />
    </div>
  );
};

export default Creature;
