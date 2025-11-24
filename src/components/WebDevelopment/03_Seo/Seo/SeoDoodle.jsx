'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SeoDoodle = () => {
  const seoRef = useRef(null);
  const stars1 = useRef(null);
  const stars2 = useRef(null);

  useEffect(() => {
    const seo = seoRef.current;
    const star1 = stars1.current;
    const star2 = stars2.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page04_screen03",
        start: "top 50%",
        end: "bottom bottom",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });

    // Étape 1: oscillation qui se calme
    tl.to(seo, {
      keyframes: [
        { rotation: 10, duration: 0.25, ease: "power1.inOut" },
        { rotation: -8, duration: 0.3, ease: "power1.inOut" },
        { rotation: 6, duration: 0.25, ease: "power1.inOut" },
        { rotation: -4, duration: 0.25, ease: "power1.inOut" },
        { rotation: 3, duration: 0.2, ease: "power1.inOut" },
        { rotation: -2, duration: 0.2, ease: "power1.inOut" },
        { rotation: 1, duration: 0.15, ease: "power1.inOut" },
        { rotation: -0.5, duration: 0.15, ease: "power1.inOut" },
        { rotation: 0, duration: 0.3, ease: "power2.out" },
      ],
    });

    // Étape 2: scintillement SEO + étoiles
    tl.set(seo, {filter: "brightness(1)"})
    tl.to(
      seo,
      {
        filter: "brightness(1.5)",
        duration: 0.5,
        yoyo: true,
        repeat:-13,
        ease: "power1.inOut",
      },
      "+=0.2"
    );


    tl.fromTo(
      star1,
      { opacity: 0, rotation: 50, scale: 0.8 },
      {
        opacity: 1,
        rotation: 90,
        scale: 1.2,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      },
      "<" 
    );

    tl.fromTo(
      star2,
      { opacity: 0, rotation: 90, scale: 0.8 },
      {
        opacity: 1,
        rotation: 50,
        scale: 1.2,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      },
      "<+0.2" // starts just after star1
    );
  }, []);

  return (
    <div
      ref={seoRef}
      className="absolute top-[22%] md:left-[-5%] w-[30%] h-auto pointer-events-none"
    >
      <img src="/images/texts/seo.svg" className="w-full h-full" alt="Seo" />

      {/* Stars stacked in same place */}
      <div
        ref={stars1}
        className="absolute -top-3 left-[30%] w-[40%] opacity-0 pointer-events-none"
      >
        <img src="/images/shapes/stars.svg" alt="Stars" />
      </div>

      <div
        ref={stars2}
        className="absolute -top-3 left-[30%] w-[40%] opacity-0 pointer-events-none"
      >
        <img src="/images/shapes/stars.svg" alt="Stars" />
      </div>
    </div>
  );
};

export default SeoDoodle;
