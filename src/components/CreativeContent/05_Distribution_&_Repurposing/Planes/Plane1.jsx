import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);
const Plane1 = () => {
  const planeRef=useRef(null);

  useEffect(()=>{
    const path = [
      { x: 0, y: 0 },
      { x: -50, y: 50 },
      { x: 0, y: 80 },
      { x: 200, y: 250 },
      { x: -10, y: 500 },
      { x: 0, y: 0 },
    ];

    gsap.set(planeRef.current, { scale: 1.3, x: 0,rotation:140, opacity:0 });
    gsap.to(planeRef.current, { 
      scale: 1, 
      x: 0, 
      opacity: 1 ,
      duration:1,
      onComplete:()=>{
        gsap.to(planeRef.current, {
          scale: 1,
          opacity: 1, 
          duration: 5,
          repeat: -1,
          // yoyo: true, 
          motionPath: {
          path,
            // curviness: 1.25,
            // autoRotate: ["x,y", 180],
          },
          ease: "power1.inOut",
        });
      },
      ease:"power1.inOut",
    });
  },[]);
  return (
    <div ref={planeRef} className="absolute w-[15%] left-10 top-[7%]">
      <img src="/images/planes/plane2.svg" />
    </div>
  );
};

export default Plane1;
