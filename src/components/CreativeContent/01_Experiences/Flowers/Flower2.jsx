import gsap from "gsap";
import { useEffect, useRef } from "react";

function animFlower(refCont) {
  gsap.fromTo(
    refCont.current,
    {
      rotate: 35,
      scale: 1,
      yPercent: 5,
    },
    {
      rotate: 30,
      scale: 0.9,
      duration: 6,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    }
  );
}

const Flower2 = () => {
  const refCont = useRef();

  useEffect(() => {
    animFlower(refCont);
  }, []);

  return (
    <div ref={refCont} className="absolute w-[11%] bottom-0 right-[13%]">
      <img src="/images/orange_flower.svg" />
    </div>
  );
};

export default Flower2;
