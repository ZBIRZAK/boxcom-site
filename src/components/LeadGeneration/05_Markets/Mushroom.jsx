'use client';
import Lottie from "lottie-react";
import { useDoodle } from "../../../hooks/useDoodle";
import { useEffect } from "react";
import gsap from "gsap";

const Mushroom=({ref})=>{
  const [mushroom, mushroomRef, containerRef]=useDoodle("/animations/web_dev/sitting_mushroom.json",{});

  useEffect(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger: "#page05_screen05",
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "restart restart restart restart",
        // markers:true,
      },
      repeat:-1
    })
    tl.fromTo(
      containerRef.current,{
        scale:0.3,
        opacity:0,
        y:50,
      },
      {
        delay:2,
        scale:1,
        opacity:1,
        y:0,
        duration:1,
        ease:"elastic.out",
      }
    );
    tl.to(containerRef.current,{
      duration:7,
      ease:"sine.inOut",
      scale:1,
    })
  });
  return(
    <div ref={ref} className="absolute w-full  right-[3%] top-[42%] md:top-[32%]">
      <div ref={containerRef} className="absolute w-[35%] right-[3%] top-[32%]">
         {mushroom && <Lottie animationData={mushroom} lottieRef={mushroomRef} loop autoplay />}
      </div>
    </div>
  )
}
export default Mushroom;