"use client";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Butterfly2 from "../../WebDevelopment/02_Websites/Butterfly2";

gsap.registerPlugin( MotionPathPlugin);
const ButterflyTwo = ({ delay = 0 }) => {
  const ref=useRef();
  useGSAP(() => {
    gsap.to(ref.current, {
      repeat:-1,
      duration:20,
      motionPath:{
        path:[
          { x: 0, y: 0 },
          { x: 150, y: -30 },
          { x: 200, y: 30 },
          { x: 150, y: 40 },
          { x: 0, y: 20 },
          { x: -180, y: -200 },
          { x: -200, y: -250 },
          { x: -150, y: -300 },
          { x: -100, y: -250 },
          { x: -80, y: -150 },
          { x: -130, y: -100 },
          { x: -240, y: -80 },
          { x: -290, y: -200 },
          { x: -380, y: -300 },
          { x: -450, y: -250 },
          { x: 0, y: 0 },
        ],
        ease: "linear",
        curviness: 1.5,
        autoRotate: true,
      }
    });
  })

  return (
    <div className="absolute w-[40%] right-[27%] bottom-[25%]">
      <Butterfly2 containerRef={ref} />
    </div>
  );
};

export default ButterflyTwo;
