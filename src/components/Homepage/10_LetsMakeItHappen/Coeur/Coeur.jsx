"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Coeur() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, scale: 0.98, transformOrigin: "50% 50%",rotation:20  });
    gsap.to(el, { opacity: 1, duration: 0.15, ease: "power2.out" });

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduce) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.35 });
    tl.to(el, { scale: 1.12, duration: 0.12, ease: "power2.out" })
      .to(el, { scale: 1.0, duration: 0.12, ease: "power2.inOut" })
      .to(el, { scale: 1.18, duration: 0.16, ease: "power2.out" })
      .to(el, { scale: 1.0, duration: 0.24, ease: "power2.inOut" });

    return () => tl.kill();
  }, []);

  return (
    <img
      ref={ref}
      src="/images/shapes/heart-darkpink.png"
      alt="coeur"
      draggable="false"
      className=" absolute top-[50%] right-[10%] w-[10%]"
    />
  );
}
