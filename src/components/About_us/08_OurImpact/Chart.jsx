'use client';
import { useGSAP } from "@gsap/react";
import { useDoodle } from "../../../hooks/useDoodle";
import gsap from "gsap";
import { useRef } from "react";
import Lottie from "lottie-react";

const Chart = () => {
  const chartRef = useRef();
  const [curve, curveRef, containerRef] = useDoodle(
    "/animations/about_us/curve.json",{
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, delay: 2, scale: 1, duration: 1, ease: "power1.in" },
    }
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

    tl.fromTo(chartRef.current, {opacity: 0, scale: 0, delay: 2 }, { opacity: 1, scale: 1, duration: 1, ease: "power1.in" });

  });
  return (
    <div ref={chartRef} className="absolute w-[25%] right-[5%] bottom-[5%]">
      <img src="/images/shapes/yellow-chart-without-curve.svg" className="w-full" />
      <div ref={containerRef} className="absolute w-[100%] top-0 left-0">
        {curve && <Lottie animationData={curve} lottieRef={curveRef} />}
      </div>
    </div>
  );
  };
  
  export default Chart;
  