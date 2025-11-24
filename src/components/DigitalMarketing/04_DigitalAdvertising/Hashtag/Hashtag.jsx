'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hashtag = () => {
  const hashtagRef = useRef();

  useEffect(() => {
    const el = hashtagRef.current;

    gsap.to(el, {
      scale: 1.2,          
      duration: 1,        
      ease: "power1.inOut",
      repeat: -1,         
      yoyo: true          
    });
  }, []);

  return (
    <div
      ref={hashtagRef}
      className="absolute w-[24%] top-[4%] right-[12%] rotate-[-15deg]"
    >
      <img src="/images/signs/hashtag_1.svg" className="h-full w-full" />
    </div>
  );
};

export default Hashtag;
