import gsap from "gsap";
import { useEffect, useRef } from "react";

function animGlassesFall(refCont, refGlasses2) {
  gsap.fromTo(
    refCont.current,
    {
      rotate: 30,
      scale: 0.8,
      opacity: 0,
      yPercent: -300,
    },
    {
      delay: 1,
      rotate: -12,
      scale: 1,
      opacity: 1,
      xPercent: -5,
      yPercent: 20,
      duration: 1,
      ease: "bounce",
      onComplete: () => {
        gsap.fromTo(
          refGlasses2.current,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 1,
            ease: "elastic.out",
          }
        );
      },
    }
  );
}

const Glasses = () => {
  const refCont = useRef();
  const refGlasses2 = useRef();

  useEffect(() => {
    animGlassesFall(refCont, refGlasses2);
  }, []);

  return (
    <div
      ref={refCont}
      className=" opacity-0 absolute w-[28%] top-[20%] left-[30%] -rotate-12"
    >
      <img src="/images/lunettes.svg" />
      <img
        ref={refGlasses2}
        src="/images/lunettes2.svg"
        className="absolute top-0 left-0 opacity-0"
      />
    </div>
  );
};

export default Glasses;
