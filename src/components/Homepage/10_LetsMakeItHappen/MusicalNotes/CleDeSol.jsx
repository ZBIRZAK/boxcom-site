"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CleDeSol({ className = "" }) {
  const noteRef = useRef(null);

  useEffect(() => {
    const el = noteRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 12, scale: 0.96, transformOrigin: "50% 50%" });
    const enter = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return () => enter.kill();

    const float = gsap.to(el, {
      y: -8,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.10,
    });

    const jitterRot = gsap.to(el, {
      x: "+=5",
      rotation: 3,
      duration: 0.13,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.18,
      transformOrigin: "50% 50%",
    });

    return () => {
      enter.kill();
      float.kill();
      jitterRot.kill();
      gsap.set(el, { clearProps: "all" });
    };
  }, []);

  return (
    <div
      className={`
        absolute top-[64%] left-[95%]
        -translate-x-1/2 -translate-y-1/2
        w-[4.2%] rotate-[-6deg]
        pointer-events-none z-[2]
        ${className}
      `}
    >
      <img
        ref={noteRef}
        src="/images/notes/cledesol.svg"
        alt="clé de sol"
        className="block w-full h-auto select-none"
        draggable="false"
      />
    </div>
  );
}
