'use client'
import gsap from "gsap";
import {  useEffect, useRef } from "react";

const Sun = ({ref}) => {
  // const sunRef=useRef();

  // useEffect(()=>{
  //   const sun=sunRef.current;
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
  //   tl.fromTo(sun, {
  //     y: 100,
  //     opacity: 0,
  //     scale: 0,
  //   }, {
  //     delay: 1,
  //     y: 0,
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "elastic.out"
  //   });
  //   tl.to(sun,{
  //     rotate:360,
  //     duration:20,
  //     ease:"linear"
  //   });
  // },[]);
  return (
    <div ref={ref} className="absolute w-[30%] right-[2%] md:top-[10%] top-[23%]">
      <img src="/images/nature/sun2.svg" />
    </div>
  );
};

export default Sun;
