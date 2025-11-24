import { useRef } from "react"
import Bird from "./Bird/Bird"
import Glasses from "./Glasses/Glasses"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Man=()=>{
    const refContainer= useRef();

    useGSAP(()=> {
        gsap.set(refContainer.current, {
            opacity: 0,
            bottom: -500,
          });
      
        gsap.to(
        refContainer.current,
        {
            opacity: 1,
            bottom: 0,
            duration:2,
            ease: "sine",
        //   onComplete: () => {
        //     // animation quand on va à l'écran 2
        //     gsap.to(refContainer.current, {
        //       scrollTrigger: scr1Scr2ScrollOptions,
        //       bottom: -300,
        //     });
        //   },
        },
        );
    })
    return(
        <div ref={refContainer} className="absolute w-[clamp(550px,35vw,700px)] md:right-[18%] right-[-15%] bottom-0 object-contain">
            <img
                src="/images/creative_content/man-brightened.png"
                className="h-full w-full"
            />
            <Glasses />
          <Bird />
        </div>
    )
}
export default Man