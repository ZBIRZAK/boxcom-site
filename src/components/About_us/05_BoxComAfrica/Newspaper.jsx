"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Newspaper = () => {
  const newsRef = useRef(null);
  const imageRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useGSAP(() => {
    const news = newsRef.current;
    const image = imageRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
    });

    tl.fromTo(
      news,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    tl.to(news, {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    const tlContent = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    tlContent.set([image, text1, text2], { opacity: 0 });
    tlContent.to(image, { opacity: 1, duration: 0.5 });
    tlContent.to(text1, { opacity: 1, duration: 0.5 }, ">0.5");
    tlContent.to(text2, { opacity: 1, duration: 0.5 }, ">0.5");
    tlContent.to([image, text1, text2], {
      opacity: 0,
      duration: 0.5,
      delay: 1,
    });
  });

  return (
    <div
      ref={newsRef}
      className="absolute w-[12%] -right-[75%] top-[90%] rotate-12"
    >
      <img src="/images/misc/newspaper-without-text.svg" />
      <div ref={imageRef} className="absolute w-[100%] top-[0%] opacity-0">
        <img src="/images/misc/newspaper-image.svg" />
      </div>
      <div ref={text1Ref} className="absolute w-[100%] top-[0%] opacity-0">
        <img src="/images/misc/newspaper-text1.svg" />
      </div>
      <div ref={text2Ref} className="absolute w-[100%] top-[0%] opacity-0">
        <img src="/images/misc/newspaper-text2.svg" />
      </div>
    </div>
  );
};

export default Newspaper;
