"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Screwdriver = () => {
  const refSD = useRef();

  useEffect(() => {
    // gsap.
  }, []);

  // -rotate-80
  return (
    <>
      <div ref={refSD} className="absolute w-[6%] left-[10%] top-[70%]">
        <img src="/images/objects/screwdriver.svg" />
      </div>
      {/* 
      <div class="absolute top-10 left-10 w-64 h-64 bg-blue-500">
        <div
          class="absolute inset-0 bg-pink-500 
           [mask-image:url('/images/objects/screwdriver.svg')] 
           [mask-repeat:no-repeat] 
           [mask-position:center] 
           [mask-size:cover] 
           [webkit-mask-image:url('/images/objects/screwdriver.svg')] 
           [webkit-mask-repeat:no-repeat] 
           [webkit-mask-position:center] 
           [webkit-mask-size:cover]"
        ></div>
      </div> 

      <div class="absolute top-10 left-[40%] w-64 h-64">
        <img
          src="/images/objects/trophy.svg"
          alt="second svg"
          class="w-full h-full object-cover 
              [mask-image:url('/images/objects/screwdriver.svg')] 
              [mask-repeat:no-repeat] 
              [mask-position:center] 
              [mask-size:cover] 
              [webkit-mask-image:url('/images/objects/screwdriver.svg')] 
              [webkit-mask-repeat:no-repeat] 
              [webkit-mask-position:center] 
              [webkit-mask-size:cover]"
              />
      </div>
      */}
    </>
  );
};

export default Screwdriver;
