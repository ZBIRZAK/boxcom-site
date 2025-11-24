import gsap from "gsap";
import { useEffect, useRef } from "react";

const Exclamation=()=>{
    const exclamationRef=useRef();

    useEffect(()=>{
        const exclamation=exclamationRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page06_screen08",
                start:"top 50%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(exclamation , {y:100});
        tl.to(exclamation, {
            delay:0.4,
            y:0,
            duration:1,
            ease:"elastic.out",
            repeat:-1,
            repeatDelay:5,
        })
    },[]);
    return(
        <div ref={exclamationRef} className="absolute w-[35%] right-[5%] ">
            <img src="/images/texts/up-!.svg" alt="UP" className="w-full h-full"/>
        </div>
    )
}
export default Exclamation;