"use client";
import { gsap } from "gsap";
import { useContext, useEffect, useRef } from "react";

const RingLight = ({ containerStyles, timeline, context }) => {
  const bgRef = useRef(null);
  const { scr1Scr2ScrollOptions } = context;

  useEffect(() => {
    // Init de l'élément
    gsap.set(bgRef.current, {
      opacity: 0,
      scale: 0.3,
      filter: "blur(100px)",
      bottom: -300,
    });

    // animation au démarrage
    gsap.to(bgRef.current, {
      opacity: 1,
      scale: 1,
      bottom: -100,
      duration: 2,
      filter: "blur(0px)",
      ease: "power2.out",
      onComplete: () => {
        // animation quand on va à l'écran 2
        gsap.to(bgRef.current, {
          scrollTrigger: scr1Scr2ScrollOptions,
          opacity: 0,
          scale: 0.3,
          bottom: -300,
          // duration: 3,
        });
      },
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className={containerStyles}
      style={{ textAlign: "center" }}
    >
      <img
        src="/images/white-ring-light.png"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default RingLight;
