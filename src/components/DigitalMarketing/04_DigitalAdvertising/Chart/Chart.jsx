'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDoodle } from "../../../../hooks/useDoodle";
import Lottie from "lottie-react";

const Chart = () => {
  const chartRef = useRef();
  const [curve, curveRef, containerRef] = useDoodle(
    "/animations/about_us/curve.json",{
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1, duration: 1, ease: "power1.in" },
    }
  );
  useEffect(() => {
    const el = chartRef.current;

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: el,
            start: "top 80%",       
            end: "bottom 20%",
            toggleActions: "restart none restart none",
        }
    });

    tl.set(el, { scale: 0.3, y: -20 })
      .to(el, {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      })
      // .to(el, {
      //   x: "+=5",      
      //   duration: 0.1,
      //   rotate:9,
      //   yoyo: true,
      //   repeat: -1,
      //   ease: "power1.inOut"
      // });

  }, []);

  return (
    <div ref={chartRef} className="absolute w-[28%] bottom-[15%] -right-[-8%]">
      <img src="/images/shapes/yellow-chart-without-curve.svg" />
      <div ref={containerRef} className="absolute w-[100%] top-0 left-0">
        {curve && <Lottie animationData={curve} lottieRef={curveRef} />}
      </div>
    </div>
  )
}

export default Chart;
