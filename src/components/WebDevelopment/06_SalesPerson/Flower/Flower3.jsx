"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Flower3 = () => {
  const flowerRef = useRef(null);

  useEffect(() => {
    if (flowerRef.current) {
      gsap.set(flowerRef.current, { rotate: 150, transformOrigin: "95% 95%" });
      gsap.to(flowerRef.current, {
        rotate: 130,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "95% 95%",
      });

      gsap.to(flowerRef.current, {
        x: 10,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div
      ref={flowerRef}
      className="absolute top-[25%] left-[15%] w-[20%] pointer-events-none z-[-1] transform -scale-x-100"
    >
      <img
        src="/images/flowers/fleur15.svg"
        alt="Fleur rouge"
        className="w-full h-full"
      />
    </div>
  );
};

export default Flower3;
