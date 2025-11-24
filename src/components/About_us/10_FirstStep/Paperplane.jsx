'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);

const Paperplane=()=>{
    const paperPlaneRef = useRef(null);
    useGSAP(() => {
        const paperPlane = paperPlaneRef.current;
        const tl=gsap.timeline({
            scrollTrigger: {
                trigger: "#page06_screen10",
                start: "top 60%",
                end: "bottom 20%",
                toggleActions: "restart none restart none",
                // markers: true,
            },
        });
        tl.fromTo(paperPlane, {y:100, opacity:0}, {y:0, opacity:1, duration:1, ease:"elastic.out"});
        // tl.to(paperPlane, { rotation: 95 });
        tl.to(paperPlane,{
            transformOrigin:"50% 100%",
            duration: 10,
            repeat:-1,
            motionPath:{
                path:[
                    // {x:-100,y:-200},
                    { x: 0, y: 0 },
                    { x: 200, y: -100 },
                    { x: 250, y: -80 },
                    { x: 300, y: -60 },
                    { x: 350, y: -40 },
                    { x: 400, y: -20 },
                    { x: 450, y: 0 },
                    { x: 650, y: 100 },
                    { x: 600, y: 200 },
                    { x: 500, y: 150 },
                    { x: 400, y: 100 },
                    { x: 100, y: 150 },
                    { x: -600, y: 250 },
                ],
                ease: "power1.in",
                autoRotate: true,
            }
        })
    })
    return(
        <div ref={paperPlaneRef} className="absolute md:w-[25%] w-[35%]  top-[-20%] left-[-20%]  z-15 ">
            <img src="/images/planes/plane2.svg" alt="" className="w-full" />
        </div>
    )
}
export default Paperplane;