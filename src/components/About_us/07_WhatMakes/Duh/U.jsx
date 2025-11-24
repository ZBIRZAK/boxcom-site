'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const U=()=>{
    const uRef=useRef();
    useEffect(()=>{
        const u=uRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page06_screen07",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(u , {scale:0 ,y:100});
        tl.to(u, {
            scale:1,
            delay:3.5,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={uRef} className="absolute w-[45%] top-[14%] left-[15%] ">
            <img src="/images/texts/duh-u.svg" className="h-full w-full" />
          </div>
    );
 }
 export default U;