"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function pulse(elt) {
  gsap.fromTo(
    elt,
    {
      scale: 0.5,
    },
    {
      scale: 1,
      ease: "elastic",
      duration: 2,
    }
  );
}

const SmileyHeartEyes = () => {
  const refEye1 = useRef();
  const refEye2 = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      pulse(refEye1.current);
      pulse(refEye2.current);
    }, 3000);

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img
        src="/images/smiley/bg-smiling-emoji.svg"
        className="inline-block w-20 h-20"
      />
      <img
        ref={refEye1}
        src="/images/smiley/heart-eye.svg"
        className="absolute md:top-[25%] top-[30%] left-[10%] md:w-8 w-5"
      />
      <img
        ref={refEye2}
        src="/images/smiley/heart-eye.svg"
        className="absolute ld:top-[25%] top-[30%] right-[10%] md:w-8 w-5"
      />
    </div>
  );
};

export default SmileyHeartEyes;
