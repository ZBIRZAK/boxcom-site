"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Facebook() {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    // Intro (une seule fois)
    gsap.set(el, { opacity: 0, scale: 0.9, transformOrigin: "50% 50%" });
    gsap.to(el, { opacity: 1, duration: 0.12, ease: "power3.out" });

    // Respecte prefers-reduced-motion
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduce) return;

    // BOOM en boucle
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.6,
      defaults: { ease: "power3.out" },
    });

    tl.to(el, { scale: 0.9, duration: 0.12, ease: "power2.in" })
      .to(el, { scale: 1.34, duration: 0.22, ease: "power4.out" })
      .to(el, { scale: 1.1, duration: 0.18, ease: "back.out(2)" })
      .to(el, { scale: 1.0, duration: 0.25, ease: "sine.inOut" });

    return () => tl.kill();
  }, []);

  return (
    <div
      className="
        absolute top-[18%] left-[67%]
        -translate-x-1/2 -translate-y-1/2
        w-[8.6%] rotate-[24deg]
        pointer-events-none z-[2]
      "
    >
      <img
        ref={iconRef}
        src="/images/social_networks/facebook.svg"
        alt="facebook"
        className="block w-full h-auto select-none"
        draggable="false"
      />
    </div>
  );
}
