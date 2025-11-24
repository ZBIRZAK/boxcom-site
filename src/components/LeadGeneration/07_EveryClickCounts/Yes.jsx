'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Yes = () => {
    const yesRef = useRef();

    useEffect(()=>{
        const yes=yesRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#page05_screen07",
              start: "top 60%",
              end: "bottom 20%",
              toggleActions: "restart none restart none",
            //   markers: true, 
            },
        });
        tl.fromTo(yes, {scale:0, y:100, opacity:0}, 
            {
                delay:1.5,
                y:0, 
                opacity:1,
                scale:1, 
                duration:1.5, 
                ease:"elastic.out"
            })
    },[]);
    return (
        <div ref={yesRef} className="absolute bottom-[29%] left-[17%] w-[25%]" >
            <img src="/images/texts/yes-orange.svg" alt="Chat Bubble" className="w-full" />
        </div>
    )
}
export default Yes;