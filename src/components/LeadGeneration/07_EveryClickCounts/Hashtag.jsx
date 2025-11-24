"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hashtag = () => {
  const hashtagRef = useRef(null);

  useEffect(() => {
    if (!hashtagRef.current) return;

    gsap.to(hashtagRef.current, {
      y: -20, 
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true, 
    });
  }, []);

  return (
    <div
      ref={hashtagRef}
      className="absolute w-[10%] md:top-[35%] top-[45%] md:right-[-5%] right-[-15%]"
    >
      <img
        src="/images/signs/hashtag.png"
        className="h-full w-full"
        alt="Hashtag"
      />
    </div>
  );
};

export default Hashtag;
