'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const U=()=>{
    const uRef=useRef();
    useEffect(()=>{
        const u=uRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(u , {scale:0.5 ,y:100});
        tl.to(u, {
            scale:1,
            delay:0.2,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={uRef} className="absolute w-[29%] md:w-[45%] top-[27%] md:top-[14%] left-[7%] md:left-[15%] ">
            <img src="/images/texts/duh-green-u.svg" className="h-full w-full" />
          </div>
    );
 }
 export default U;