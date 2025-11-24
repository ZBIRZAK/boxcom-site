import gsap from "gsap";
import { useEffect, useRef } from "react";

const U=()=>{
    const uRef=useRef();

    useEffect(()=>{
        const u=uRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page06_screen08",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(u , {y:100});
        tl.to(u, {
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5,
        })
    },[]);

    return(
        <div ref={uRef} className="absolute w-[40%] top-[20%] ">
            <img src="/images/texts/up-u.svg" alt="UP" className="w-full"/>
        </div>
    )
}
export default U;