"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Stain = () => {
  const stainRef = useRef(null);

  useEffect(() => {
    const el = stainRef.current;
    if (!el) return;

    gsap.set(el, { transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.fromTo(
      el,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1.4,
        duration: 0.2,
        ease: "back.out(2)",
      }
    )
      .to(el, {
        scale: 0.9,
        duration: 0.2,
        ease: "sine.inOut",
      })
      .to(el, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
        delay:1,
      })
      .to(el, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

    return () => tl.kill();
  }, []);

  return (
    <div className="absolute w-[20%] left-[10%] top-[10%]">
      <img
        ref={stainRef}
        src="/images/tache.svg"
        alt="Splash stain"
        style={{
          filter:
            "brightness(105%) contrast(128%) hue-rotate(315deg) saturate(246%)",
          willChange: "transform, opacity",
        }}
        draggable={false}
      />
    </div>
  );
};

export default Stain;
