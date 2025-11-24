'use client';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Stain = () => {
    const stainRef = useRef(null);
    useGSAP(()=>{
        const tl=gsap.timeline({scrollTrigger:{
            trigger: "#page08_screen3",
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "restart none restart none",
            // markers: true,
        },
        repeat: -1,
        repeatDelay:5
    },
    );
        tl.fromTo(stainRef.current,
            {scale:0, opacity:0},
            {delay:0.5, scale:1, opacity:1, duration:1, ease:"elastic.out(2)"}
        );
    })
    return (
        <div ref={stainRef} className="absolute w-[7%] bottom-[30%] left-[45%]">
            <img src="/images/misc/stain.svg" />
        </div>
    );
};
export default Stain;