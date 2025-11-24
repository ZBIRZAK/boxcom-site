'use client';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Brush = () => {
    const brushRef= useRef(null);
    useGSAP(() => {
        gsap.fromTo(brushRef.current,{rotate:0, transformOrigin:"50% 0%"},
            {rotate:20,duration:1,repeat:-1,yoyo:true,ease:"power1.in"} 
        );
    }, [brushRef]);
    return (
        <div ref={brushRef} className="absolute w-[5%] bottom-[70%] left-[55%]">
            <img src="/images/objects/brush.svg" />
        </div>
    );
};
export default Brush;