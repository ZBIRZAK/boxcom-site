"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { anton } from "../../../../app/font";
import { useIsMobile } from "../../../../contexts/UserAgentProvider";

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
  const isMobile = useIsMobile();
  const { scr1Scr2ScrollOptions } = context;

  useEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline();
      tl.fromTo(
        refTxt1.current,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power2.out",
        }
      ).fromTo(
        refTxt2.current,
        { opacity: 0, y: 16, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(refTxt2.current, {
              y: -6,
              scale: 1.03,
              duration: 1.4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        },
        "-=0.45"
      );
      return;
    }

    if (refTxt1.current) {
      gsap.set(refTxt1.current, { opacity: 0, y: 80, scale: 0.5 });

      gsap.to(refTxt1.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: text1Duration,
        delay: text1Delay,
        ease: "power2.out",
        onComplete: () => {
          // animation quand on va à l'écran 2
          gsap.to(refTxt1.current, {
            scrollTrigger: scr1Scr2ScrollOptions,
            opacity: 0,
            y: 120,
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
        color: "#ffffff",
        textShadow: "4px 0px 14px rgb(119, 119, 119)",
      });

      gsap.to(
        refTxt2.current,
        {
          opacity: 1,
          scaleX: 1.08,
          scaleY: 1.04,
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
              scaleX: 1.5,
              scaleY: 1.5,
              y: "+=200px",
              color: "#ffffff",
            });
          },
        },
        text2Delay
      );
    }
  }, [isMobile]);

  return (
    <div className="z-20 left-[20%] text-center" style={{ display: "contents" }}>
      <div
        className={`absolute md:text-[2rem] text-1xl z-30 text-center md:top-[14.1%] top-[15.1%] w-full leading-[1.2] pt-1 md:pt-2 overflow-visible ${isMobile ? "opacity-100" : "opacity-0"}`}
        ref={refTxt1}
      >
        {text1}
      </div>
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-[92%] md:w-[96%] text-center md:top-[21.6%] top-[22.2%] md:text-[clamp(4.5rem,10vw,8rem)] text-[3rem] leading-[0.95] z-19 ${anton.className} uppercase whitespace-nowrap ${isMobile ? "opacity-100" : "opacity-0"}`}
        ref={refTxt2}
      >
        {text2}
      </div>
    </div>
  );
};

export default BecauseYourBrand;
