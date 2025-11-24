"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function generatePath(nbPoints = 10, xStep = 10, yRange = [-20, 0]) {
  const path = [];
  for (let i = 0; i < nbPoints; i++) {
    const y = i % 2 == 0 ? yRange[0] : yRange[1];
    path.push({ x: (i + 1) * xStep, y });
  }
  return path;
}
const Pencil = () => {
  const pencilRef = useRef(null);

  useEffect(() => {
    if (!pencilRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      pencilRef.current,
      {
        rotate: 10,
      },
      {
        duration: 3,
        rotate: 50,
        motionPath: {
          path: generatePath(15, 5, [-15, 0]),
          alignOrigin: [0.5, 1],
        },
        ease: "power1",
      }
    );

    tl.to(
      pencilRef.current,
      {
        duration: 5,
        rotate: 10,
        motionPath: {
          path: [
            { x: 50, y: -100 },
            { x: 100, y: -120 },
            { x: 30, y: -80 },
            { x: 70, y: -40 },
            { x: 0, y: 0 },
          ],
        },
      },
      ">"
    );
  }, []);
  return (
    <div
      ref={pencilRef}
      className="absolute w-[4%] top-[25%] right-[20%] md:w-[4%] md:top-[10%] md:right-[27%] rotate-60 h-auto"
    >
      <img
        src="/images/creative_content/doodles/pencil.svg"
        className="w-full h-full"
      />
    </div>
  );
};
export default Pencil;
