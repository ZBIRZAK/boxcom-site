'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const H=()=>{
    const hRef=useRef();
    useEffect(()=>{
        const h=hRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page06_screen07",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(h , {scale:0 ,y:100});
        tl.to(h, {
            scale:1,
            delay:4,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={hRef} className="absolute w-[45%] top-[14%] left-[55%] ">
            <img src="/images/texts/duh-h.svg" className="h-full w-full" />
          </div>
    );
 }
 export default H;