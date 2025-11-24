'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Stain=()=>{
    const stainRef=useRef(null);
    useEffect(()=>{
        const tl=gsap.timeline({
          scrollTrigger: {
            trigger: "#page06_screen03",
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "restart none restart none",
            // markers: true, 
            },
            delay:7,
          });
          tl.fromTo(stainRef.current,{
            scale:1,
            opacity:0,
            y:-100,
          },{
            scale:1,
            opacity:1,
            y:0,
            duration:1.5,
            ease:"sine.out"
          });
      })
    return(
        <div ref={stainRef} className="absolute w-[7%] md:block hidden bottom-[5%] left-[35%]">
            <img src="/images/misc/stain.svg" />
        </div>
    )
}
export default Stain;