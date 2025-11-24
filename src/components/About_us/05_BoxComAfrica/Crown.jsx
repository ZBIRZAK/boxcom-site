"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Crown = () => {
  const crowRef = useRef();
  const gemsRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
      delay: 0.5,
    });
    tl.fromTo(
      crowRef.current,
      { y: -200 },
      { y: 1, duration: 2, ease: "elastic.inOut" }
    );
    tl.fromTo(
      gemsRef.current,
      { filter: "brightness(1)" },
      {
        filter: "brightness(2)",
        duration: 1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  });
  return (
    <div
      ref={crowRef}
      className="absolute w-[18%] md:w-[14%] top-[8%] left-[42%] md:left-[44%] pointer-events-none "
    >
      <img src="/images/objects/crown_without_gems.svg" alt="Crown" />
      <div ref={gemsRef} className="absolute w-full top-0">
        <img
          src="/images/objects/crown_gems.svg"
          alt="Crown"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Crown;
