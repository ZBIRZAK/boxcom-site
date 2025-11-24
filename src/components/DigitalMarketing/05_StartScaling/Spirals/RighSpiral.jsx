'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const RightSpiral=()=>{
    const spiralRef=useRef();

    useEffect(()=>{
        const spiral=spiralRef.current;
        const tl=gsap.timeline({
            scrollTrigger: {
                trigger:spiral,
                start:"top 90%",
                end: "bottom 30%",
                toggleActions: "restart none restart none",
                // markers:true,
            }
        });

        tl.set(spiral, {scale:0.3, opacity:0, y:-50 })
          .to(spiral, {
            scale: 1,
            opacity:1,
            y: 0,
            duration: 1.5,
            ease: "elastic.out(2.5)",
            repeat:-1,
            repeatDelay:2
          })
    },[]);

    return(
        <div ref={spiralRef} className="absolute w-[18%] -right-[-30%] bottom-[4%] rotate-[-185deg]">
          <img
            src="/images/shapes/spiral-ribbon.svg"
            className="h-full w-full"
            id="right-spiralRibbon"
          />
        </div>
    )
}
export default RightSpiral;