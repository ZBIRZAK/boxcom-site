import gsap from "gsap";
import { useEffect, useRef } from "react";

const SkatingGirl = () => {
  const girlRef=useRef(null);
  const imgRef=useRef(null);

  useEffect(()=>{
    gsap.set(girlRef.current,{scale:.5,opacity:0, rotation:10, x:0, y:0});
    gsap.to(girlRef.current,{
      scale:1,
      rotation:0,
      opacity:1, 
      duration:1, 
      delay:5, 
      ease:"elastic.out(1.2, 0.4)",
      onComplete:()=>{
        gsap.to(girlRef.current,{
          y:-30,
          x:-100,
          duration:1,
          ease:"sine.out",
          repeat:-1,
          yoyo:true,
          onRepeat:()=>{
            gsap.to(imgRef.current, {
              scaleX: gsap.getProperty(imgRef.current, "scaleX") * -1,
              duration: 0.2,
            });
          }
        });
      }
    });
  },[]);

  return (
    <div ref={girlRef} className="absolute w-[10%] right-[5%] bottom-[4%] ">
      <img ref={imgRef} src="/images/animals/dog-skateboard.svg"  className="scale-x-[-1]" />
    </div>
  );
};

export default SkatingGirl;
