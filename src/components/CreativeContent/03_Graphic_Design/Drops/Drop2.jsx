'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Drop2=()=>{
    const dropRef=useRef(null);

    useEffect(()=>{
        if(!dropRef.current) return;

        const tl=gsap.timeline();
        tl.set(dropRef.current,{scale:0.5,rotation:150});
        tl.to(dropRef.current,{
            scale:1,
            rotation:200,
            opacity:2,
            motionPath:{
                path:[{x:-50,y:-100},{x:30,y:-500}],
            },
            duration:3,
            ease:"back.out(1.7)"});
    },[]);
    return(
        <div ref={dropRef} className=" opacity-0 absolute w-[4%] bottom-[35%] right-[50%] transform rotate-[230deg] z-0">
          <img src="/images/water/water_drop.svg" />
        </div>
    )
}
export default Drop2;