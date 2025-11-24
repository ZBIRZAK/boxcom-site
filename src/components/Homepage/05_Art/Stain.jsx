import gsap from "gsap";
import { useEffect, useRef } from "react";

const Stain = ({ style = {} }) => {
  const contRef = useRef();

  useEffect(() => {
    gsap.set(contRef.current, { opacity: 0.2, scale: 0.2 });

    gsap.to(contRef.current, {
      opacity: 1,
      scale: 1,
      ease: "elastic.out",
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <div
      ref={contRef}
      style={{
        position: "absolute",
        width: "3%",
        height: "auto",
        opacity: 0,
        ...style,
      }}
    >
      <img src="/images/tache.svg" />
    </div>
  );
};

export default Stain;
