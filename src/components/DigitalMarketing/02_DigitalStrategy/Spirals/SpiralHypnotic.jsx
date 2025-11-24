'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SpiralHypnotic = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1, 
      ease: "linear" 
    });
  }, []);

  return (
    <div className="absolute w-[55%] md:w-[50%] top-[35%] left-[28%] md:left-[30%]">
      <img ref={imgRef} src="/images/shapes/hypnotic-spiral.svg" />
    </div>
  );
};

export default SpiralHypnotic;
