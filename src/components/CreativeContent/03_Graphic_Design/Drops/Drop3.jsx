'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Drop3=()=>{
    const dropRef=useRef(null);

    useEffect(()=>{
        if(!dropRef.current) return;

        const tl=gsap.timeline();
        tl.set(dropRef.current,{scale:0.8,rotation:100});
        tl.to(dropRef.current,{
            scale:1,
            rotation:200,
            opacity:2,
            motionPath:{
                path:[{x:-150,y:-100},{x:-530,y:-450}],
            },
            duration:3,
            ease:"back.out(1.7)"});
    },[]);
    return(
        <div ref={dropRef} className=" opacity-0 absolute w-[4.5%] bottom-[25%] right-[55%] transform rotate-[230deg] z-0">
          <img src="/images/water/water_drop.svg" />
        </div>
    )
}
export default Drop3;