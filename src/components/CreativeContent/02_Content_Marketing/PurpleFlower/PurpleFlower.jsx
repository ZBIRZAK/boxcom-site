"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const PurpleFlower = () => {
  const flowerRef = useRef(null);

  useEffect(() => {
    if (!flowerRef.current) return;

    const tl = gsap.timeline();

    tl.from(flowerRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    });

    gsap.to(flowerRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div
      ref={flowerRef}
      className=" absolute bottom-[3%] w-[20%] z-1 md:w-[20%] md:bottom-0 "
    >
      <img
        src="/images/creative_content/doodles/purple_flower.svg"
        className="w-full h-full"
        alt="Flower"
      />
    </div>
  );
};
export default PurpleFlower;
