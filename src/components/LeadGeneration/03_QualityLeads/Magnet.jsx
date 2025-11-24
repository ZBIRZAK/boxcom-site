import gsap from "gsap";
import { useEffect, useRef } from "react";

const Magnet=()=>{
    const magnetRef = useRef(null);

    useEffect(() => {
        if (magnetRef.current) {
          const tl = gsap.timeline({
            delay: 2,
            scrollTrigger: {
              trigger: "#page05_screen03",
              start: "top 60%",
              end: "bottom 20%",
              toggleActions: "restart none restart none",
              // markers: true,
            },
            repeat: -1,
          });
      
          tl.fromTo(
            magnetRef.current,
            {
              opacity: 0,
              scale: 0,
              y: 50,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
            }
          );
      
          tl.to(magnetRef.current, {
            x: -5,
            duration: 0.03,
            yoyo: true,
            repeat: 15,
            ease: "sine.inOut",
          });
      
          tl.to({}, { duration: 2 });
        }
      }, []);
      
  
    return(
        <div ref={magnetRef} className="absolute w-[25%] top-[60%] left-[40%] -rotate-70 ">
            <img src="/images/objects/magnet.png" alt="Magnet" />
        </div>
    )
}
export default Magnet;