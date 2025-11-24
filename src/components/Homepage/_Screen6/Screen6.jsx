"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Rocket from "../../Doodles/Rocket/Rocket";
import styles from "./Screen6.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomepageProvider from "../HomepageProvider";
import useNextScreenAboveCurrent from "../../../hooks/useNextScreenAboveCurrent";
import Button3D from "../../_3DButtons/Button3D";

gsap.registerPlugin(ScrollTrigger);

const Screen6 = () => {
  const organicButtonRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);
  const listRefs = useRef([]);

  const context = {
    scr5Scr2ScrollOptions: {
      trigger: "#page01_screen06",
      start: "top 20%",
      end: "top 10%",
      // scrub:1,
      // markers: true,
      // toggleActions: "restart none none none",
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        duration: 3,
        scrub: 3,
        ease: "power3.out",
      });
      gsap.from(paragraphRefs.current, {
        scrollTrigger: {
          trigger: paragraphRefs.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 30,
        duration: 3,
        ease: "power2.out",
        stagger: 0.5,
        scrub: 3,
        ease: "power3.out",
      });
      gsap.from(listRefs.current, {
        scrollTrigger: {
          trigger: listRefs.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 30,
        duration: 3,
        ease: "power2.out",
        stagger: 1,
        scrub: 3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useNextScreenAboveCurrent("page01_screen06", "page01_screen07");

  return (
    <section id="page01_screen06" className={styles.screen6} ref={sectionRef}>
      <div className={styles.columnsWrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.leftContent}>
            <h2 ref={headingRef}>
              <span>WHEN YOUR STORY</span>
              <br />
              <strong>OUTGROWS BORDERS</strong>
            </h2>
            <div className={styles.screen6ImageWrapper}>
              <img src="/images/ecran6.png" alt="Carte avec fusée" />
              <Rocket
                context={context}
                containerStyles={styles.rocketContainer}
              />
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <p ref={(el) => (paragraphRefs.current[0] = el)}>
            You've built something powerful. And now, you're ready to take it
            further — to be seen, heard, and felt across new markets.
          </p>

          <p ref={(el) => (paragraphRefs.current[1] = el)}>
            We know the feeling. And we're already one step ahead.
          </p>

          <p ref={(el) => (paragraphRefs.current[2] = el)}>
            Expansion is more than going global — it's about staying true to
            your voice while adapting it to new worlds.
          </p>

          <ul>
            <li ref={(el) => (listRefs.current[0] = el)}>
              <strong>Morocco & North Africa</strong> – We're rooted in the
              region, with deep insight into the African media landscape,
              business ecosystems, and audience behaviors. Ideal for brands
              seeking brand expansion in Morocco or North African visibility.
            </li>

            <li ref={(el) => (listRefs.current[1] = el)}>
              <strong>GCC & Middle East</strong> – We support regional growth
              through tailored PR strategies for the Middle East, helping brands
              navigate culturally rich and fast-paced markets like the UAE, KSA,
              and Qatar.
            </li>

            <li ref={(el) => (listRefs.current[2] = el)}>
              <strong>Africa & Emerging Markets</strong> – For brands entering
              high-growth zones, we design custom public relations strategies in
              emerging markets, helping you build relevance from day one.
            </li>

            <li ref={(el) => (listRefs.current[3] = el)}>
              <strong>Global Reach</strong> – Through our international network
              of media, influencers, and creative partners, we extend your reach
              while staying aligned with your core narrative.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomCta}>
        <div className={styles.bottomBanner}>
          WHEREVER YOUR BRAND WANTS TO GROW, BOXCOM PAVES THE WAY.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "-60%",
            right: "45%",
            "--btn-bg":
              "linear-gradient(135deg, rgba(248, 129, 18, 0.83), rgba(248, 99, 18, 0.83))",
            "--btn-color": "#000",
            "--btn-shadow": "0 5px 15px rgba(241, 205, 137, 0.5, 0.5)",
            "--btn-hover-shadow": "0 8px 30px rgba(235, 235, 235, 0.63)",
            "--btn-active-shadow": "0 4px 12px rgba(247, 226, 199, 0.4)",
          }}
        >
          {/* <Button3D>Find Out More</Button3D> */}
        </div>
      </div>
    </section>
  );
};

export default Screen6;
