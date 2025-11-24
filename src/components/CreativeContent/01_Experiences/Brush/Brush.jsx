import gsap from "gsap";
import { useEffect, useRef } from "react";

const Brush = () => {
  const refCont = useRef();

  useEffect(() => {
    // animBird(refCont, refGlasses2);
  }, []);

  return (
    <div ref={refCont} className="absolute w-[5%] top-[70%] left-[30%]">
      <img src="/images/brush.svg" />
    </div>
  );
};

export default Brush;
