import gsap from "gsap";
import { useEffect, useRef } from "react";

const Euro=()=>{
    const euroRef=useRef();

    useEffect(()=>{
        const euro=euroRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page04_screen03",
                start:"bottom 80%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(euro, {scale:1});
        tl.to(euro,{
            scale: 1.2,
            duration:1,
            ease:"power1.in",
            repeat:-1,
            yoyo:true
        })
    },[]);
    return(
        <div ref={euroRef} className="absolute top-[55%] left-[5%] w-[14%] pointer-events-none rotate-25 ">
            <img src="/images/signs/euro.svg" alt="Euro" />
        </div>
    )
}
export default Euro;