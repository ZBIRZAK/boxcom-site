'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Yes = () => {
    const yesRef = useRef();

    useEffect(()=>{
        const yes=yesRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#page06_screen10",
              start: "top 60%",
              end: "bottom 20%",
              toggleActions: "restart none restart none",
            //   markers: true, 
            },
        });
        tl.fromTo(yes, {scale:0, y:100, opacity:0}, 
            {
                delay:1.7,
                y:0, 
                opacity:1,
                scale:1, 
                duration:1.5, 
                ease:"elastic.out"
            })
    },[]);
    return (
        <div ref={yesRef} className="absolute bottom-[39%] left-[25%] w-[50%] -rotate-20" >
            <img src="/images/texts/yes-yellow.svg" alt="Chat Bubble" className="w-full" />
        </div>
    )
}
export default Yes;