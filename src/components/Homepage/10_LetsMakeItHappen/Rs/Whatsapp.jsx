"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Whatsapp() {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, scale: 0.96, transformOrigin: "50% 50%" });
    gsap.to(el, { opacity: 1, duration: 0.12, ease: "power3.out" });

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduce) return;

    const initialDelay = 0.3 + Math.random() * 0.7;
    const loopGap = 0.9 + Math.random() * 0.6;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: loopGap,
      delay: initialDelay,
    });
    tl.to(el, { scale: 0.9, duration: 0.1, ease: "power2.in" })
      .to(el, { scale: 1.36, duration: 0.2, ease: "power4.out" })
      .to(el, { scale: 1.08, duration: 0.16, ease: "back.out(2.2)" })
      .to(el, { scale: 1.0, duration: 0.24, ease: "sine.inOut" });

    return () => tl.kill();
  }, []);

  return (
    <div
      className="
        absolute top-[82%] left-[102%]
        -translate-x-1/2 -translate-y-1/2
        w-[8.6%] rotate-[-6deg]
        pointer-events-none z-[2]
      "
    >
      <img
        ref={iconRef}
        src="/images/social_networks/whatsapp.svg"
        alt="whatsapp"
        className="block w-full h-auto select-none"
        draggable="false"
      />
    </div>
  );
}
