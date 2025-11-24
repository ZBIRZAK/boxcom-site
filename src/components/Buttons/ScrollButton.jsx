"use client";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

const ScrollButton = ({ to }) => {
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
    <div className="absolute md:block hidden right-[5%] bottom-[5%] w-24 text-right z-[999]">
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
