'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Instagram=()=>{
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
            delay:0.2,
            scale:1.3,
            duration:0.5,
            repeat:-1,
            yoyo:true,
            ease: "power1.inOut"
        })
    },[]);
    return(
        <div ref={iconRef} className="absolute w-[20%] right-[3%] md:right-[-4%] top-[40%]">
          <img src="/images/social_networks/instagram.svg" />
        </div>
    )
}
export default Instagram;