"use client";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Hello = ({ containerStyles, delay }) => {
  const [hello, helloRef, containerRef] = useDoodle(
    "/animations/ecran1/hello.json",
    {
      from: { opacity: 0, x: -100 },
      to: {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        onStart: () => {
          helloRef.current?.play();
        },
      },
      delay,
    }
  );

  return (
    <div ref={containerRef} className="absolute md:w-[10%] w-[30%] md:top-[10%] top-[7%] md:right-[15%] right-[25%] z-5 ">
      {hello && (
        <Lottie
          animationData={hello}
          lottieRef={helloRef}
          loop={true}
          autoplay={false}
        />
      )}
    </div>
  );
};

export default Hello;
