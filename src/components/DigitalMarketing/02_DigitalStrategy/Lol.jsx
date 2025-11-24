'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Lol = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: -30 },
      {
        y: 0,
        duration: 1,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true
      }
    );
  }, []);

  return (
    <div className="absolute w-[14%] right-[-0%] top-[7%]">
      <img ref={imgRef} src="/images/texts/lol.svg" className="w-full h-full" />
    </div>
  );
};

export default Lol;
