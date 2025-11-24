'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const RedCandy=()=>{
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
              delay: 0.2,
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
            delay:0.2,
            yPercent:0,
            duration:2,
            ease:"elastic.out(0.8)",
        })
    },[]);
    return(
        <div ref={candyRef} className="absolute top-[23%] left-[5%] w-[10%] pointer-events-none">
            <img src="/images/misc/red_candy.svg" alt="Candies" className="w-full" />
        </div>
    )
}
export default RedCandy;