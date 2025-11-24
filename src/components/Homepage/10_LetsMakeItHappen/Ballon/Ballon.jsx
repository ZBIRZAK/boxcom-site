"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Ballon() {
  const wrapRef = useRef(null);
  const imgRef  = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img  = imgRef.current;
    if (!wrap || !img) return;

    const DURATION = 6.5;

    const tl = gsap.timeline({ repeat: -1, repeatRefresh: true });
    tl.set(wrap, { x: 0, y: "110vh", rotate: 0 });
    tl.to(wrap, { y: "-120vh", duration: DURATION, ease: "none" }, 0);
    tl.to(
      wrap,
      {
        x: () => -(gsap.utils.random(10, 28) * (window.innerWidth / 100)), 
        duration: DURATION,
        ease: "sine.inOut",
      },
      0
    );

    const sway = gsap.to(img, {
      x: "+=2.6vw",
      duration: 1.1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
    const tilt = gsap.to(img, {
      rotate: 6,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
      sway.kill();
      tilt.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute bottom-0 right-[0] md:w-[8%] w-[25%] z-[1] pointer-events-none select-none will-change-transform">
      <img ref={imgRef} src="/images/objects/ballon.svg"/>
    </div>
  );
}
