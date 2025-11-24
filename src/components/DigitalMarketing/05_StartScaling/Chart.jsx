'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Chart=()=>{
  const chartRef = useRef();
  const [curve, curveRef, containerRef] = useDoodle(
    "/animations/about_us/curve.json",{}
  );
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page03_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });
    tl.fromTo(chartRef.current, { opacity: 0, scale: 0 }, { delay: 5,opacity: 1, scale: 1, duration: 1, ease: "power1.in" });

  });
  return(
    <div ref={chartRef} className="opacity-0 absolute w-[22%] md:w-[30%] left-[-5%] md:left-[-22%] bottom-[25%]">
      <img src="/images/misc/graph-purple.svg" className="h-full w-full" />
      <div ref={containerRef} className="absolute w-[105%] top-0 left-0" >
        {curve && <Lottie animationData={curve} lottieRef={curveRef} />}
      </div>
    </div>
  )
}
export default Chart;