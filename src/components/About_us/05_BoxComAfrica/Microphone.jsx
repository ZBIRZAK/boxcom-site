"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Microphone = () => {
  const microphone = useRef(null);

  useGSAP(() => {
    const mic = microphone.current;

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
      mic,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );

    tl.to(mic, {
      y: -10,
      rotate: 5,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <div ref={microphone} className="absolute w-[12%] -right-[10%] top-[50%]">
      <img src="/images/objects/microphone.svg" />
    </div>
  );
};

export default Microphone;
