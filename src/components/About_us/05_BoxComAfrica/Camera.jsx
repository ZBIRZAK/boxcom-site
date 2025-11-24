"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Camera = () => {
  const cameraRef = useRef(null);

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
      cameraRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    );
    tl.to(cameraRef.current, {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.fromTo(
      cameraRef.current,
      {
        filter: "brightness(5) drop-shadow(0 0 12px white)", // start: super bright + glow
      },
      {
        filter: "brightness(1) drop-shadow(0 0 0px white)", // end: normal + no glow
        duration: 2,
        ease: "power4.inOut",
        repeat: -1,
        repeatDelay: 2,
      }
    );
  });
  return (
    <div
      ref={cameraRef}
      className="absolute w-[15%] md:w-[10%] top-[60%] right-[5%] rotate-20 pointer-events-none"
    >
      <img src="/images/misc/camera.svg" />
    </div>
  );
};

export default Camera;
