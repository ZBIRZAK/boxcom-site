'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chart = chartRef.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger: "#page05_screen06",
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "restart restart restart restart",
        // markers:true,
      },
    })

    tl.fromTo(chart, {
      scale: 0,
      y: -20,
    }, {
      delay: 2,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div ref={chartRef} className="absolute w-[25%] right-[22%] top-[65%]">
      <img src="/images/shapes/chart.svg" />
    </div>
  );
};

export default Chart;
