"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const TopSection = ({ data }) => {
  const creatureRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ 
      scrollTrigger:{
        trigger:"#page01_screen08",
        start:"top 50%",
        end: "bottom bottom",
        toggleActions: "restart restart restart restart",
        // markers:true
    }
     });
    tl.set(creatureRef.current, {
      rotate: 190,
    });
    tl.to(wrapperRef.current, { overflow: "hidden", duration: 0 });
    tl.to(creatureRef.current, {
      yPercent: 100,
      duration: 0.6,
      ease: "power1.inOut",
    });
    tl.to(creatureRef.current, {
      yPercent: -13,
      duration: 0.6,
      ease: "bounce.out",
    });
    tl.set(wrapperRef.current, { overflow: "visible" });

    tl.to(creatureRef.current, {
      yPercent: 0,
      duration: 0.1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex relative h-full">
      <div
        // className="absolute -top-16 left-[10%] md:w-[12%] w-[22%] h-[200px] overflow-visible pl-[0.1em] z-25 "
        className="relative md:w-[12%] w-[22%]"
        ref={wrapperRef}
      >
        <div
          className={`absolute w-[80%] bottom-[-10%] left-[5%] transform -scale-x-100`}
          ref={creatureRef}
        >
          <img src="/images/creatures/creature1.svg" alt="" />
        </div>
      </div>

    </div>
  );
};

export default TopSection;
