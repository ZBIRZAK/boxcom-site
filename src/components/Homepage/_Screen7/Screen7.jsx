"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Creature2 from "../../Doodles/Creature/Creature2";
import styles from "./Screen7.module.scss";

const Screen7 = () => {
  const creatureRef = useRef();
  const shadowRef = useRef();
  const sparkRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });

    tl.fromTo(
      creatureRef.current,
      { y: 200, scale: 0.8, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    )
      .to(shadowRef.current, { scale: 1, opacity: 0.4, duration: 0.8 }, "<")
      .to(creatureRef.current, { y: -10, duration: 0.2, ease: "power1.out" })
      .to(creatureRef.current, { y: 0, duration: 0.2, ease: "bounce.out" })
      .to(shadowRef.current, { scale: 0.6, opacity: 0.2, duration: 0.2 }, "<")
      .to(shadowRef.current, { scale: 1, opacity: 0.4, duration: 0.2 })
      .to(creatureRef.current, {
        x: -20,
        rotate: -10,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(creatureRef.current, {
        x: 20,
        rotate: 10,
        duration: 0.4,
        ease: "power2.inOut",
        repeat: 1,
        yoyo: true,
      })
      .to(creatureRef.current, {
        rotate: -5,
        duration: 0.2,
        ease: "power1.inOut",
      })
      .to(creatureRef.current, {
        y: 150,
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
        ease: "back.in(1.7)",
      })
      .to(shadowRef.current, {
        scale: 0.4,
        opacity: 0,
        duration: 0.6,
      }, "<");

    return () => tl.kill();
  }, []);

  // 🎮 Survol : réaction + spark
  const handleMouseEnter = () => {
    gsap.to(creatureRef.current, {
      rotate: 15,
      x: -10,
      duration: 0.3,
      ease: "power1.out",
    });

    // Spark animation ✨
    const spark = sparkRef.current;
    gsap.set(spark, { scale: 0, opacity: 1, rotate: 0, display: "block" });
    gsap.to(spark, {
      scale: 1.2,
      rotate: 360,
      duration: 0.4,
      ease: "back.out(2)",
      onComplete: () => {
        gsap.to(spark, {
          opacity: 0,
          duration: 0.3,
          delay: 0.1,
          onComplete: () => gsap.set(spark, { display: "none" }),
        });
      },
    });
  };

  const handleMouseLeave = () => {
    gsap.to(creatureRef.current, {
      rotate: 0,
      x: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <section id="page01_screen07" className={styles.screen7}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>STILL DOUBTING ?</h1>
          <h1>SEE FOR YOURSELF</h1>
        </div>

        <div
          ref={creatureRef}
          className={styles.creatureContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Creature2 />
        </div>

        <div className={styles.shadow} ref={shadowRef}></div>
        <div className={styles.spark} ref={sparkRef}>✨</div>
      </div>
    </section>
  );
};

export default Screen7;
