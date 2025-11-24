
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Tiktok = () => {
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
      { y: -100, opacity: 0 },
      {
        y: 0,
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
      className="absolute w-[19%] left-[-4%] md:top-[5%] top-[15%]"
    >
      <img src="/images/social_networks/tiktok.svg" alt="Tiktok" />
    </div>
  );
};

export default Tiktok;
