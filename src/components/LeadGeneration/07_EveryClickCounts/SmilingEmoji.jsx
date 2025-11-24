"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SmilingEmoji = () => {
  const eyesRef = useRef(null);

  useEffect(() => {
    if (!eyesRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); 

    tl.to(eyesRef.current, {
      scaleY: 0.1, 
      transformOrigin: "center center",
      duration: 0.1,
      ease: "power2.inOut",
    })
      .to(eyesRef.current, {
        scaleY: 1, 
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to({}, { duration: 2 });
  }, []);

  return (
    <div className="absolute bottom-[10%] md:left-[-28%] w-[20%] -rotate-15">
      <img
        src="/images/facial_features/smiling_emoji_without_eyes.svg"
        alt="Emoji"
      />
      <div
        ref={eyesRef}
        className="absolute w-[70%] bottom-[40%] left-[18%]"
      >
        <img
          src="/images/facial_features/smiling_emoji_eyes.svg"
          alt="Eyes"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SmilingEmoji;
