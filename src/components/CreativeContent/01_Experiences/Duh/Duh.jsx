import gsap from "gsap";
import { useEffect, useRef } from "react";

function animBird(refCont, refGlasses2) {
  gsap.fromTo(
    refCont.current,
    {
      rotate: 30,
      scale: 0.8,
      opacity: 0.2,
      yPercent: -300,
    },
    {
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

const Bird = () => {
  const refCont = useRef();

  useEffect(() => {
    // animBird(refCont, refGlasses2);
  }, []);

  return (
    <div
      ref={refCont}
      className="absolute w-[15%] bottom-[20%] left-[13%] -rotate-25"
    >
      <img src="/images/duh.svg" />
    </div>
  );
};

export default Bird;
