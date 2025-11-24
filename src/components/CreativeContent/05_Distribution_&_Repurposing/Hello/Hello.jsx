import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hello = () => {
  const helloRef = useRef(null);

  useEffect(() => {
    if (!helloRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      helloRef.current,
      { scale: 0, opacity: 0 },
      { 
        scale: 1,
        delay:5, 
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }
    )
    .to(helloRef.current, {
      y: -15,
      duration: 0.4,
      ease: "sine.out",
      repeat: -1,
      yoyo: true
    });
  }, []);
  return (
    <div ref={helloRef} className="absolute w-[27%] -rotate-30 right-[5%] top-[3%]">
      <img src="/images/texts/hello.svg" />
    </div>
  );
};

export default Hello;
