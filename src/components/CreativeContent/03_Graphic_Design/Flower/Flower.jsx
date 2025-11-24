import gsap from "gsap";
import { useEffect, useRef } from "react";

const Flower = () => {
  const flowerRef=useRef(null);

  useEffect(()=>{
    if (!flowerRef.current) return;

    gsap.to(flowerRef.current, {
      rotation: 5,           
      duration: 2,
      ease: "sine.inOut",    
      yoyo: true,
      repeat: -1,           
      transformOrigin: "50% 100%", 
    });
  },[]);
  return (
    <div ref={flowerRef} className="absolute w-[30%] left-[15%] -bottom-[5%]">
      <img src="/images/flowers/muguet.svg" />
    </div>
  );
};

export default Flower;
