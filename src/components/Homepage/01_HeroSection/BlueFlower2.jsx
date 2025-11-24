"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const BlueFlower2 = ({ delay }) => {
  const flower = useRef();

  useGSAP(() => {
    gsap.fromTo(
      flower.current,
      {
        yPercent: -10,
        opacity: 0,
        scale: 0.8,
        transformOrigin: "100% 100%",
      },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 5,
        transformOrigin: "100% 100%",
        ease: "power2.out",
        delay,
      }
    );
    gsap
      .timeline({ repeat: -1 })
      // .to(flower.current, {
      //   scale: 1,
      //   rotate: 10,
      //   transformOrigin: "100% 100%",
      //   duration: 3,
      // })
      // .to(flower.current, {
      //   scale: 0.8,
      //   rotate: 0,
      //   transformOrigin: "100% 100%",
      //   duration: 3,
      // })
      .to(flower.current, {
        scale: 1,
        rotate: -15,
        transformOrigin: "100% 100%",
        duration: 4,
      })
      .to(flower.current, {
        scale: 0.8,
        rotate: 0,
        transformOrigin: "100% 100%",
        duration: 3,
      });
  });

  return (
    <div
      ref={flower}
      className="absolute w-[8%] bottom-[5%] left-[5%] opacity-0"
    >
      <img src="/images/flowers/full-blue-flower.svg" />
    </div>
  );
};

export default BlueFlower2;
