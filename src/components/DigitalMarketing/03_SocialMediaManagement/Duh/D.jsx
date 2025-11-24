'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const D=()=>{
    const dRef=useRef();
    useEffect(()=>{
        const d=dRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(d , {scale:0.5 ,y:100});
        tl.to(d, {
            scale:1,
            delay:0,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={dRef} className="absolute w-[29%] md:w-[45%] top-[27%] md:top-[18%] left-[7%] md:left-[-25%] ">
            <img src="/images/texts/duh-green-d.svg" className="h-full w-full" />
          </div>
    );
 }
 export default D;