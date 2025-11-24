'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Dollar = ({ref}) => {
  // const dollarRef = useRef();

  // useEffect(()=>{
  //   const dollar=dollarRef.current;

  //   const tl=gsap.timeline({
  //     scrollTrigger:{
  //       trigger: "#page05_screen05",
  //       start: "top 60%",
  //       end: "bottom 30%",
  //       toggleActions: "restart restart restart restart",
  //       // markers:true,
  //     },
  //     repeat:-1
  //   });
  //   tl.fromTo(dollar,{
  //     y:100,
  //     opacity:0,
  //     scale:0
  //   },
  //   {
  //     delay:4,
  //     y:0,
  //     opacity:1,
  //     scale:1,
  //     duration:1,
  //     ease:"elastic.out"
  //   });
  //   tl.to(dollar,{
  //     rotate:360,
  //     duration:7,
  //     ease:"linear"
  //   })
  // },[]);
  return (
    <div ref={ref} className="absolute w-[20%] left-[1%] bottom-[3%] -rotate-5">
      <img src="/images/signs/dollar.svg" />
    </div>
  );
};

export default Dollar;
