"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CrocheVerte() {
  const noteRef = useRef(null);

  useEffect(() => {
    const el = noteRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 12, scale: 0.96, transformOrigin: "50% 50%" });
    gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" });

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    gsap.to(el, { y: -12, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.10 });
    gsap.to(el, { x: "+=5",rotation: 2, duration: 0.12, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.15 });

    return () => gsap.killTweensOf(el);
  }, []);

  return (
    <div
      className="
        absolute
        top-[60%] left-[28%]
        -translate-x-1/2 -translate-y-1/2
        w-[5.3%]
        rotate-[2deg]
        pointer-events-none
      "
    >
      <img
        ref={noteRef}
        src="/images/notes/croche-verte.svg"
        alt="croche verte"
        className="block w-full h-auto select-none"
        draggable="false"
      />
    </div>
  );
}
