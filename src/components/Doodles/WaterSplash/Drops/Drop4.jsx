'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Drop4=()=>{
    const dropRef=useRef(null);

    useEffect(()=>{
        if(!dropRef.current) return;

        const tl=gsap.timeline();
        tl.set(dropRef.current,{scale:0,rotation:230});
        tl.to(dropRef.current,{
            scale:1,
            // delay:6,
            rotation:270,
            opacity:1,
            motionPath:{
                path:[{x:-30,y:-100},{x:0,y:0},{x:300,y:-300},{x:500,y:-200}],
            },
            duration:4,
            ease:"back.out(1.7)"});
    },[]);
    return(
        <div ref={dropRef} className=" opacity-0 absolute w-[5%] bottom-[45%] right-[50%] transform rotate-[230deg] z-0">
          <img src="/images/water/water_drop.svg" />
        </div>
    )
}
export default Drop4;