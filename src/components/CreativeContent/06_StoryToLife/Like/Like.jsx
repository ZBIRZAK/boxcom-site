"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function animLike(refCont) {
  const tl = gsap.timeline({ repeat: -1 });

  tl.fromTo(
    refCont.current,
    { opacity: 0, scale: 0.2, yPercent: 30 },
    {
      opacity: 1,
      scale: 1,
      yPercent: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }
  );

  tl.to(refCont.current, {
    scale: 1.1,
    duration: 0.3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: 1,
  });

  tl.to(refCont.current, {
    y: "-=10",
    duration: 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: 1,
  });
}

const Like = () => {
  const refCont = useRef(null);

  useEffect(() => {
    animLike(refCont);
  }, []);

  return (
    <div
      ref={refCont}
      className="absolute rotate-20 pointer-events-none bottom-[11%] md:bottom-[10%] right-[3%] md:right-[10%] w-[20%] md:w-[10%]"
    >
      <img src="/images/texts/like.svg" alt="Like" />
    </div>
  );
};

export default Like;
