import gsap from "gsap";
import { useEffect, useRef } from "react";

function animFlower(refCont) {
  gsap.fromTo(
    refCont.current,
    {
      rotate: 0,
      scale: 1,
    },
    {
      rotate: -20,
      scale: 0.8,
      yPercent: 10,
      duration: 7,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    }
  );
}

const Flower1 = () => {
  const refCont = useRef();

  useEffect(() => {
    animFlower(refCont);
  }, []);

  return (
    <div ref={refCont} className="absolute w-[19%] -bottom-[5%] right-[37%]">
      <img src="/images/flowers/fleur1.svg" />
    </div>
  );
};

export default Flower1;
