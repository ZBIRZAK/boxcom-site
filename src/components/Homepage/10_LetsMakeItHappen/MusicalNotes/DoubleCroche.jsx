"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function DoubleCroche() {
  const noteRef = useRef(null);

  useEffect(() => {
    const el = noteRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 12, scale: 0.96, transformOrigin: "50% 50%" });
    gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" });

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    gsap.to(el, { y: -14, duration: 3.0, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.00 });
    gsap.to(el, { x: "+=5",rotation: 1.8, duration: 0.12, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.05 });

    return () => gsap.killTweensOf(el);
  }, []);

  return (
    <div
      className="
        absolute
        top-[7%] left-[12%]
        -translate-x-1/2 -translate-y-1/2
        w-[8.4%]
        rotate-[2deg]
        pointer-events-none z-[2]
      "
    >
      <img
        ref={noteRef}
        src="/images/notes/double-croche.svg"
        alt="double croche"
        className="block w-full h-auto select-none"
        draggable="false"
      />
    </div>
  );
}
