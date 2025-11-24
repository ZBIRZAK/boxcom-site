'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const D=()=>{
    const dRef=useRef();
    useEffect(()=>{
        const d=dRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page06_screen07",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(d , {scale:0 ,y:100});
        tl.to(d, {
            scale:1,
            delay:3,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={dRef} className="absolute w-[45%] top-[18%] left-[-25%] ">
            <img src="/images/texts/duh-d.svg" className="h-full w-full" />
          </div>
    );
 }
 export default D;