'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const E=()=>{
    const eRef=useRef();
    useEffect(()=>{
        const e=eRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(e , {scale:0.5 ,y:100});
        tl.to(e, {
            scale:1,
            delay:0.3,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
          <div ref={eRef} className="absolute w-[25%] md:w-[43%] top-[18%] md:top-[20%] right-[35%] ">
            <img src="/images/texts/yes-pink-e.svg" className="h-full w-full" />
          </div>
    );
 }
 export default E;