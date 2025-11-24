"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const Heart = () => {
const container = useRef();
  const legs = useRef();
  const L = useRef();
  const R = useRef();

  const duration = 1;
  const timelineParams = {
    repeat: -1,
    repeatDelay: 1,
    delay:8,
  };
  const sharedParamsAnim1 = {
    duration,
    ease: "power1.out",
  };
  const sharedParamsAnim2 = {
    duration,
    ease: "power1.in",
  };

  useGSAP(
    () => {
      gsap
        .timeline({ delay: 8 })
        .to(container.current, { opacity: 1, duration: 0.3 });

      const tl = gsap.timeline(timelineParams);

      tl.to(container.current, {
        ...sharedParamsAnim1,
        yPercent: -50,
      }).to(container.current, {
        ...sharedParamsAnim2,
        yPercent: 0,
      });

      const legsTL = gsap.timeline(timelineParams);
      legsTL
        .to(legs.current, {
          ...sharedParamsAnim1,
          rotate: 20,
          transformOrigin: "10% 0%",
        })
        .to(legs.current, {
          ...sharedParamsAnim2,
          rotate: 0,
          transformOrigin: "10% 0%",
        });

      const rightTL = gsap.timeline(timelineParams);
      rightTL
        .to(R.current, {
          ...sharedParamsAnim1,
          rotate: 20,
          transformOrigin: "2% 98%",
        })
        .to(R.current, {
          ...sharedParamsAnim2,
          rotate: 0,
          transformOrigin: "2% 98%",
        });

      const leftTL = gsap.timeline(timelineParams);
      leftTL
        .to(L.current, {
          ...sharedParamsAnim1,
          rotate: 20,
          transformOrigin: "2% 98%",
        })
        .to(L.current, {
          ...sharedParamsAnim2,
          rotate: 0,
          transformOrigin: "2% 98%",
        });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="opacity-0 absolute w-[13%] left-[35%] bottom-[-5%] aspect-square [&_img]:absolute"
    >
      <img
        ref={legs}
        src="/images/personas/heart/heart-legs.svg"
        className="w-[60%] left-[20%] top-[60%]"
      />
      <img
        ref={L}
        src="/images/personas/heart/heart-left-hand.svg"
        className="w-[35%] left-[0%] -top-[33%]"
      />
      <img
        src="/images/personas/heart/heart-body.svg"
        className="w-[80%] left-[0%] top-[0%]"
      />
      <img
        ref={R}
        src="/images/personas/heart/heart-right-hand.svg"
        className="w-[55%] left-[65%] -top-[15%]"
      />
    </div>
  );
};

export default Heart;
// absolute w-[40%] md:top-[70%] top-[75%] right-[30%]  pointer-events-none