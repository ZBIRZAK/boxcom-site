'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

 const Laughing=()=>{
    const LRef=useRef();
    useEffect(()=>{
        const L=LRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page03_screen03",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(L , {scale:0.5 ,y:100});
        tl.to(L, {
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
          <div ref={LRef} className="absolute w-[27%] md:w-[45%] top-[10%] md:top-[15%] right-[20%]  ">
            <img src="/images/texts/lol-purple-l.svg" className="h-full w-full" />
          </div>
    );
 }
 export default Laughing;