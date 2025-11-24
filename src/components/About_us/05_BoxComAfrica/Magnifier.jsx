"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Magnifier = () => {
  const magnifierRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });
    tl.fromTo(
      magnifierRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    );
    tl.to(magnifierRef.current, {
      scale: 1.3,
      y: -5,
      transformOrigin: "50% 0%",
      duration: 1.5,
      rotate: 5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div ref={magnifierRef} className="absolute w-[12%] -left-[10%] top-[85%]">
      <img src="/images/objects/magnifier.svg" />
    </div>
  );
};

export default Magnifier;
