import { useRef } from "react";
import gsap from "gsap";
import Bulb from "../Bulb/Bulb";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

const BubbleBulbWrapper = () => {
  const scope = useRef();
  const mainBubbleRef = useRef();
  const bubble2LRef = useRef();
  const bubble2RRef = useRef();
  const bubble1LRef = useRef();
  const bubble1RRef = useRef();
  const logoRef = useRef();

  useGSAP(
    () => {
      const TL = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
      });
      // const ease = "bounce.out";
      const ease = "elastic.out(1.2, .2)";
      TL.fromTo(
        bubble1LRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          ease,
          duration: 2,
        },
        0
      )
        .fromTo(
          bubble1RRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            ease,
            duration: 2,
          },
          0
        )
        .fromTo(
          bubble2LRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            ease,
            duration: 2,
          },
          0.5
        )
        .fromTo(
          bubble2RRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            ease,
            duration: 2,
          },
          0.5
        )
        .fromTo(
          mainBubbleRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            ease,
            duration: 2,
          },
          1
        )
        .fromTo(
          logoRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            ease,
            duration: 2,
          },
          1.5
        );
    },
    { scope }
  );

  const triggerHueRotate = () => {
    if (!mainBubbleRef.current) return;

    gsap.fromTo(
      mainBubbleRef.current,
      { filter: "hue-rotate(0deg) saturate(1) brightness(1)", scale: 1 },
      {
        filter: "hue-rotate(360deg) saturate(5) brightness(2)",
        scale: 1.5,
        duration: 1.5,
        ease: "elastic.in",
        yoyo: true,
        repeat: 1,
      }
    );
  };

  return (
    <>
      <div
        ref={scope}
        className={clsx(
          "absolute aspect-square",
          "w-[45%] left-[25%] top-[21%]",
          "md:w-[39%] md:left-[33%] md:top-[5%]",
          "lg:top-[10%]",
          "xl:top-[5%]"
        )}
      >
        {/* La petite bulle à gauche */}
        <div
          ref={bubble1LRef}
          className="absolute w-[30%] -left-[5%] top-[79%]"
        >
          <img src="/images/shapes/bubble-1.svg" className="scale-[70%]" />
        </div>

        {/* La petite bulle à droite */}
        <div
          ref={bubble1RRef}
          className="absolute w-[30%] left-[87%] top-[75%]"
        >
          <img
            src="/images/shapes/bubble-1.svg"
            className="scale-[70%] scale-x-[-1]"
          />
        </div>

        {/* La bulle moyenne à gauche */}
        <div
          ref={bubble2LRef}
          className="absolute w-[30%] md:w-[35%] lg:w-[25%] xl:w-[23%] -left-[1%] top-[60%] xl:top-[63%]"
        >
          <img src="/images/shapes/bubble-2.svg" />
        </div>
        {/* La bulle moyenne à droite */}
        <div
          ref={bubble2RRef}
          className="absolute w-[30%] md:w-[35%] lg:w-[30%] left-[70%] top-[55%]"
        >
          <img src="/images/shapes/bubble-2.svg" className="scale-x-[-1]" />
        </div>

        {/* La grosse bulle */}
        <div className="absolute w-[100%] h-[100%] md:w-[120%] left-1/2 -translate-x-1/2 -top-[20%]">
          <img
            ref={mainBubbleRef}
            src="/images/shapes/bubble-3.svg"
            className="absolute w-full h-full"
          />
        </div>

        {/* Le Logo BoxCom */}
        <div className="absolute w-[100%] h-[100%] md:w-[120%] left-1/2 -translate-x-1/2 -top-[20%]">
          <img
            ref={logoRef}
            src="/Logos_Boxcom/logo-boxcom-color.png"
            className="absolute w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      {/* <Bubble containerRef={bubbleContainerRef} /> */}
      <Bulb onClick={triggerHueRotate} />
    </>
  );
};

export default BubbleBulbWrapper;
