import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Euro = () => {
  const euroRef = useRef();

  useEffect(()=>{
    const euro=euroRef.current;

    const tl=gsap.timeline({
      scrollTrigger:{
        trigger: "#page05_screen04",
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "restart restart restart restart",
        // markers:true,
      },
      repeat:-1
    });
    tl.fromTo(euro,{
      y:100,
      opacity:0,
      scale:0
    },
    {
      y:0,
      opacity:1,
      scale:1,
      duration:1,
      ease:"elastic.out"
    });
    tl.to(euro,{
      rotate:360,
      duration:5,
      ease:"linear"
    })
  },[]);
  return (
    <div ref={euroRef} className="absolute w-[20%] left-[5%] md:left-[25%] md:top-[50%] top-[35%] -rotate-30">
      <img src="/images/signs/euro.svg" />
    </div>
  );
};

export default Euro;
