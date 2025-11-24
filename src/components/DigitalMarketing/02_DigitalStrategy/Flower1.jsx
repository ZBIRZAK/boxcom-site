"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function animFlower(refCont) {
  gsap.fromTo(
    refCont.current,
    {
      rotate: 0,
      scale: 1,
    },
    {
      rotate: -10,
      scale: 0.8,
      yPercent: 10,
      duration: 7,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    }
  );
}

const Flower1 = () => {
  const refCont = useRef();

  useEffect(() => {
    animFlower(refCont);
  }, []);

  return (
    <div ref={refCont} className="absolute w-[25%] -bottom-[3%] left-0">
      <img src="/images/flowers/fleur1.svg" />
    </div>
  );
};

export default Flower1;
