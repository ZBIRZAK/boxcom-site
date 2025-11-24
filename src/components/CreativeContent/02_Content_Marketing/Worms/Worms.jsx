'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Worms = () => {
    const wormsRef = useRef(null);

    useEffect(() => {
      if (!wormsRef.current) return;
      gsap.set(wormsRef.current,
        {
            x: -100, 
            y: 0,
            scale: 0,     
            opacity: 0,
        }
      );
      gsap.to(wormsRef.current, 
        {
            x: 0,
            y: 0,
            scale: 1,     
            opacity: 1,
            duration: 2,
            ease: "back.out(1.5)",
        }
      );      
    }, []);
    return(
        <div ref={wormsRef} className="absolute bottom-[44%] left-[7%] w-[25%] h-auto">
          <img
            src="/images/creative_content/doodles/worms.svg"
            className="w-full h-full"
            alt="Worms"
          />
        </div>
    )
}
export default Worms;