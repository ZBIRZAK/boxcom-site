"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Donut = () => {
  const donutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const donut = donutRef.current;
    const container = containerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page04_screen06",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });
    tl.fromTo(
      donut,
      { y: -700 },
      {
        y: 0,
        duration: 2,
        ease: "bounce.out",
      },
      "start"
    );
    tl.to(
      container,
      {
        x: 300,
        duration: 2,
        ease: "power1.in",
      },
      "start"
    );
    tl.to(donut, {
      y: 100,
      x: 20,
      duration: 0.2,
      ease: "power1.in",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-[-2%] md:left-[1.5%] left-[7%] w-[10%]"
    >
      <div className="absolute w-full bottom-0 left-0" ref={donutRef}>
        <img src="/images/misc/donut.svg" alt="" />
      </div>
    </div>
  );
};

export default Donut;
