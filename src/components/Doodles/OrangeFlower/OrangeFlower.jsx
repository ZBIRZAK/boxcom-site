"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const OrangeFlower = ({ containerStyles, context ,delay }) => {
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
        <div className="opacity-0 absolute md:w-[7%] w-[22%]  bottom-[-3%] right-[5%] z-20 " ref={containerRef}>
            <img src="/images/orange_flower.svg" alt="flower" />
        </div>
    )
}
export default OrangeFlower;