'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const H=()=>{
    const hRef=useRef();
    useEffect(()=>{
        const h=hRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(h , {scale:0.5 ,y:100});
        tl.to(h, {
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
          <div ref={hRef} className="absolute w-[29%] md:w-[45%] top-[27%] md:top-[14%] left-[7%] md:left-[55%] ">
            <img src="/images/texts/duh-green-h.svg" className="h-full w-full" />
          </div>
    );
 }
 export default H;