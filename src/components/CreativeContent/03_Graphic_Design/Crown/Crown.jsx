import gsap from "gsap";
import { useEffect, useRef } from "react";

function animCrown(refCrown) {
  gsap.fromTo(
    refCrown.current,
    {
      rotate: -10,
      yPercent: -200,
      opacity: 0.2,
      scale: 0.8,
    },
    {
      rotate: 0,
      yPercent: 0,
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "bounce.out",
      repeat: -1,      
      repeatDelay: 2.5, 
    }
  );
}

const Crown = () => {
  const refCrown = useRef();

  useEffect(() => {
    animCrown(refCrown);
  }, []);

  return (
    <div
      ref={refCrown}
      className="absolute top-[-4%] right-[30%] w-[42%] pointer-events-none z-[10] -rotate-10"
    >
      <img src="/images/creative_content/doodles/crown.svg" alt="Crown" />
    </div>
  );
};

export default Crown;
