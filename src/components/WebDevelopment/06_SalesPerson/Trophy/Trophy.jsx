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
      className="absolute md:w-[10%] w-[20%] bottom-[1%] right-[10%] rotate-20 z-2"
    >
      <img src="/images/objects/trophy.svg" alt="Trophy" />
    </div>
  );
};

export default Trophy;
