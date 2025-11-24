
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Facebook = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (!iconRef.current) return;

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#page05_screen07",
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "restart restart restart restart",
            // markers:true,
          },
    });

    tl.fromTo(
      iconRef.current,
      { x: -100, opacity: 0 },
      {
        delay:0.5,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    tl.to(iconRef.current, {
      y: -20, 
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={iconRef}
      className="absolute w-[20%] md:left-[-25%] left-[-15%] md:top-[25%] top-[-95%]  rotate-[-20deg]"
    >
      <img src="/images/social_networks/facebook.svg" alt="Tiktok" />
    </div>
  );
};

export default Facebook;
