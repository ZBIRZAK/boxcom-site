'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Brush=()=>{
    const brushRef = useRef();  

    useEffect(()=>{
        const brush = brushRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#page06_screen03",
                start: "top 60%",
                end: "bottom 20%",
                toggleActions: "restart none restart none",
                // markers: true, 
            },
        });
        tl.fromTo(brush, {scale:0, y:100, opacity:0}, {y:0, opacity:1, scale:1, duration:1.5, ease:"elastic.out"})
        tl.to(brush,{
            y:250,
            x:-50,
            duration:2,
            ease: "power1.in",
        });
        tl.to(brush,{
            rotate:20,
            transformOrigin:"50% 0%",
            duration:1,
            repeat:2,
            yoyo: true,
            ease: "power1.in",
        });
        tl.to(brush,{
            x:0,
            y:0,
            duration:1.5,
            ease: "power1.in",
        })
    },[]);
    return(
        <div ref={brushRef} className="absolute w-[5%] bottom-[58%] left-[55%]">
            <img src="/images/brush.svg" />
        </div>
    )
}
export default Brush;