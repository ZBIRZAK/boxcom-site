"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const WaterSplash = () => {
  const ref = useRef(null);

  useEffect(() => {
    const splash = ref.current;
    if (!splash) return;

    gsap.set(splash, {
      opacity: 0.5,
      scale: 0.1,
      // x: -100,
      y: 100,
      rotation: 50,
      // transformOrigin: "50% 50%",
    });

    gsap.to(splash, {
      opacity: 1,
      scale: 1,
      // x: 0,
      y: 0,
      rotation: -10,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#page04_screen02",
        start: "top 50%",
        end: "bottom bottom",
        toggleActions: "restart none restart none",
        // markers: true,
      },
      // onComplete: () => {
      //   const tl = gsap.timeline({ repeat: -1, yoyo: true, dsplashay: 0.5 });
      //   tl.to(splash, {
      //     rotation: -13,
      //     scale: 1.02,
      //     duration: 0.6,
      //     ease: "sine.inOut",
      //   }).to(splash, {
      //     rotation: -17,
      //     scale: 1,
      //     duration: 0.6,
      //     ease: "sine.inOut",
      //   });
      // },
    });
  }, []);

  return (
    <div ref={ref} className="absolute bottom-[40%] left-[20%] w-[70%]">
      <img src="/images/water/splash.svg" alt="Splash" />
    </div>
  );
};
export default WaterSplash;
