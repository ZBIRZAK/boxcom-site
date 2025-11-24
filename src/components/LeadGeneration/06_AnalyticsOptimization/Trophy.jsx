"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import tr from "zod/v4/locales/tr.cjs";

const Trophy = () => {
  const trophyRef = useRef(null);

  useEffect(() => {
    if (trophyRef.current) {
      const tl= gsap.timeline({
        scrollTrigger:{
          trigger: "#page05_screen06",
          start: "top 60%",
          end: "bottom 30%",
          toggleActions: "restart restart restart restart",
          // markers:true,
        },
      });
      tl.fromTo(trophyRef.current, {
        opacity: 0,
        scale: 0,
      }, {
        delay: 1.5,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      });
      tl.to(trophyRef.current, {
        scale: 1.15,
        filter: "drop-shadow(0px 0px 25px gold)",
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div
      ref={trophyRef}
      className="absolute w-[20%] left-[3%] top-[40%] rotate-12"
    >
      <img src="/images/objects/trophy.svg" alt="Trophy" />
    </div>
  );
};

export default Trophy;
