'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cube = () => {
  const imgRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(imgRef.current, {
  //     rotateY: 180,
  //     duration: 1.2,
  //     yoyo: true,
  //     repeat: -1,
  //     ease: "power1.inOut"
  //   });
  // }, []);

  return (
    <div className="absolute w-[17%] bottom-[1%] left-[7%]">
      <img ref={imgRef} src="/images/shapes/cube.svg" />
    </div>
  );
};

export default Cube;
