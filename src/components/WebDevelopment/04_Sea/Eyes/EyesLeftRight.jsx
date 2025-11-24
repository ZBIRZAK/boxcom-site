import gsap from "gsap";
import { useEffect, useRef } from "react";

const EyesLeftRight = () => {
  const refEye1 = useRef();
  const refEye2 = useRef();
  const repeatDelay = 1;
  const duration = 0.7;

  useEffect(() => {
    gsap.fromTo(
      refEye1.current,
      {
        xPercent: -38,
        yPercent: -10,
      },
      {
        xPercent: 0,
        yPercent: 0,
        duration,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay,
      }
    );
    gsap.fromTo(
      refEye2.current,
      {
        xPercent: -38,
        yPercent: -10,
      },
      {
        xPercent: 0,
        yPercent: 0,
        duration,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay,
      }
    );
  }, []);

  return (
    <div className="relative -rotate-15 translate-y-2">
      <img
        src="/images/facial_features/empty-eyes.svg"
        className="inline-block w-26 h-26"
      />
      <img
        ref={refEye1}
        src="/images/facial_features/left-eye.svg"
        className="absolute md:top-[40%] top-[43%] left-[11%] w-7"
      />
      <img
        ref={refEye2}
        src="/images/facial_features/right-eye.svg"
        className="absolute top-[53%] right-[9%] w-7 "
      />
    </div>
  );
};

export default EyesLeftRight;
