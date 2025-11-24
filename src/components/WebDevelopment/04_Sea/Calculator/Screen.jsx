'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Screen=()=>{
    const screenRef=useRef();
    useEffect(()=>{
        const screen=screenRef.current;
        gsap.fromTo(screen,{ filter: "brightness(1)"},{
            filter: "brightness(2)",
            duration:1,
            repeat:-1,
            yoyo:true
        }
        )
    },[]);
    return(
        <div ref={screenRef} className="absolute top-[7%] left-[15%] w-[62%] pointer-events-none ">
            <img src="/images/objects/calculator-screen.svg" alt="Calculator" className="w-full" />
        </div>
    )
}
export default Screen;