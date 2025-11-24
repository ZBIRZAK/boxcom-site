"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SEO = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

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
      containerRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    ).to(containerRef.current, {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.fromTo(
      textRef.current,
      { filter: "brightness(1)" },
      {
        filter: "brightness(3)",
        duration: 0.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      }
    );
  });
  return (
    <div
      ref={containerRef}
      className="absolute w-[17%] left-[0%] top-[50%] rotate-20"
    >
      <img src="/images/texts/seo_red_without_letters.svg" />
      <div ref={textRef} className="absolute w-[100%] top-0 ">
        <img src="/images/texts/seo_red_letters.svg" alt="" />
      </div>
    </div>
  );
};

export default SEO;
