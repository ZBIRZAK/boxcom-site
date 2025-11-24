"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const RedMushroom2 = () => {
  const container = useRef();
  const eyeL = useRef();
  const eyeR = useRef();

  useGSAP(() => {
    gsap.to(container.current, {
      opacity: 1,
      duration: 2,
      delay: 5,
    });

    gsap
      .timeline({ repeat: -1, repeatDelay: 1 })
      .to(eyeL.current, {
        rotate: -90,
        duration: 0.5,
        xPercent: -20,
        yPercent: 10,
        transformOrigin: "0% 50%",
      })
      .to(eyeL.current, {
        rotate: 0,
        xPercent: 0,
        yPercent: 0,
        duration: 0.5,
        transformOrigin: "0% 50%",
        delay: 2,
      });

    gsap
      .timeline({ repeat: -1, repeatDelay: 1 })
      .to(eyeR.current, {
        rotate: -90,
        duration: 0.5,
        xPercent: -20,
        yPercent: 10,
        transformOrigin: "0% 50%",
      })
      .to(eyeR.current, {
        rotate: 0,
        xPercent: 0,
        yPercent: 0,
        duration: 0.5,
        transformOrigin: "0% 50%",
        delay: 2,
      });
  });

  return (
    <div
      ref={container}
      className="absolute w-[6%] left-[15%] bottom-[8%] aspect-square opacity-0"
    >
      <img src="/images/nature/red-mushroom/RM-no-eyes.svg" />
      <img
        ref={eyeL}
        src="/images/nature/red-mushroom/RM-eyeL.svg"
        className="absolute w-[10%] left-[40%] top-[20%]"
      />
      <img
        ref={eyeR}
        src="/images/nature/red-mushroom/RM-eyeR.svg"
        className="absolute w-[8%] left-[59%] top-[26%]"
      />
    </div>
  );
};

export default RedMushroom2;
