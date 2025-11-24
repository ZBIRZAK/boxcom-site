import gsap from "gsap";
import { useEffect, useRef } from "react";

const Dollar=()=>{
    const dollarRef=useRef();

    useEffect(()=>{
        const dollar=dollarRef.current;
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#page04_screen03",
                start:"bottom 80%",
                end: "bottom 10%",
                toggleActions: "restart restart restart restart",
                // markers:true
            }
        })
        tl.set(dollar, {scale:1});
        tl.to(dollar,{
            scale: 1.2,
            duration:1,
            ease:"power1.in",
            repeat:-1,
            yoyo:true
        })
    },[]);
    return(
        <div ref={dollarRef} className="absolute top-[5%] left-[5%] w-[13%] pointer-events-none  ">
         <img src="/images/signs/bluedollar.svg" alt="Dollar" className="w-full h-full" />
        </div>
    )
}
export default Dollar;