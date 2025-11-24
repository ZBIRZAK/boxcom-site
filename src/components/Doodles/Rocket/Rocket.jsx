"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Rocket = ({ containerStyles, context }) => {
  const rocketRef = useRef(null);
  const svgRef = useRef(null);
  const { scr5Scr2ScrollOptions } = context;
  console.log(scr5Scr2ScrollOptions);
  useEffect(() => {
    gsap.set(rocketRef.current, {
      x: 900,
      y: 500,
      transformOrigin: "center center",
    });

    gsap.to(rocketRef.current, {
      duration: 20,
      ease: "none",
      repeat: -1,
      motionPath: {
        path: [
          { x: 900, y: 500 },
          { x: 940, y: 400 },
          { x: 980, y: 350 },
          { x: 1200, y: 300 },
          { x: 1500, y: 310 },
          { x: 1300, y: 450 },
          { x: 1000, y: 300 },
          { x: 800, y: 200 },
          { x: 500, y: 300 },
          { x: 600, y: 750 },
          { x: 1000, y: 700 },
          { x: 900, y: 500 },
        ],
        curviness: 1.5,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scrollTrigger: scr5Scr2ScrollOptions,
      // onComplete:()=>{
      //   gsap.to(rocketRef.current, {
      //     scrollTrigger: scr5Scr2ScrollOptions,
      //     opacity: 0,
      //     scale: 0.5,
      //     ease: "power2.out",
      //   });
      // },
    });
  }, []);

  return (
    <div className={containerStyles}>
      <svg
        ref={svgRef}
        viewBox="0 0 1920 1080"
        width="100%"
        height="100%"
        style={{
          overflow: "visible",
          position: "relative",
        }}
      >
        <g ref={rocketRef}>
          <image
            href="/images/misc/rocket.svg"
            width="100"
            height="100"
            x="-50"
            y="-50"
            transform="rotate(90)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Rocket;
