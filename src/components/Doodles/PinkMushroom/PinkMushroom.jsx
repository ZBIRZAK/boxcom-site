"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const PinkMushroom = ({ containerStyles, context, delay }) => {
    const containerRef = useRef(null);
    const { scr1Scr2ScrollOptions } = context;
    useEffect(()=>{
        gsap.set(containerRef.current, {
            opacity: 0,
            scale: 0.3,
        });
        gsap.to(containerRef.current,{
            opacity:1,
            scale:1,
            duration: 5,
            ease:"power2.out",
            delay: delay,
            onComplete: () => {
                gsap.to(containerRef.current, {
                  scrollTrigger: scr1Scr2ScrollOptions,
                  opacity: 0,
                  marginTop: "15%",
                  scale: 3,
                });
            }
        })
    },[]);
    return(
        <div className="absolute opacity-0 md:w-[7%] w-[15%] bottom-[5%] md:right-[13%] right-[23%] z-20 " ref={containerRef}>
            <img src="/images/pink_mushroom.svg" alt="mushroom" />
            <div className="absolute w-[80%] top-[-10%] left-[10%]">
                <img src="/images/nature/mushroom_eyes.svg" alt="Eye" />
            </div>
        </div>
    )
}
export default PinkMushroom;