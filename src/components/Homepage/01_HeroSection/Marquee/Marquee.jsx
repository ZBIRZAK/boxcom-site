import React, { useRef } from "react";
import styles from "./Marquee.module.scss";
import gsap from "gsap";
import LetsTalkButton from "../LetsTalkButton";
import { useGSAP } from "@gsap/react";

const Marquee = ({ context, data }) => {
  const containerRef = useRef(null);
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
      delay: 4,
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
    <div className={styles.marqueeWrapper} ref={containerRef}>
      <LetsTalkButton context={context} data={data} />
    </div>
  );
};

export default Marquee;
