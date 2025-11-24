'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Whatsapp=()=>{
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
            delay:4,
            opacity:1, 
            scale:1
        })
        tl.to(icon,{
            delay:0.4,
            scale:1.3,
            duration:0.5,
            repeat:-1,
            yoyo:true,
            ease: "power1.inOut"
        })
    },[]);
    return(
        <div ref={iconRef} className="absolute w-[20%] left-[18%] md:left-[2%] top-[80%] md:top-[75%]">
          <img src="/images/social_networks/whatsapp.svg" />
        </div>
    )
}
export default Whatsapp;