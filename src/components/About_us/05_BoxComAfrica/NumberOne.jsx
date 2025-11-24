"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const NumberOne = ({ ref }) => {
  const numberOneRef = useRef(null);

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
      numberOneRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    );
    tl.fromTo(
      numberOneRef.current,
      {
        filter: "brightness(1)",
      },
      {
        filter: "brightness(2)",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
  });
  return (
    <div ref={numberOneRef} className="absolute w-[10%] -left-[12%] top-[2%]">
      <img src="/images/signs/hashtag_1.svg" />
    </div>
  );
};

export default NumberOne;
