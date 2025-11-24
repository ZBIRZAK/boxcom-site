"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Chart = () => {
  const chartRef = useRef();
  const [curve, curveRef, containerRef] = useDoodle(
    "/animations/about_us/curve.json",
    {}
  );
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });
    tl.fromTo(
      chartRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    );
    tl.to(chartRef.current, {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div ref={chartRef} className="absolute w-[12%] -right-[35%] top-[75%]">
      <img src="/images/shapes/chart-without-curve.svg" />
      <div ref={containerRef} className="absolute w-[105%] top-0 left-0">
        {curve && <Lottie animationData={curve} lottieRef={curveRef} />}
      </div>
    </div>
  );
};

export default Chart;
