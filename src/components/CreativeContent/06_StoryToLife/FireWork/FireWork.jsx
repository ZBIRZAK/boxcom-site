"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Sparkles from "../../../DigitalMarketing/05_StartScaling/Fireworks/Sparkles";
import { useIsMobile } from "../../../../contexts/UserAgentProvider";

function animFireWork(refCont) {
  const tl = gsap.timeline({ repeat: -1 });

  // Apparition "burst"
  tl.fromTo(
    refCont.current,
    { opacity: 0, scale: 0.2, rotate: -15 },
    { opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: "back.out(2)" }
  );

  // Jaillissement des flammes (on cible les .fw-dot)
  const dots = refCont.current.querySelectorAll(".fw-dot");
  const offsets = [
    { x: 60, y: -10 },
    { x: 40, y: -50 },
    { x: -10, y: -65 },
    { x: -50, y: -40 },
    { x: -65, y: 10 },
    { x: -35, y: 50 },
    { x: 10, y: 65 },
    { x: 55, y: 35 },
  ];

  tl.fromTo(
    dots,
    { opacity: 0, scale: 0.4, x: 0, y: 0 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
      stagger: 0.02,
      x: (i) => offsets[i % offsets.length].x,
      y: (i) => offsets[i % offsets.length].y,
    },
    "<0.05"
  ).to(dots, {
    opacity: 0,
    scale: 0.8,
    duration: 0.35,
    ease: "sine.in",
    stagger: 0.02,
  });

  // Pause avant relance
  tl.to({}, { duration: 0.5 });
}

const FireWork = () => {
  const refCont = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    animFireWork(refCont);
  }, []);

  return (
    <div
      ref={refCont}
      className="absolute top-[20%] md:top-[12%] right-[17%] md:right-[50%] w-[22%] md:w-[13%] pointer-events-none"
    >
      {/* centre */}
      <img src="/images/misc/firework.svg" className="relative z-10" />
      {/* flammes */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-yellow-300 mix-blend-screen" />
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-orange-400 mix-blend-screen" />
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-rose-400 mix-blend-screen" />
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-fuchsia-400 mix-blend-screen" />
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan-300 mix-blend-screen" />
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-emerald-300 mix-blend-screen" />
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-purple-400 mix-blend-screen" />
        <span className="fw-dot absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-red-400 mix-blend-screen" />
      </div>
      {/* Etincelles */}
      <Sparkles
        count={isMobile ? 15 : 30}
        className="w-[100%] -left-[35%] -bottom-[40%]"
        centerPointRadius={1}
      />
    </div>
  );
};

export default FireWork;
