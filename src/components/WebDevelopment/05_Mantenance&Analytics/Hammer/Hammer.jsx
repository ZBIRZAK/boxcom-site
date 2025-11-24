"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hammer = () => {
  const hammerRef = useRef(null);

  useEffect(() => {
    const hammer = hammerRef.current;

    // Adjust depending on how your SVG is drawn

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page04_screen03",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
      repeat: -1, // infinite
      repeatDelay: 0.5,
    });

    tl.to(hammer, {
      rotation: -60, // hammer swings down
      duration: 0.3,
      ease: "power2.in",
    }).to(hammer, {
      rotation: -30, // goes back up
      duration: 0.4,
      ease: "bounce.out", // little bounce back
    });
  }, []);

  return (
    <div
      ref={hammerRef}
      className="absolute bottom-[20%] right-[5%] w-[23%] h-auto -rotate-30 pointer-events-none"
    >
      <img
        src="/images/objects/hammer.svg"
        className="w-full h-full -translate-y-10"
        alt="Hammer"
      />
    </div>
  );
};

export default Hammer;
