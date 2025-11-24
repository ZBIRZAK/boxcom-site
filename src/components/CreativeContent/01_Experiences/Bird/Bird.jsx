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
  const refWing = useRef();

  useEffect(() => {
    // animBird(refCont, refGlasses2);
    gsap.fromTo(
      refWing.current,
      {
        rotate: 0,
        yPercent: 0,
      },
      {
        rotate: 15,
        yPercent: 5,
        transformOrigin: "15% 45%",
        ease: "power1.inOut",
        duration: 0.2,
        yoyo: true,
        repeat: -1,
        // transformOrigin
      }
    );
  }, []);

  return (
    <div ref={refCont} className="absolute w-[23%] top-[30%] right-[13%]">
      <img src="/images/animals/bird-without-wing.svg" />
      <img
        ref={refWing}
        src="/images/animals/bird-wing.png"
        className="absolute top-[31%] left-[36%] w-[40%]"
      />
    </div>
  );
};

export default Bird;
