'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Euro = () => {
  const euroRef = useRef();

  useEffect(()=>{
    const euro=euroRef.current;

    const tl=gsap.timeline({
      scrollTrigger:{
        trigger: "#page05_screen07",
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "restart restart restart restart",
        // markers:true,
      },
      repeat:-1
    });
    tl.fromTo(euro,{
      y:100,
      opacity:0,
      scale:0
    },
    {
      y:0,
      opacity:1,
      scale:1,
      duration:1,
      ease:"elastic.out"
    });
    tl.to(euro,{
        y: -20, 
        duration: 1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        filter: "drop-shadow(0px 0px 5px #ff83b3)",
    })
  },[]);
  return (
    <div ref={euroRef} className="absolute w-[20%] left-[-15%] top-[55%] -rotate-30">
      <img src="/images/signs/euro-pink.svg" className="h-full w-full" />
    </div>
  );
};

export default Euro;
