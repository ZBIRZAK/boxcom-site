'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Loudspeaker = () => {
  const soundEffectsRef = useRef(null);
  const speakerRef = useRef(null);

  useEffect(() => {
    const soundEffects = soundEffectsRef.current;
    const speaker = speakerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page04_screen03",
        start: "bottom 80%",
        end: "bottom 10%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
      repeat: -1,
      repeatDelay: 0.5,
    });

    tl.to(speaker, {
      keyframes: [
        { x: -5, duration: 0.1 },
        { x: 5, duration: 0.1 },
        { x: -3, duration: 0.1 },
        { x: 3, duration: 0.1 },
        { x: 0, duration: 0.1 },
      ],
      ease: "power1.inOut",
    });

    tl.fromTo(
      soundEffects,
      { scale: 0.3, x: -100, y: 60, opacity: 0 },
      {
        scale: 1,
        x:0,
        y:0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.2"
    );

    tl.to(soundEffects, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="absolute top-[40%] right-[10%] w-[25%] pointer-events-none">
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

export default Loudspeaker;
