"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Tiktok() {
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

    const initialDelay = 0.25 + Math.random() * 0.6;
    const loopGap = 0.85 + Math.random() * 0.5;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: loopGap,
      delay: initialDelay,
    });
    tl.to(el, { scale: 0.88, duration: 0.1, ease: "power2.in" })
      .to(el, { scale: 1.38, duration: 0.22, ease: "power4.out" })
      .to(el, { scale: 1.08, duration: 0.16, ease: "back.out(2.2)" })
      .to(el, { scale: 1.0, duration: 0.24, ease: "sine.inOut" });

    return () => tl.kill();
  }, []);

  return (
    <div
      className="
        absolute top-[32%] left-[25%]
        -translate-x-1/2 -translate-y-1/2
        w-[8.6%] rotate-[28deg]
        pointer-events-none z-[2]
      "
    >
      <img
        ref={iconRef}
        src="/images/social_networks/tiktok.svg"
        alt="tiktok"
        className="block w-full h-auto select-none"
        draggable="false"
      />
    </div>
  );
}
