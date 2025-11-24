import gsap from "gsap";
import { useEffect, useRef } from "react";

const Up = () => {
  const upRef = useRef(null);

  useEffect(() => {
    if (!upRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      upRef.current,
      { scale: 0, y: 400, opacity: 0 },
      { 
        scale: 1, 
        y: 0, 
        opacity: 1,
        duration: .5,
        ease: "elastic.out"
      }
    )
    .to(upRef.current, {
      y: -15,
      duration: 0.4,
      ease: "sine.out",
      repeat: -1,
      yoyo: true
    });
  }, []);
  return (
    <div ref={upRef} className=" opacity-0 absolute w-[35%] left-[5%] top-[10%]">
      <img src="/images/texts/up.svg" />
    </div>
  );
};

export default Up;
