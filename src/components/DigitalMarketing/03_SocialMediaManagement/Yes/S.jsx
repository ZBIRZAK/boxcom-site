'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const S=()=>{
    const sRef=useRef();
    useEffect(()=>{
        const s=sRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(s , {scale:0.5 ,y:100});
        tl.to(s, {
            scale:1,
            delay:0.6,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={sRef} className="absolute w-[25%] md:w-[43%] top-[18%] md:top-[18%] right-[2%] ">
            <img src="/images/texts/yes-pink-s.svg" className="h-full w-full" />
          </div>
    );
 }
 export default S;