'use client';

import Lottie from "lottie-react";
import { useDoodle } from "../../../hooks/useDoodle";
import { useEffect } from "react";
import gsap from "gsap";

const GlobeEarth = ( {ref}) => {
  const [globe, globeRef, containerRef] = useDoodle("/animations/ecran2/globe_terre.json", {});
  // useEffect(()=>{
  //   const tl=gsap.timeline({
  //     scrollTrigger:{
  //       trigger: "#page05_screen05",
  //       start: "top 60%",
  //       end: "bottom 30%",
  //       toggleActions: "restart restart restart restart",
  //       // markers:true,
  //     },
  //     repeat:-1
  //   })
  //   tl.fromTo(
  //     containerRef.current,{
  //       scale:0.3,
  //       opacity:0,
  //       y:50,
  //     },
  //     {
  //       delay:3,
  //       scale:1,
  //       opacity:1,
  //       y:0,
  //       duration:1,
  //       ease:"elastic.out",
  //     }
  //   );
  //   tl.to(containerRef.current,{
  //     duration:10,
  //     ease:"sine.inOut",
  //     scale:1,
  //   })
  // });
  return (
    <div ref={containerRef} className="absolute w-[25%] right-[3%] bottom-[3%] rotate-30">
      {globe && <Lottie animationData={globe} lottieRef={globeRef} loop autoplay />}
    </div>
  );
};

export default GlobeEarth;
