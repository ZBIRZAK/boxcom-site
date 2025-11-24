"use client";

import { useEffect, useRef } from "react";
import Butterfly2 from "./Butterfly2";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const FlyingButterfly = () => {
  const ref = useRef();

  useEffect(() => {
    console.log("ref.current:", ref.current);
    gsap.to(ref.current, {
      repeat: -1,
      duration: 15,
      ease: "none",

      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 400, y: -250 },
          { x: 800, y: -200 },
          { x: 1000, y: 0 },
          { x: 600, y: 100 },
          { x: 750, y: 200 },
          { x: 750, y: 100 },
          { x: 200, y: 50 },
          { x: 0, y: 0 },
        ],
        curviness: 2,
        autoRotate: true,
      },
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden md:overflow-visible">
      <Butterfly2 containerRef={ref} />
    </div>
  );
};

export default FlyingButterfly;
