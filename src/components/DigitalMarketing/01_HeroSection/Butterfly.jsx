"use client";
import { on } from "events";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Butterfly2 from "../../WebDevelopment/02_Websites/Butterfly2";
import { useRef } from "react";

const Butterfly = ({ delay = 0 }) => {
  const ref=useRef();
  useGSAP(() => {
    gsap.to(ref.current, {
      repeat: -1,
      duration: 20,
      ease: "easeInOut",
      motionPath:{
        path:[
          { x: 0, y: 0 },
          { x: 150, y: -30 },
          { x: 200, y: 30 },
          { x: 150, y: 40 },
          { x: 450, y: -80 },
          { x: 550, y: -60 },
          { x: 500, y: 20 },
          { x: 420, y: 20 },
          { x: 550, y: -100 },
          { x: 650, y: -50 },
          { x: 700, y: 100 },
          { x: 550, y: 200 },
          { x: 450, y: 230 },
          { x: 0, y: 0 },
        ],
        curviness: 1.5,
        autoRotate: true,
      }
    });
  })

  return (
    <div className="absolute left-[7%] top-[20%] md:w-[25%] w-[15%] ">
      <Butterfly2 containerRef={ref} />
    </div>
  );
};

export default Butterfly;
