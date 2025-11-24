"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Calculator = () => {
  const refScreen = useRef();
  const names = ["01_1", "02_1-plus", "03_1-2", "04_1-2-eq", "05_1-2-eq-3"];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      refScreen.current,
      { filter: "brightness(1)" },
      {
        filter: "brightness(3)",
        duration: 0.5,
        ease: "none",
        repeat: -1,
        yoyo: true,
      }
    );

    names.forEach((name) => {
      tl.to("#calc__" + name, { opacity: 1, duration: 1 });
    });
  }, []);

  return (
    <div className="absolute md:w-[10%] w-[18%] aspect-square left-[5%] bottom-[10%]">
      <img src="/images/objects/calculator-empty.svg" className="absolute" />
      <img
        src="/images/objects/calculator-screen.svg"
        className="absolute w-[60%] left-[15%] top-[8%]"
      />
      <img
        ref={refScreen}
        src="/images/objects/calculator-screen.svg"
        className="absolute w-[60%] left-[15%] top-[8%]"
      />

      {names.map((name, i) => {
        return (
          <img
            key={i}
            id={"calc__" + name}
            src={"/images/objects/calculator/" + name + ".svg"}
            className="absolute w-[40%] left-[25%] top-[17%] opacity-0"
          />
        );
      })}
    </div>
  );
};

export default Calculator;
