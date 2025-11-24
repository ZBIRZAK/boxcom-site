"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Lottie from "lottie-react";
import { useDoodle } from "../../../hooks/useDoodle";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const YellowButterfly = ({ containerStyles, delay = 0, context }) => {
  const [butterfly, butterflyRef, containerRef] = useDoodle(
    "/animations/ecran1/yellow_butterfly.json",
    {
      from: { opacity: 0, scale: 0.3 },
      to: {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        delay,
        onComplete: () => {
          // Animate along path on scroll
          gsap.to(containerRef.current, {
            //   scrollTrigger:scr1Scr2ScrollOptions,
            repeat: -1,
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: 150, y: -30 },
                { x: 200, y: 30 },
                { x: 220, y: 100 },
                { x: 180, y: 150 },
                { x: -100, y: 200 },
                { x: -300, y: 50 },
                { x: -400, y: -50 },
                { x: -500, y: -100 },
                { x: -800, y: -50 },
                { x: -850, y: 100 },
                { x: -800, y: 200 },
                { x: -700, y: 100 },
                { x: -600, y: 200 },
                { x: -500, y: 200 },
                { x: 0, y: 0 },
              ],
              curviness: 1.5,
              autoRotate: true,
            },
            duration: 10,
            ease: "none",
          });
        },
      },
    }
  );

  // useEffect(() => {
  //   const el = containerRef.current;

  //   // Set initial hidden state
  //   gsap.set(el, {
  //     opacity: 0,
  //     scale: 0.3,
  //   });

  //   // Animate in
  //   gsap.to(el, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "power2.out",
  //     delay,
  //     onComplete: () => {
  //       // Animate along path on scroll
  //       gsap.to(el, {
  //       //   scrollTrigger:scr1Scr2ScrollOptions,
  //         repeat:-1,
  //         motionPath: {
  //           path: [
  //               { x: 0, y: 0 },
  //               { x: 150, y: -30 },
  //               { x: 200, y: 30 },
  //               { x: 220, y: 100 },
  //               { x: 180, y: 150 },
  //               { x: -100, y: 200 },
  //               { x: -300, y: 50 },
  //               { x: -400, y: -50 },
  //               { x: -500, y: -100 },
  //               { x: -800, y: -50 },
  //               { x: -850, y: 100 },
  //               { x: -800, y: 200 },
  //               { x: -700, y: 100 },
  //               { x: -600, y: 200 },
  //               { x: -500, y: 200 },
  //               { x: 0, y: 0 },
  //             ],
  //           curviness: 1.5,
  //           autoRotate: false,
  //         },
  //         duration: 10,
  //         ease: "none",
  //       });
  //     },
  //   });
  // }, []);

  return (
    <div
      className="opacity-0 absolute md:w-[3%] w-[10%] top-[30%] right-[34%] z-19 rotate-[20deg]"
      ref={containerRef}
    >
      {butterfly && (
        <Lottie
          animationData={butterfly}
          lottieRef={butterflyRef}
          autoPlay
          loop
        />
      )}
    </div>
  );
};

export default YellowButterfly;
