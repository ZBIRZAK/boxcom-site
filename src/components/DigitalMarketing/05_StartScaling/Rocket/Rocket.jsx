'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Rocket=()=>{
    const rocketRef=useRef();

    useEffect(()=>{
        const rocket=rocketRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'#page03_screen05',
                start: "top 50%",
                end: "bottom bottom",
                toggleActions: "restart none restart none",
                // markers:true,
            }
        });

        tl.set(rocket, {yPercent:200});
        tl.to(rocket,{
            delay:1.5,
            yPercent:-300,
            duration:3,
            repeat:-1,
            ease: "power1.in"
        })
    },[]);
    return(
        <div ref={rocketRef} className="absolute w-[13%] md:w-[18%] right-[3%] md:right-[-17%] top-[55%] md:top-[50%]">
          <img src="/images/misc/rocket.svg" />
        </div>
    )
}
export default Rocket;