'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);
const PaperPlane = () => {
    const paperPlaneRef = useRef(null);
    const paperPlane2Ref = useRef(null);
    useGSAP(() => {
        const paperPlane = paperPlaneRef.current;
        // gsap.fromTo(paperPlane2Ref.current, {rotate:-20}, {rotate:20,duration:1,repeat:-1,yoyo:true,ease:"power2.inOut"});
        const tl=gsap.timeline({
            scrollTrigger: {
                trigger: "#page08_screen3",
                start: "top 60%",
                end: "bottom 20%",
                toggleActions: "restart none restart none",
                // markers: true,
            },
        });
        tl.fromTo(paperPlane, {y:100, opacity:0}, {y:0, opacity:1, duration:1, ease:"elastic.out"});
        tl.to(paperPlane,{
            transformOrigin:"50% 100%",
            duration: 10,
            repeat:-1,
            motionPath:{
                path:[
                    // {x:-100,y:-200},
                    { x: 0, y: 0 },
                    // { x: 50, y: 100},
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
    return (
        <div ref={paperPlaneRef} className="absolute md:w-[10%] w-[35%]  top-[-10%] left-[20%]  z-15">
            <img ref={paperPlane2Ref} src="/images/planes/plane1_rotated.svg" alt="plane" className="w-full" />
        </div>
    );
};
export default PaperPlane;