"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Creature2=({containerStyles,delay })=>{
    const containerRef = useRef(null);
    // const { scr1Scr2ScrollOptions } = context;
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
            delay: delay||5,
            // onComplete: () => {
            //     gsap.to(containerRef.current, {
            //       scrollTrigger: scr1Scr2ScrollOptions,
            //       opacity: 0,
            //       marginTop: "15%",
            //       scale: 3,
            //     });
            // }
        })
    },[]);
    return(
        <div className={containerStyles} ref={containerRef} >
            <img src="/images/creature.svg" alt="creature" style={{
          width: "100%",
          height: "auto",
        }}  />
        </div>
    )
}
export default Creature2;