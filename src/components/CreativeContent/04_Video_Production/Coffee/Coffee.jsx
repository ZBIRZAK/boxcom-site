import { useEffect, useRef } from "react";
import gsap from "gsap";

const Coffee = () => {
  const coffeeRef = useRef(null);

  useEffect(() => {
    if (!coffeeRef.current) return;

    const el = coffeeRef.current;

    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      el,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "bounce.out",
      }
    );

    tl.to(el, {
      x: 5,
      rotation: 3,
      duration: 0.4,
      yoyo: true,
      repeat: 3,
      ease: "sine.inOut",
    });

    tl.to(el, { duration: 0.5 });
  }, []);

  return (
    <div
      ref={coffeeRef}
      className="absolute w-[35%] -bottom-[1%] -left-[2%] -rotate-25 md:w-[25%] md:-bottom-[1%] md:-left-[5%]"
    >
      <img src="/images/misc/soda.svg" alt="Soda" />
    </div>
  );
};

export default Coffee;
