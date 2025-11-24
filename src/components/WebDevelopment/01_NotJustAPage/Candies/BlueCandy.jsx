'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BlueCandy=()=>{
    const candyRef=useRef();

    useEffect(()=>{
        const candy=candyRef.current;
        gsap.fromTo(
            candy,
            { yPercent: -300 },
            {
              yPercent: 0,
              duration: 2,
              ease: "elastic.out(0.8)",
              delay: 0.4,
            }
        );
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page04_screen01",
                start:"bottom 80%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        });
        tl.fromTo(candy,{yPercent:-600},{
            delay:0.4,
            yPercent:0,
            duration:2,
            ease:"elastic.out(0.8)",
        })
    },[]);

    return(
        <div ref={candyRef} className="absolute top-[18%] left-[15%] w-[7%] pointer-events-none">
            <img src="/images/misc/blue_candy.svg" alt="Candies" className="w-full" />
        </div>
    )
}
export default BlueCandy;