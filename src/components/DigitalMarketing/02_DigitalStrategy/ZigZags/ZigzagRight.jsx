'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ZigzagRight = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      x: -2, y: 2, rotation: -1,
      yoyo: true, repeat: -1, duration: 0.08, ease: "none"
    });

    gsap.to(imgRef.current, {
      opacity: 0,
      yoyo: true, repeat: -1, duration: 3, ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="absolute w-[25%] top-[10%] left-[60%] rotate-[-22deg]">
      <img ref={imgRef} src="/images/shapes/zigzag.svg"/>
    </div>
  );
};

export default ZigzagRight;
