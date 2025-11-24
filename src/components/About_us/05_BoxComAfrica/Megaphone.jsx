"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Megaphone = () => {
  const soundEffectsRef = useRef(null);
  const speakerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const soundEffects = soundEffectsRef.current;
    const speaker = speakerRef.current;
    const container = containerRef.current; // <-- whole wrapper

    if (!soundEffects || !speaker || !container) return;

    const entranceTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers:true,
      },
    });

    entranceTL.fromTo(
      container,
      { y: 100 },
      {
        y: 0,
        duration: 1,
        ease: "power1.in",
        onComplete: () => loopTL.resume(),
      }
    );

    const loopTL = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      paused: true,
    });

    loopTL.to(speaker, {
      keyframes: [
        { x: -5, duration: 0.1 },
        { x: 5, duration: 0.1 },
        { x: -3, duration: 0.1 },
        { x: 3, duration: 0.1 },
        { x: 0, duration: 0.1 },
      ],
      ease: "power1.inOut",
    });

    loopTL.fromTo(
      soundEffects,
      { scale: 0.3, x: -100, y: 60, opacity: 0 },
      {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.2"
    );

    loopTL.to(soundEffects, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-[14%] -right-[10%] -top-[10%]"
    >
      <div
        ref={soundEffectsRef}
        className="absolute top-[-20%] -right-[40%] w-[50%] pointer-events-none z-0"
      >
        <img src="/images/objects/sound-effects.svg" alt="Sound effects" />
      </div>
      <img
        ref={speakerRef}
        src="/images/objects/speaker.svg"
        alt="Loudspeaker"
        className="relative z-10"
      />
    </div>
  );
};

export default Megaphone;
