'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Tiktok=()=>{
    const iconRef = useRef(null);

    useEffect(()=>{
        const icon=iconRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'#page03_screen05',
                start: "top 50%",
                end: "bottom bottom",
                toggleActions: "restart none restart none",
                // markers:true,
            }
        })
        tl.set(icon,{opacity:0, scale:0});
        tl.to(icon,{
            delay:3,
            opacity:1, 
            scale:1
        })
        tl.to(icon,{
            scale:1.3,
            duration:0.5,
            repeat:-1,
            yoyo:true,
            ease: "power1.inOut"
        })
    },[]);
    return(
        <div ref={iconRef} className="absolute w-[20%] left-[3%] md:left-[-14%] bottom-[44%] md:bottom-[48%] rotate-[-35deg]">
          <img src="/images/social_networks/tiktok.svg" className="h-full w-full" />
        </div>
    )
}
export default Tiktok;