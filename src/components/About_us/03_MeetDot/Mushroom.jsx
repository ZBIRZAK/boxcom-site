'use client';
import Lottie from "lottie-react";
import { useDoodle } from "../../../hooks/useDoodle";
import { useEffect } from "react";
import gsap from "gsap";

const Mushroom=()=>{
  const [mushroom, mushroomRef, containerRef]=useDoodle("/animations/web_dev/sitting_mushroom.json",{});
  useEffect(()=>{
    const tl=gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen03",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true, 
        },
        delay:6.5,
      });
      tl.fromTo(containerRef.current,{
        scale:1,
        opacity:0,
        y:-100,
      },{
        scale:1,
        opacity:1,
        y:0,
        duration:1.5,
        ease:"sine.out"
      });
  })
  return(
    <div className="absolute w-[35%] left-[3%] bottom-[50%]">
      <div ref={containerRef} className="absolute w-[35%] right-[3%] top-[32%]">
         {mushroom && <Lottie animationData={mushroom} lottieRef={mushroomRef} loop autoplay />}
      </div>
    </div>
  )
}
export default Mushroom;