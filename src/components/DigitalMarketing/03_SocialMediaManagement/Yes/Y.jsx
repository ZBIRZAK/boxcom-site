'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const Y=()=>{
    const yRef=useRef();
    useEffect(()=>{
        const y=yRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(y , {scale:0.5 ,y:100});
        tl.to(y, {
            scale:1,
            delay:0.1,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={yRef} className="absolute w-[25%] md:w-[43%] top-[18%] md:top-[8%] right-[62%] ">
            <img src="/images/texts/yes-pink-y.svg" className="h-full w-full" />
          </div>
    );
 }
 export default Y;