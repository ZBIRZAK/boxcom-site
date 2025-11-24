"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Phone = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (phoneRef.current) {
      const tl = gsap.timeline({ 
        delay: 1,
        scrollTrigger: {
            trigger: "#page05_screen03", 
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "restart none restart none",
          //   markers: true, 
        },
        repeat: -1 
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
    })
    tl.to(phoneRef.current, {
    rotate: 10,
    x: 20,
    duration: 0.5,
    yoyo: true,
    repeat: 3, 
    ease: "sine.inOut",
    });

    tl.to({}, { duration: 2 });
    }
  }, []);

  return (
    <div
      ref={phoneRef}
      className="absolute opacity-0 left-[5%] w-[15%] md:left-[-5%] md:w-[20%] top-[40%]"
    >
      <img src="/images/objects/phone.svg" alt="Phone" />
    </div>
  );
};

export default Phone;
