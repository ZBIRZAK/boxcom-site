import gsap from "gsap";
import { useEffect, useRef } from "react";

function animFlower(refCont) {
  gsap.fromTo(
    refCont.current,
    {
      rotate: -70,
      scale: 1,
      yPercent: 5,
      transformOrigin: "10% 100%",
    },
    {
      rotate: -30,
      scale: 0.9,
      duration: 8,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    }
  );
}

const Flower3 = () => {
  const refCont = useRef();

  useEffect(() => {
    animFlower(refCont);
  }, []);

  return (
    <div ref={refCont} className="absolute w-[7%] bottom-[15%] right-[38%]">
      <img src="/images/flowers/fleur.svg" />
    </div>
  );
};

export default Flower3;
