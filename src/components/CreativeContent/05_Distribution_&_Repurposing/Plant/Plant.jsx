import gsap from "gsap";
import { useEffect, useRef } from "react";

const Plant = () => {
  const plantRef=useRef(null);

  useEffect(()=>{
    gsap.set(plantRef.current,{scale:.6,opacity:0, y:100});
    gsap.to(plantRef.current,{
      scale:1,
      y:0,
      opacity:1, 
      duration:1, 
      delay:5, 
      ease:"power1.inOut"
    });
  },[]);
  return (
    <div ref={plantRef} className="absolute w-[25%] -left-[10%] -bottom-[5%]">
      <img src="/images/nature/plante1.svg" />
    </div>
  );
};

export default Plant;
