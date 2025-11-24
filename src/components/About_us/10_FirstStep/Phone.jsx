"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ChatBubble from "./ChatBubble";

const Phone = () => {
  const phoneRef = useRef(null);
  const screenRef = useRef(null);

  useEffect(() => {
    if (phoneRef.current) {
      const tl = gsap.timeline({ 
        scrollTrigger: {
            trigger: "#page06_screen10", 
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "restart none restart none",
            // markers: true, 
        },
        // repeat: -1 ,
        // repeatDelay:5
    });

    tl.fromTo(phoneRef.current, {
        opacity: 0,
        scale: 0,
        y: 50,
        duration: 0.8,
        ease: "elastic.out",
    }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "elastic.out",
    });
    tl.to(screenRef.current, {
      filter: "brightness(3) drop-shadow(0 0 10px rgba(255,255,255,0.8))",
      duration: 0.2,
      ease: "power1.inOut",
    })
    .to(screenRef.current, {
      filter: "brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))",
      duration: 0.4,
      ease: "power1.inOut",
      repeat: -1,
      repeatDelay: 0.6,
      yoyo: true,
    });
    }
  }, []);

  return (
    <div
      ref={phoneRef}
      className="absolute opacity-0 left-[5%] w-[35%] md:left-[-45%] md:w-[25%] bottom-[15%]"
    >
      <img src="/images/objects/phone.svg" alt="Phone" />
      <div ref={screenRef} className="absolute w-[100%] top-[0%] right-[0%]">
        <img src="/images/objects/phone_screen.svg" alt="Phone" />
      </div>
      <ChatBubble/>
    </div>
  );
};

export default Phone;
