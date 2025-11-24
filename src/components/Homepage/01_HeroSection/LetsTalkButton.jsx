"use client";

import Button2 from "../../Buttons/Button2";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { formatUrl, urls } from "../../../lib/urls";
import { useGSAP } from "@gsap/react";

const LetsTalkButton = ({ context, data }) => {
  const containerRef = useRef(null);
  const router = useRouter();
  // console.log(data);

  const { scr1Scr2ScrollOptions } = context;
  useGSAP(() => {
    gsap.set(containerRef.current, {
      opacity: 0,
      scale: 0.5,
    });
    gsap.to(containerRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      delay: 7,

      onComplete: () => {
        gsap.to(containerRef.current, {
          scrollTrigger: scr1Scr2ScrollOptions,
          opacity: 0,
          marginTop: "15%",
          scale: 3,
        });
      },
    });
  });

  return (
    <div ref={containerRef} className="py-2">
      <Button2
        end="emoji"
        size="lg"
        className="!text-4xl !px-12"
        customEmojiSize={35}
        onClick={() => {
          router.push( formatUrl(data.button_link));
        }}
      >
        {data.bouton_cta}
      </Button2>
    </div>
  );
};
export default LetsTalkButton;
