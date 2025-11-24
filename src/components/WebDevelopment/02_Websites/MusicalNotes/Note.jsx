"use client";

import clsx from "clsx";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

function makeCoords(nb, yStep) {
  const out = [];
  let x = 0,
    y = 0;
  let xOffsetAdd = 5;
  for (let i = 0; i <= nb; i++) {
    out.push({ x: Math.round(x), y: Math.round(y) });
    const coef = i % 2 ? 1 : -1;
    x = coef * (10 + Math.random() * xOffsetAdd);
    y -= yStep;
    xOffsetAdd += Math.random() * 5;
  }
  // console.log({ out });
  return out;
}

gsap.registerPlugin(MotionPathPlugin);

const Note = ({ className, src, repeatDelay = 3 }) => {
  const imgRef=useRef();

  useEffect(()=>{
    const img=imgRef.current;
    const tl=gsap.timeline({delay:5.2,repeat:-1, repeatDelay})
    tl.fromTo(img,{
      opacity:0,
      scale:0.5,
    },{
      opacity:1,
      scale:1,
      duration:1,
      ease:"power1.in",
    });
    tl.to(img,{
      motionPath:{
        path: [
          { x: 0, y: 0 },
          { x: -40, y: -60 },
          { x: 40, y: -120 },
          { x: -35, y: -180 },
          { x: 30, y: -240 },
          { x: -50, y: -300 },
          { x: 35, y: -360 },
          { x: -40, y: -420 },
          { x: 45, y: -480 },
          { x: -25, y: -540 },
          { x: 15, y: -600 },
        ]
        
      },
      opacity:0,
      duration:9,
      ease:"sine.out"
    })
  },[]);


  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={imgRef}
        className={clsx("absolute pointer-events-none", className)}
      >
        <img src={src} />
      </div>
    </div>
  );
};
export default Note;
