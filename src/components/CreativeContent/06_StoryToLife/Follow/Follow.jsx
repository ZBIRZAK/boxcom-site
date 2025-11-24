"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function animFollow(refCont) {
  const tl = gsap.timeline({ repeat: -1 });

  tl.fromTo(
    refCont.current,
    { xPercent: -120, opacity: 0, scale: 0.9 },
    { xPercent: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
  );

  tl.to(refCont.current, {
    scaleX: 1.1,
    scaleY: 0.9,
    duration: 0.15,
    ease: "power2.out",
  }).to(refCont.current, {
    scaleX: 1,
    scaleY: 1,
    duration: 0.25,
    ease: "back.out(2)",
  });

  tl.to(refCont.current, {
    scale: 1.08,
    duration: 0.35,
    ease: "power1.inOut",
    yoyo: true,
    repeat: 1,
  });

  tl.to({}, { duration: 0.5 });
}

const Follow = () => {
  const refCont = useRef(null);

  useEffect(() => {
    animFollow(refCont);
  }, []);

  return (
    <div
      ref={refCont}
      className="absolute left-[4%] -rotate-10 pointer-events-none bottom-[15%] md:bottom-[6%] w-[22%] md:w-[10%]"
    >
      <img src="/images/texts/follow.svg" alt="Follow" />
    </div>
  );
};

export default Follow;
