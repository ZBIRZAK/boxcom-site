import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hashtag1=()=>{
    const hashRef=useRef();
    
    useEffect(()=>{
        const hash=hashRef.current;
        const tl=gsap.timeline({
            scrollTrigger: {
                trigger: "#page04_screen03",
                start: "top 50%",
                end: "bottom bottom",
                toggleActions: "restart none restart none",
                // markers: true,
              },
            repeat:-1,
            repeatDelay:3
        })
        tl.set(hash, {scale:0.3})
        tl.to(hash,{
            scale:1,
            duration:1,
            ease:"elastic.out"
        })
    },[])
    return(
        <div ref={hashRef} className="absolute top-[15%] right-[10%] w-[20%] h-auto  pointer-events-none">
            <img src="/images/signs/yellow_hashtag_1.svg" className="w-full h-full" alt="Hashtag" />
        </div>
    )
}
export default Hashtag1;