"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const BlueFlower = () => {
  const ref = useRef(null);
  const faceRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const flower = ref.current;
    const face = faceRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
  
    if (!flower || !face || !leftEye) return;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen03",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
      delay: 5.5,
    });
  
    tl.set([flower, face, leftEye, rightEye], { opacity: 0 });
    tl.set(flower, { scale: 0.1, y: 100 });
  
    tl.to(flower, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  
    tl.to(face, { opacity: 1, duration: 0.5, ease: "power1.out" }, ">-0.3");
  
    tl.to([leftEye, rightEye], { opacity: 1, duration: 0.5, ease: "power1.out" }, ">-0.2");

    tl.to(flower, {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  
    // Blinking eyes
    const blinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 7 });

// Both eyes close together
blinkTL.to([leftEye, rightEye], { scaleY: 0.1, duration: 0.1, transformOrigin: "50% 50%" });

// Both eyes open together
blinkTL.to([leftEye, rightEye], { scaleY: 1, duration: 0.1, transformOrigin: "50% 50%" });

  });
  

  return (
    <div ref={ref} className="absolute opacity-0 bottom-[10%] md:left-[53%] left-[73%] md:w-[10%] w-[20%] z-3 rotate-50">
      <img src="/images/flowers/blue_flower_without_face.svg" alt="Flower" />
      <div ref={faceRef} className="absolute w-[30%] top-[48%] left-[42%] opacity-0">
        <img src="/images/flowers/blue_flower_face.svg" alt="Face" />
      </div>
      <div ref={leftEyeRef} className="absolute w-[35%] top-[43%] left-[37%] opacity-0 -rotate-30">
        <img src="/images/flowers/blue_flower_right_eye.svg" alt="Eyes" />
      </div>
      <div ref={rightEyeRef} className="absolute w-[35%] top-[46%] left-[37%] opacity-0 -rotate-30">
        <img src="/images/flowers/blue_flower_left_eye.svg" alt="Eyes" />
      </div>
    </div>
  );
};

export default BlueFlower;
