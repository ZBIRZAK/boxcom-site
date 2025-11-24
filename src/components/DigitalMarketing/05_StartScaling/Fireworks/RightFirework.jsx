'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RightFirework=()=>{
    const fireworkRef=useRef();

    useEffect(()=>{
        const firework=fireworkRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'#page03_screen05',
                start: "top 50%",
                end: "bottom bottom",
                toggleActions: "restart none restart none",
                // markers:true,
            }
        })
        tl.set(firework, {scale:0.5, x:-100, y:100});
        tl.to(firework, {
            delay:5,
            scale:1,
            x:0,
            y:0,
            duration:0.5,
            ease:"power1.in"
        });
    },[]);

    return(
        <div ref={fireworkRef} className="absolute w-[20%] -right-[-5%] top-[7%] ">
          <img
            src="/images/misc/firework.svg"
            className="h-full w-full"
            id="right-firework"
          />
        </div>
    )
}
export default RightFirework;