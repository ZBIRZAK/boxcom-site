"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Leaf5 = () => {
  const leafRef = useRef();

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
      leafRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    );
    tl.to(leafRef.current, {
      x: 15,
      rotation: 5,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });
  return (
    <div
      ref={leafRef}
      className="absolute w-[8%] -right-[75%] top-[75%] rotate-20"
    >
      <img src="/images/nature/leaf3.svg" />
    </div>
  );
};

export default Leaf5;
