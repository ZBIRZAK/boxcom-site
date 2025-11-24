"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Canvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page05_screen06",
          start: "top 60%",
          end: "bottom 30%",
          toggleActions: "restart restart restart restart",
          // markers: true,
        },
      });
      tl.fromTo(ref.current, {
        opacity: 0,
        scale: 0,
      },{
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      })
      tl.to(ref.current, {
        x:20,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div ref={ref} className="absolute w-[35%] -right-[5%] bottom-0">
      <img src="/images/shapes/canvas.svg" alt="Trophy" />
    </div>
  );
};

export default Canvas;
