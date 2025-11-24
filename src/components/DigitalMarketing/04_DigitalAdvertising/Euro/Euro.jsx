import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Euro=()=>{
    const euroRef=useRef();
    useEffect(()=>{
    const el = euroRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",       
        end: "bottom 20%",
        toggleActions: "restart none restart none", 
      }
    });

    tl.set(el, { scale: 0.3, y: -20 })
      .to(el, {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      })
      .to(el, {
        delay:0.3,
        y: 50,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
    },[]);
    return(
        <div ref={euroRef} className="absolute w-[15%] top-[10%] left-[12%] rotate-[-25deg]">
            <img src="/images/signs/euro.svg" className="h-full w-full" />
        </div>
    )
}
export default Euro;