'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const WaterSplash = () => {
  const splashRef = useRef(null);

  useEffect(() => {
    if (!splashRef.current) return;

    const tl = gsap.timeline();
    tl.set(
      splashRef.current,
      { scale: 0, rotation: -90, opacity: 0, y:300 },
    );
    tl.to(splashRef.current, { scale: 1, rotation: 0, opacity: 1, y:0, duration: 1, ease: "back.out(1.7)" })
    tl.to(splashRef.current, {
      y: 10,
      rotation: 5,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);
  return (
    <div ref={splashRef} className=" opacity-0 absolute w-[60%] bottom-[15%] right-[-1%] z-1">
      <img src="/images/water/splash.svg" />
    </div>
  );
};

export default WaterSplash;
