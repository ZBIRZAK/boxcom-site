'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PurpleTriangles=()=>{
  const trianglesRef=useRef();

  useEffect(()=>{
      const triangles=trianglesRef.current;
      const tl=gsap.timeline({
          scrollTrigger:{
              trigger:'#page03_screen05',
              start: "top 50%",
              end: "bottom bottom",
              toggleActions: "restart none restart none",
              // markers:true,
          }
      })

      tl.set(triangles,{scale:1, y:0, opacity:0});
      tl.to(triangles,{
          delay:1.5,
          opacity:1,
          duration:0.5,
          ease:"power1.in"
        })
      tl.to(triangles, {
          scale:1.3,
          y:-100,
          duration:2,
          repeat:-1,
          yoyo:true,
          ease: "power1.in"
      })
  },[]);
  return(
      <div ref={trianglesRef} className="absolute w-[20%] -right-[20%] top-[28%] rotate-[-99deg]">
        <img src="/images/shapes/double-arrow.svg" />
      </div>
  )
}
export default PurpleTriangles;