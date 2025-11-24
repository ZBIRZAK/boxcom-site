"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const duration = 0.1;

function animHalf1(elt) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

  tl.fromTo(
    elt,
    {
      scaleX: 1,
      xPercent: 0,
      rotate: 0,
    },
    {
      scaleX: 0.7,
      xPercent: 10,
      rotate: 0,
      duration,
      ease: "power1",
      transformOrigin: "80% 50%",
    }
  )
    .to(elt, {
      scaleX: 1.2,
      xPercent: -10,
      rotate: 10,
      duration: duration * 2,
      ease: "power1",
      transformOrigin: "80% 50%",
    })
    .to(elt, {
      scaleX: 1,
      xPercent: 0,
      rotate: 0,
      duration,
      ease: "power1",
      transformOrigin: "80% 50%",
    });
}

function animHalf2(elt) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

  tl.fromTo(
    elt,
    {
      scaleX: 1,
      xPercent: 0,
      rotate: 0,
    },
    {
      scaleX: 1.2,
      xPercent: 10,
      rotate: -10,
      duration,
      ease: "power1",
      transformOrigin: "20% 50%",
    }
  )
    .to(elt, {
      scaleX: 0.7,
      xPercent: -10,
      rotate: 0,
      duration: duration * 2,
      ease: "power1",
      transformOrigin: "20% 50%",
    })
    .to(elt, {
      scaleX: 1,
      xPercent: 0,
      rotate: 0,
      duration,
      ease: "power1",
      transformOrigin: "20% 50%",
    });
}

const Moustache = () => {
  const L = useRef();
  const R = useRef();

  useEffect(() => {
    animHalf1(L.current);
    animHalf2(R.current);
  }, []);

  return (
    <div className="absolute top-[27%] right-[35%] w-[25%] aspect-square pointer-events-none">
      <img
        ref={L}
        src="/images/creative_content/doodles/moustache-left.svg"
        className="absolute w-[52%] top-0 left-0"
      />
      <img
        ref={R}
        src="/images/creative_content/doodles/moustache-right.svg"
        className="absolute w-[52%] top-0 right-0"
      />
    </div>
  );
};
export default Moustache;
