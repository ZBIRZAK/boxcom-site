"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function animEye(elt) {
  gsap.fromTo(
    elt,
    {
      scale: 0.1,
    },
    {
      scale: 1,
      ease: "elastic",
      duration: 1,
      repeat: -1,
      repeatDelay: 2,
    }
  );
}

const FaceEmoji = () => {
  const L = useRef();
  const R = useRef();
  const mouth = useRef();

  useEffect(() => {
    animEye(L.current);
    animEye(R.current);

    gsap.fromTo(
      mouth.current,
      {
        scale: 0.1,
      },
      {
        scale: 1,
        ease: "elastic",
        duration: 1,
        repeat: -1,
        repeatDelay: 2,
        // delay: 1,
      }
    );
  }, []);

  return (
    <div className="absolute md:top-[38%] top-[75%] md:right-[78%] right-[-5%] md:w-[22%] w-[22%] pointer-events-none z-[10]">
      <img src="/images/smiley/bg-smiley.svg" />
      {/* <img src="/images/creative_content/doodles/faceemoji.svg" alt="Eyes" /> */}
      <img
        ref={L}
        src="/images/smiley/smiley-eye.svg"
        className="absolute w-[35%] top-[20%] left-[12%]"
      />
      <img
        ref={R}
        src="/images/smiley/smiley-eye.svg"
        className="absolute w-[35%] top-[20%] left-[55%] scale-x-[-1]"
      />

      <img
        ref={mouth}
        src="/images/smiley/mouth.svg"
        className="absolute w-[25%] top-[60%] left-[40%]"
      />
    </div>
  );
};
export default FaceEmoji;
