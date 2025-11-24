"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { anton } from "../../../../app/font";

const BecauseYourBrand = ({
  text1,
  text2,
  text1Duration = 2,
  text1Delay = 3.5,
  text2Duration = 1,
  text2Delay = 5,
  context,
}) => {
  const refTxt1 = useRef(null);
  const refTxt2 = useRef(null);
  const { scr1Scr2ScrollOptions } = context;

  useEffect(() => {
    if (refTxt1.current) {
      gsap.set(refTxt1.current, { opacity: 0, marginTop: "25%", scale: 0.5 });

      gsap.to(refTxt1.current, {
        opacity: 1,
        marginTop: "12%",
        scale: 1,
        duration: text1Duration,
        delay: text1Delay,
        ease: "power2.out",
        onComplete: () => {
          // animation quand on va à l'écran 2
          gsap.to(refTxt1.current, {
            scrollTrigger: scr1Scr2ScrollOptions,
            opacity: 0,
            marginTop: "15%",
            scale: 3,
          });
        },
      });
    }
    if (refTxt2.current) {
      gsap.set(refTxt2.current, {
        opacity: 0,
        scaleX: 0.5,
        scaleY: 0.5,
        x: 0,
        color: "#ffffff",
        textShadow: "4px 0px 14px rgb(119, 119, 119)",
      });

      gsap.to(
        refTxt2.current,
        {
          opacity: 1,
          scaleX: 1.4,
          scaleY: 1.2,
          x: 30,
          duration: text2Duration,
          // color: "#ff0077",
          // textShadow: "0px 0px 20px #FF0077",
          ease: "power2.out",
          onComplete: () => {
            // animation quand on va à l'écran 2
            gsap.to(refTxt2.current, {
              scrollTrigger: {
                trigger: "#page01_screen02",
                start: "top 90%",
                end: "top 30%",
                scrub: 2,
                // toggleActions: "play none none reverse",
                toggleActions: "restart none none none",
                // toggleActions: onEnter onLeave onEnterBack onLeaveBack
                // scrub: 1,
              },
              opacity: 0,
              scaleX: 2,
              scaleY: 2,
              y: "+=200px",
              color: "#ffffff",
            });
          },
        },
        text2Delay
      );
    }
  }, []);

  return (
    <div className=" z-20  left-[20%] text-center border">
      <div
        className="absolute md:text-[2rem] text-1xl z-10 opacity-0 text-center md:top-[-10%] top-[10%] w-full "
        ref={refTxt1}
      >
        {text1}
      </div>
      <div
        className={`absolute md:right-[3%] w-[100%] text-center mt-[15%] md:top-0 top-[15%] md:text-[9rem] text-[3rem] z-19 ${anton.className} uppercase right-[7%] whitespace-nowrap opacity-0`}
        ref={refTxt2}
      >
        {text2}
      </div>
    </div>
  );
};

export default BecauseYourBrand;
