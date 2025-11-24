import gsap from "gsap";
import { useEffect, useRef } from "react";

const Dollar = () => {
  const dollarRef = useRef();

  useEffect(()=>{
    const dollar=dollarRef.current;

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
    tl.fromTo(dollar,{
      y:100,
      opacity:0,
      scale:0
    },
    {
      delay:0.5,
      y:0,
      opacity:1,
      scale:1,
      duration:1,
      ease:"elastic.out"
    });
    tl.to(dollar,{
      rotate:360,
      duration:5,
      ease:"linear"
    })
  },[]);
  return (
    <div ref={dollarRef} className="absolute w-[20%] right-[5%] md:top-[15%] top-[45%] md:right-[-5%] -rotate-5">
      <img src="/images/signs/dollar.svg" />
    </div>
  );
};

export default Dollar;
