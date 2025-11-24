import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";

function anim(elt, delay) {
  gsap.fromTo(
    elt,
    {
      xPercent: -100,
      rotate: -50,
      scale: 0.5,
      opacity: 0,
    },
    {
      opacity: 1,
      xPercent: 0,
      rotate: 0,
      scale: 1,
      ease: "elastic.out(1.3)",
      duration: 3,
      delay,
    }
  );
}

const WaterSplash2 = ({ className, delay = 4.7 }) => {
  const scope = useRef();
  const splash1 = useRef();
  const splash2 = useRef();
  const splash3 = useRef();

  useGSAP(() => {
    anim(splash1.current, delay);
    anim(splash2.current, delay + 0.2);
    anim(splash3.current, delay + 0.4);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page01_screen01",
        start: "top 80%", // start when 80% of viewport hits the element
        end: "bottom 20%", // end when bottom of element passes 20% of viewport
        toggleActions: "none none restart none",
      },
    });

    const delayBack = 2;

    tl.fromTo(
      splash1.current,
      { xPercent: -100, rotate: -50, scale: 0.5, opacity: 0 },
      {
        opacity: 1,
        xPercent: 0,
        rotate: 0,
        scale: 1,
        ease: "elastic.out(1.3)",
        duration: 3,
      },
      delayBack
    )
      .fromTo(
        splash2.current,
        { xPercent: -100, rotate: -50, scale: 0.5, opacity: 0 },
        {
          opacity: 1,
          xPercent: 0,
          rotate: 0,
          scale: 1,
          ease: "elastic.out(1.3)",
          duration: 3,
        },
        delayBack + 0.2
      )
      .fromTo(
        splash3.current,
        { xPercent: -100, rotate: -50, scale: 0.5, opacity: 0 },
        {
          opacity: 1,
          xPercent: 0,
          rotate: 0,
          scale: 1,
          ease: "elastic.out(1.3)",
          duration: 3,
        },
        delayBack + 0.4
      );
  });

  return (
    <div
      ref={scope}
      className={clsx(
        "aspect-square absolute [&_img]:absolute w-full",
        className
      )}
    >
      <img
        ref={splash1}
        src="/images/water/splash-stroke-half-1.svg"
        className="w-[47%] bottom-0 left-0 opacity-0"
      />
      <img
        ref={splash2}
        src="/images/water/splash-stroke-half-2.svg"
        className="w-[70%] bottom-[53%] left-[2%] opacity-0"
      />
      <img
        ref={splash3}
        src="/images/water/splash-stroke-half-3.svg"
        className="w-[55%] bottom-[68%] left-[45%] opacity-0"
      />
    </div>
  );
};

export default WaterSplash2;
