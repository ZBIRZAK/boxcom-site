
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Yes = () => {
  const yRef = useRef(null);
  const eRef = useRef(null);
  const sRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: "#page05_screen03", 
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      //   markers: true, 
    },
      repeat: -1, 
      repeatDelay: 0 
    });

    tl.from([yRef.current, eRef.current, sRef.current], {
      opacity: 0,
      scale: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.4, 
      ease: "elastic.out",
    });

    
    tl.to([yRef.current, eRef.current, sRef.current], {
      y: "+=15",
      duration: 2.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
    });

    
    tl.to({}, { duration: 2 }); 
  }, []);

  return (
    <div className="absolute w-[25%] h-[20%] md:w-[30%] top-[18%] md:top-[8%] md:left-[-5%] left-[5%] rotate-7">
      <div
        ref={eRef}
        className="absolute w-[25%] md:w-[43%] top-[18%] md:top-[20%] right-[35%]"
      >
        <img src="/images/texts/yes-pink-e.svg" className="h-full w-full" />
      </div>
      <div
        ref={yRef}
        className="absolute w-[25%] md:w-[43%] top-[18%] md:top-[8%] right-[62%]"
      >
        <img src="/images/texts/yes-pink-y.svg" className="h-full w-full" />
      </div>
      <div
        ref={sRef}
        className="absolute w-[25%] md:w-[43%] top-[18%] md:top-[18%] right-[2%]"
      >
        <img src="/images/texts/yes-pink-s.svg" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Yes;
