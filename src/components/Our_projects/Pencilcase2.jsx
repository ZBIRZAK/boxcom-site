'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Pencilcase2 = ({ className }) => {
  const containerRef = useRef(null);
  const pencil1Ref = useRef(null);
  const pencil2Ref = useRef(null);
  const rulerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page08_screen3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      }
    });

    tl.fromTo(
      containerRef.current,
      { x: -100, scale: 0.8, opacity: 0 },
      { delay: 1, x: 0, scale: 1, opacity: 1, duration: 1, ease: "bounce.out" }
    );

    tl.add(() => {
      const dance = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      dance
        .to(pencil1Ref.current, {
          y: -15,
          rotation: -8,
          duration: 0.25,
          ease: "power1.out"
        })
        .to(pencil1Ref.current, {
          y: 0,
          rotation: 0,
          duration: 0.25
        })

        .to(pencil2Ref.current, {
          y: -18,
          rotation: 6,
          duration: 0.25,
          ease: "power1.out"
        }, "<+0.1") 
        .to(pencil2Ref.current, {
          y: 0,
          rotation: 0,
          duration: 0.25
        })

        .to(rulerRef.current, {
          y: -10,
          rotation: -5,
          duration: 0.25,
          ease: "power1.out"
        }, "<+0.1")
        .to(rulerRef.current, {
          y: 0,
          rotation: 0,
          duration: 0.25
        });
    });
  });

  return (
    <div ref={containerRef} className={`aspect-square absolute ${className}`}>
      <img src="/images/objects/pencilcase/pencil-case-bg.svg" className="absolute" />

      <img
        ref={rulerRef}
        src="/images/objects/pencilcase/ruler.svg"
        className="absolute h-[50%] top-[2%] left-[47%]"
      />

      <img
        ref={pencil1Ref}
        src="/images/objects/pencilcase/pencil-1.svg"
        className="absolute w-[35%] top-[20%] left-[40%]"
      />

      <img
        ref={pencil2Ref}
        src="/images/objects/pencilcase/pencil-2.svg"
        className="absolute w-[25%] left-[65%]"
      />

      <img src="/images/objects/pencilcase/pencil-case-fg.svg" className="absolute" />
    </div>
  );
};

export default Pencilcase2;
