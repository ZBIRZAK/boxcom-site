"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Trophy = () => {
  const trophyRef = useRef(null);

  useEffect(() => {
    if (trophyRef.current) {
      gsap.to(trophyRef.current, {
        scale: 1.15,
        filter: "drop-shadow(0px 0px 25px gold)",
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div
      ref={trophyRef}
      className="absolute w-[20%] left-[65%] bottom-[10%] md:w-[10%]"
    >
      <img src="/images/objects/trophy.svg" alt="Trophy" />
    </div>
  );
};

export default Trophy;
