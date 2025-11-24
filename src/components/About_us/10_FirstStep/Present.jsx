'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Present = () => {
  const presentRef = useRef(null);

  useEffect(() => {
    const el = presentRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.5, y: 20, rotation: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 20,
        duration: 1.2,
        ease: "back.out(1.7)",
        onComplete: () => {
          const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

          tl.to(el, {
            rotation: 23,
            x: 2,
            y: 2,
            duration: 0.08,
            ease: "power1.inOut",
            repeat: 7,
            yoyo: true,
          });

          tl.to(el, {
            rotation: 20,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      }
    );
  }, []);

  return (
    <div
      ref={presentRef}
      className="absolute md:bottom-[1%] bottom-[8%] right-[-40%] md:w-[25%] w-[40%] pointer-events-none"
    >
      <img
        src="/images/web_dev/doodles/present.png"
        alt="Present"
        className="w-full"
      />
    </div>
  );
};

export default Present;
