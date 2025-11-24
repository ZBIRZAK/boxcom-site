"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const WaterSplash = () => {
  const ref = useRef(null);

  useEffect(() => {
    const splash = ref.current;
    if (!splash) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen03",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true, 
        },
        delay:5,
      });
    tl.set(splash, {
      opacity: 0.5,
      scale: 0.1,
      // x: -100,
      y: 100,
      rotation: 50,
      // transformOrigin: "50% 50%",
    });

    tl.to(splash, {
      opacity: 1,
      scale: 1,
      // x: 0,
      y: 0,
      rotation: -10,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div ref={ref} className="absolute opacity-0 bottom-[20%] left-[40%] md:block hidden w-[20%] z-3">
      <img src="/images/water/splash.svg" alt="Splash" />
    </div>
  );
};
export default WaterSplash;
