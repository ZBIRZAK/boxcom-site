"use client";

import { useRef } from "react";
import Creature from "./Creature";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BouncingCreature = ({ delay }) => {
  const ref = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.2,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "bounce.in",
          delay,
        }
      );
    },
    { scope: ref }
  );

  return (
    <Creature
      ref={ref}
      className="rotate-20 w-[15%] top-[43%] right-[23%] md:w-[7%] md:top-[43%] md:right-[36%]"
    />
  );
};

export default BouncingCreature;
