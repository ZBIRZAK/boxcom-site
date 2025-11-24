'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Dollar=()=>{
    const dollarRef=useRef();
    useEffect(()=>{
        const dollar=dollarRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'#page03_screen05',
                start: "top 50%",
                end: "bottom bottom",
                toggleActions: "restart none restart none",
                // markers:true,
            }
        })

        tl.set(dollar, {scale:0.8});
        tl.to(dollar, {
            scale:1,
            duration:1,
            ease:"power1.in",
            repeat:-1,
            yoyo:true
        })
    },[]);
    return(
        <div ref={dollarRef} className="absolute top-[15%] left-[25%] w-[9%] pointer-events-none">
            <img src="/images/signs/dollar.svg" alt="Candies" />
        </div>
    )
}
export default Dollar;