'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Dollar = () => {
  const dollarRef = useRef();

  useEffect(()=>{
    const dollar=dollarRef.current;

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
    tl.fromTo(dollar,{
      y:100,
      opacity:0,
      scale:0
    },
    {
        delay:0.5,
      y:0,
      opacity:1,
      scale:1,
      duration:1,
      ease:"elastic.out"
    });
    tl.to(dollar,{
        y: -20, 
        duration: 1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        filter: "drop-shadow(0px 0px 5px #00ff08)",
    })
  },[]);
  return (
    <div ref={dollarRef} className="absolute w-[14%] left-[20%] md:top-[5%] top-[20%] rotate-30">
      <img src="/images/signs/dollar.svg" className="h-full w-full" />
    </div>
  );
};

export default Dollar;
