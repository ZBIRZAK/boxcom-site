"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function animWing(elt, orig) {
  gsap.fromTo(
    elt,
    {
      scaleX: 1,
      rotate: 0,
    },
    {
      rotate: -5,
      scaleX: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      duration: 0.2,
      transformOrigin: orig,
    }
  );
}

const Butterfly2 = ({ containerRef }) => {
  const L = useRef();
  const R = useRef();

  useEffect(() => {
    animWing(L.current, "95% 50%");
    animWing(R.current, "5% 50%");
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative top-1/2 left-1/2 w-[13%] aspect-square"
    >
      <div ref={L} className="absolute top-0 left-0 w-[50%]">
        <img
          src="/images/animals/butterfly/left-wing.svg"
          className="w-full drop-shadow-lg/70"
        />
      </div>

      <div ref={R} className="absolute top-0 right-0 w-[50%]">
        <img
          src="/images/animals/butterfly/right-wing.svg"
          className="w-full drop-shadow-lg/70"
        />
      </div>

      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[20%]">
        <img
          src="/images/animals/butterfly/body.svg"
          className="w-full drop-shadow-lg/70"
        />
      </div>
    </div>
  );
};

export default Butterfly2;
