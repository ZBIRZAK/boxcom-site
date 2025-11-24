"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Magnet = ({ ref }) => {
  const magnetRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });
    tl.fromTo(
      magnetRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    );
    tl.add(() => {
      const vibrateTL = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      vibrateTL
        .to(magnetRef.current, {
          rotate: -5,
          duration: 0.05,
          yoyo: true,
          repeat: 5,
          ease: "sine.inOut",
        })
        .to(magnetRef.current, {
          rotate: 5,
          duration: 0.05,
          yoyo: true,
          repeat: 5,
          ease: "sine.inOut",
        });
    });
  });
  return (
    <div ref={magnetRef} className="absolute w-[10%] -left-[12%] top-[42%]">
      <img src="/images/objects/magnet.svg" />
    </div>
  );
};

export default Magnet;
