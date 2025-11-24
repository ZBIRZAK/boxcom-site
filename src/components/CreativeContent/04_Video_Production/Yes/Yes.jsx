"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Yes = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, {
      transformOrigin: "50% 50%",
      opacity: 0,
      scale: 0.85,
      rotate: -6,
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    tl.to(el, {
      opacity: 1,
      scale: 1.15,
      rotate: 0,
      duration: 0.25,
      ease: "back.out(2.2)",
    })
      .to(el, {
        scale: 0.95,
        duration: 0.12,
        ease: "power2.inOut",
      })
      .to(el, {
        scale: 1,
        duration: 0.18,
        ease: "power2.out",
      });

    tl.to(el, {
      scale: 1.05,
      duration: 0.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: 1,
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="absolute w-[20%] right-[5%] top-[40%] md:top-[15%]">
      <img
        ref={ref}
        src="/images/texts/yes.svg"
        alt="YES"
        className="block w-full h-auto select-none"
        draggable="false"
        style={{ willChange: "transform, opacity" }}
      />
    </div>
  );
};

export default Yes;
