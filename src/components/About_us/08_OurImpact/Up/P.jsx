import gsap from "gsap";
import { useEffect, useRef } from "react";

const P=()=>{
    const pRef=useRef();

    useEffect(()=>{
        const p=pRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page06_screen08",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(p , {y:100});
        tl.to(p, {
            delay:0.2,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5
        })
    },[]);
    return(
        <div ref={pRef} className="absolute w-[40%] left-[30%] ">
            <img src="/images/texts/up-p.svg" alt="UP" className="w-full h-full"/>
        </div>
    )
}
export default P;