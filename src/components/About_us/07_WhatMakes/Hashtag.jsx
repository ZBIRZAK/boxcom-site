"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hashtag = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen07", 
        start: "top 60%",
        toggleActions: "restart restart restart restart",
        // markers: true, // Pour tester si besoin
      },
      delay: 1,
    });

    tl.fromTo(
      ref.current,
      { y: -200, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "bounce.out" }
    );

    tl.to(
      ref.current,
      {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      "+=0.3" 
    );
  }, []);

  return (
    <div
      ref={ref}
      className="absolute w-[50%] top-[20%] left-[44%] opacity-0"
    >
      <img src="/images/signs/hashtag-pink.svg" alt="" />
    </div>
  );
};

export default Hashtag;
