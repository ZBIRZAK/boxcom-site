"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

const ScrollButton = ({ to, containerStyles, delay = 7 }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.set(containerRef.current, {
      opacity: 0,
      scale: 0.5,
    });
    gsap.to(containerRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      delay,
    });
  }, []);
  const handleClick = () => {
    const target = document.querySelector("#" + to);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 0,
        },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className={containerStyles} ref={containerRef}>
      <button
        className="cursor-pointer bg-white rounded-full shadow transition-shadow duration-300 border hover:shadow-lg w-12 h-12 text-gray-500 flex justify-center items-center"
        onClick={handleClick}
      >
        <ArrowDown />
      </button>
    </div>
  );
};

export default ScrollButton;
