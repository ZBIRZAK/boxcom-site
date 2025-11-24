'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Lolipop=()=>{
    const lolipopRef=useRef();

    useEffect(()=>{
        const lolipop=lolipopRef.current;
        gsap.fromTo(lolipop,{opacity:0, y:-100},{
            opacity:1,
            y:0,
            duration: 1.5,
            ease:"power1.in"
        })
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page04_screen01",
                start:"bottom 80%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.fromTo(lolipop,{opacity:0, y:-100},{
            opacity:1,
            y:0,
            duration: 1.5,
            ease:"power1.in"
        })
    },[]);

    return(
        <div ref={lolipopRef} className="absolute bottom-[32%] left-[0%] w-[20%] pointer-events-none">
            <img src="/images/misc/lolipop.svg" alt="Lolipop" className="w-full" />
        </div>
    )
}
export default Lolipop;