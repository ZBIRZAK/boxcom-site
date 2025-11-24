'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Arobase=()=>{
    const aRef=useRef();

    useEffect(()=>{
        const a=aRef.current;
        const tl=gsap.timeline({
            scrollTrigger: {
                trigger: "#page04_screen03",
                start: "top 50%",
                end: "bottom bottom",
                toggleActions: "restart none restart none",
                // markers: true,
              },
        });

        tl.to(a, {
            scale:1.1,
            duration:0.5,
            ease:"power1.inOut",
            repeat:-1,
            yoyo:true
        });
    },[]);

    return(
        <div ref={aRef} className="absolute top-[70%] right-[5%] w-[15%]  pointer-events-none">
            <img src="/images/signs/arobase.svg" alt="Chart" className="w-full" />
        </div>
    )
}
export default Arobase;