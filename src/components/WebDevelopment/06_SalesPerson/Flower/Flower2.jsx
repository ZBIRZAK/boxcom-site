"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Flower2 = () => {
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
      className="absolute top-[23%] right-[43%] w-[10%] pointer-events-none "
    >
      <img
        src="/images/flowers/fleur14.svg"
        alt="Fleur sans tige"
        className="w-full h-full"
      />
    </div>
  );
};
export default Flower2;
