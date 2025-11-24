"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { audios } from "../../Audio/audios";
import { highlightFlower } from "./simon";
import { useGSAP } from "@gsap/react";

const Flower1 = ({ onClick }) => {
  const refCont = useRef();

  useGSAP(() => {
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
  });

  return (
    <div
      ref={refCont}
      className="hidden md:block absolute h-auto w-[9%] bottom-[0%] left-0"
      // onClick={onClick}
    >
      <img
        className="transform -scale-x-100 w-full h-full"
        src="/images/flowers/fleur4.svg"
        // onClick={() => {
        //   audios.C3.play();
        //   highlightFlower(refCont.current);
        // }}
      />
    </div>
  );
};

export default Flower1;
