'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const Out=()=>{
    const oRef=useRef();
    useEffect(()=>{
        const o=oRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(o , {scale:0.5 ,y:100});
        tl.to(o, {
            scale:1,
            delay:0.4,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={oRef} className="absolute w-[27%] md:w-[45%] top-[10%] md:top-[-10%] left-[65%]  ">
            <img src="/images/texts/lol-purple-o.svg" className="h-full w-full" />
          </div>
    );
 }
 export default Out;