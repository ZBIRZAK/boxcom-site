"use client";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import styles from "./HeroSectionOld.module.scss";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSectionOld = ({ data }) => {
  const [personnage, setPersonnage] = useState(null);
  const [enveloppe, setEnveloppe] = useState(null);
  const [hello, setHello] = useState(null);
  const [note1, setNote1] = useState(null);
  const [note2, setNote2] = useState(null);
  const [note3, setNote3] = useState(null);
  const [note4, setNote4] = useState(null);
  const [pappillonRose, setPappillonRose] = useState(null);
  const [planete, setPlanete] = useState(null);
  const [waterSplashLeft, setWaterSplashLeft] = useState(null);
  const [waterSplashRight, setWaterSplashRight] = useState(null);
  const [blueFlower, setBlueFlower] = useState(null);
  const [surfeuse, setSurfeuse] = useState(null);

  const titleRef = useRef(null);
  const sloganRef = useRef(null);
  const personnageRef = useRef(null);
  const personnageLottieRef = useRef(null);
  const enveloppeRef = useRef(null);
  const helloRef = useRef(null);
  const helloLottieRef = useRef(null);
  const planeteRef = useRef(null);
  const pappillonRoseRef = useRef(null);
  const waterSplashLeftRef = useRef(null);
  const waterSplashLefLottietRef = useRef(null);
  const waterSplashRightRef = useRef(null);
  const waterSplashRightLottieRef = useRef(null);
  const noteArcsRef = useRef(null);
  const note1Ref = useRef(null);
  const note2Ref = useRef(null);
  const note3Ref = useRef(null);
  const note4Ref = useRef(null);
  const bgRef = useRef(null);
  const blueFlowerRef = useRef(null);
  const surfeuseRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    fetch("/animations/ecran1/personnage.json")
      .then((res) => res.json())
      .then((data) => setPersonnage(data));
    fetch("/animations/ecran1/enveloppe.json")
      .then((res) => res.json())
      .then((data) => setEnveloppe(data));
    fetch("/animations/ecran1/hello.json")
      .then((res) => res.json())
      .then((data) => setHello(data));
    fetch("/animations/ecran1/note_1.json")
      .then((res) => res.json())
      .then((data) => setNote1(data));
    fetch("/animations/ecran1/note_2.json")
      .then((res) => res.json())
      .then((data) => setNote2(data));
    fetch("/animations/ecran1/note_3.json")
      .then((res) => res.json())
      .then((data) => setNote3(data));
    fetch("/animations/ecran1/note_4.json")
      .then((res) => res.json())
      .then((data) => setNote4(data));
    fetch("/animations/ecran1/papillon_rose.json")
      .then((res) => res.json())
      .then((data) => setPappillonRose(data));
    fetch("/animations/ecran1/planete.json")
      .then((res) => res.json())
      .then((data) => setPlanete(data));
    fetch("/animations/ecran1/water_splash.json")
      .then((res) => res.json())
      .then((data) => setWaterSplashLeft(data));
    fetch("/animations/ecran1/water_splash.json")
      .then((res) => res.json())
      .then((data) => setWaterSplashRight(data));
    fetch("/animations/ecran1/blue_flower.json")
      .then((res) => res.json())
      .then((data) => setBlueFlower(data));
    fetch("/animations/ecran1/surfeuse.json")
      .then((res) => res.json())
      .then((data) => setSurfeuse(data));
  }, []);

  useEffect(() => {
    let hasPlayedHello = false;
    const animateIn = (element, animationProps) => {
      if (!element) return;
      gsap.fromTo(element, animationProps.from, animationProps.to);
    };
    const observerOptions = {
      threshold: 0.4,
    };
    const animatedElements = [
      {
        ref: titleRef,
        from: { opacity: 0, y: 100, scale: 0.5 },
        to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
      },
      {
        ref: sloganRef,
        from: { opacity: 0, scale: 0.5 },
        to: { opacity: 1, scale: 1.2, duration: 1, ease: "power2.out" },
      },
      {
        ref: personnageRef,
        from: { opacity: 0, y: 100 },
        to: {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          onStart: () => {
            if (personnageLottieRef.current) {
              personnageLottieRef.current.play();
            }
          },
        },
      },
      {
        ref: helloRef,
        from: { opacity: 0, scale: 0.5 },
        to: {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 3,
          ease: "power2.out",
          onStart: () => {
            if (helloLottieRef.current) {
              helloLottieRef.current.play();
            }
          },
        },
      },
      {
        ref: planeteRef,
        from: { opacity: 0, scale: 0.5 },
        to: {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 3,
          ease: "power2.out",
        },
      },
      {
        ref: waterSplashLeftRef,
        from: { opacity: 0, y: 100 },
        to: {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 3.5,
          ease: "power2.out",
          onStart: () => {
            if (waterSplashLefLottietRef.current) {
              waterSplashLefLottietRef.current.play();
            }
          },
        },
      },
      {
        ref: waterSplashRightRef,
        from: { opacity: 0, y: 100 },
        to: {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 3.5,
          ease: "power2.out",
          onStart: () => {
            if (waterSplashRightLottieRef.current) {
              waterSplashRightLottieRef.current.play();
            }
          },
        },
      },
    ];
    const animatedRefs = new Set(); // Track what has been animated

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = animatedElements.find(
          (el) => el.ref.current === entry.target
        );

        if (
          entry.isIntersecting &&
          element &&
          !animatedRefs.has(entry.target)
        ) {
          animateIn(entry.target, {
            from: element.from,
            to: element.to,
          });

          animatedRefs.add(entry.target); // Mark as animated
        }
      });
    }, observerOptions);
    animatedElements.forEach((el) => {
      if (el.ref.current) observer.observe(el.ref.current);
    });
    return () => observer.disconnect();
  }, [
    personnage,
    enveloppe,
    hello,
    planete,
    pappillonRose,
    waterSplashLeft,
    waterSplashRight,
  ]);
  useEffect(() => {
    if (pappillonRoseRef.current && pappillonRose) {
      gsap.fromTo(
        pappillonRoseRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 4,
          ease: "power2.out",
        }
      );
    }
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1.1,
          duration: 1.5,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        bgRef.current.querySelector("img"),
        { opacity: 0.6 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          delay: 1.5,
          ease: "power2.out",
        }
      );
      if (blueFlowerRef.current && blueFlower) {
        gsap.fromTo(
          blueFlowerRef.current,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 3,
            ease: "power2.out",
          }
        );
      }
      if (surfeuseRef.current && surfeuse) {
        gsap.fromTo(
          surfeuseRef.current,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 3.5,
            ease: "power2.out",
          }
        );
      }
    }
  }, [
    enveloppe,
    hello,
    planete,
    waterSplashLeft,
    waterSplashRight,
    pappillonRose,
    blueFlower,
    surfeuse,
  ]);

  useEffect(() => {
    if (!(note1 && note2 && note3 && note4)) return;

    if (
      noteArcsRef.current &&
      note1Ref.current &&
      note2Ref.current &&
      note3Ref.current &&
      note4Ref.current
    ) {
      gsap.fromTo(
        noteArcsRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 3,
          ease: "power2.out",
        }
      );
    }
    const container = noteArcsRef.current;
    if (!container) return;

    const leftNotes = container.querySelectorAll(".left-note");
    const rightNotes = container.querySelectorAll(".right-note");

    function animateArcNotes(time) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2 + 100;
      const radius = 460;

      leftNotes.forEach((note, index) => {
        const angle = Math.PI + (Math.sin(time / 1000 + index) * Math.PI) / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;
      });

      rightNotes.forEach((note, index) => {
        const angle = 0 + (Math.sin(time / 1000 + index) * Math.PI) / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;
      });

      requestAnimationFrame(animateArcNotes);
    }

    requestAnimationFrame(animateArcNotes);
  }, [note1, note2, note3, note4]);

  const Click = (element) => {
    console.log(`Clicked on ${element}`);
  };

  const Fly = () => {
    gsap.fromTo(
      pappillonRoseRef.current,
      { y: 0 },
      {
        scale: 1.2,
        y: -50,
        duration: 1,
        ease: "power2.out",
        repeat: -1,
        yoyo: true,
      }
    );
  };
  const RideTheWave = () => {
    gsap.fromTo(
      surfeuseRef.current,
      { x: 0, y: 0 },
      {
        scale: 1.2,
        x: 550,
        y: -50,
        duration: 2,
        ease: "power2.out",
      }
    );
  };

  // useEffect(() => {
  //     const section = document.querySelector(`.${styles.heroSection}`);
  //     const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: heroSectionRef.current,
  //           start: "top 0%",
  //           end: "bottom center",
  //           scrub: true,
  //         },
  //       });

  //       tl.from(titleRef.current, { opacity: 1, y: 0 })
  //         .from(sloganRef.current, { opacity: 1, y: 50 }, "<0.2")
  //         .to(personnageRef.current, { opacity: 1, y: 50 }, "<0.2")
  //         .from(bgRef.current, { scale: 0.5, opacity: 1 }, "<");
  //   }, []);
  return (
    <section ref={heroSectionRef} className={styles.heroSection}>
      <div ref={bgRef} className={styles.backgroundContainer}>
        <img src="/images/ring-light.png" alt="" />
      </div>
      <div className={styles.personnageContainer} ref={personnageRef}>
        {personnage && (
          <Lottie
            animationData={personnage}
            lottieRef={personnageLottieRef}
            loop={false}
            autoplay={false}
            onClick={() => Click("personnage")}
          />
        )}
      </div>
      <div
        ref={enveloppeRef}
        className={styles.enveloppeContainer}
        onClick={() => Click("enveloppe")}
      >
        {enveloppe && <Lottie animationData={enveloppe} loop autoplay />}
      </div>
      <div
        ref={helloRef}
        className={styles.helloContainer}
        onClick={() => Click("hello")}
      >
        {hello && (
          <Lottie
            animationData={hello}
            lottieRef={helloLottieRef}
            loop={false}
            autoplay={false}
          />
        )}
      </div>
      <div
        ref={planeteRef}
        className={styles.planeteContainer}
        onClick={() => Click("planete")}
      >
        {planete && (
          <Lottie animationData={planete} loop={false} autoplay={false} />
        )}
      </div>
      <div
        ref={pappillonRoseRef}
        className={styles.pappillonRoseContainer}
        onClick={() => Fly()}
      >
        {pappillonRose && (
          <Lottie animationData={pappillonRose} loop={false} autoplay={false} />
        )}
      </div>
      <div
        ref={blueFlowerRef}
        className={styles.blueFlowerContainer}
        onClick={() => Fly()}
      >
        {blueFlowerRef && (
          <Lottie animationData={blueFlower} loop={false} autoplay={false} />
        )}
      </div>
      <div
        ref={waterSplashRightRef}
        className={styles.waterSplashRightContainer}
      >
        {waterSplashRight && (
          <Lottie
            animationData={waterSplashRight}
            lottieRef={waterSplashRightLottieRef}
            loop={false}
            autoplay={false}
          />
        )}
      </div>

      <div ref={waterSplashLeftRef} className={styles.waterSplashLeftContainer}>
        {waterSplashLeft && (
          <Lottie
            animationData={waterSplashLeft}
            lottieRef={waterSplashLefLottietRef}
            loop={false}
            autoplay={false}
          />
        )}
      </div>
      <div
        ref={surfeuseRef}
        className={styles.surfeuseContainer}
        onClick={() => RideTheWave()}
      >
        {surfeuse && (
          <Lottie animationData={surfeuse} loop={false} autoplay={false} />
        )}
      </div>
      <div
        ref={noteArcsRef}
        className={styles.noteArcsContainer}
        onClick={() => Click("noteArcs")}
      >
        <div
          ref={note1Ref}
          className={`left-note ${styles.note1Container}`}
          onClick={() => Click("note1")}
        >
          {note1 && <Lottie animationData={note1} loop autoplay />}
        </div>
        <div
          ref={note2Ref}
          className={`right-note ${styles.note2Container}`}
          onClick={() => Click("note2")}
        >
          {note2 && <Lottie animationData={note2} loop autoplay />}
        </div>
        <div
          ref={note3Ref}
          className={`left-note ${styles.note3Container}`}
          onClick={() => Click("note3")}
        >
          {note3 && <Lottie animationData={note3} loop autoplay />}
        </div>
        <div
          ref={note4Ref}
          className={`right-note ${styles.note4Container}`}
          onClick={() => Click("note4")}
        >
          {note4 && <Lottie animationData={note4} loop autoplay />}
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2
          className={styles.title}
          ref={titleRef}
          onClick={() => Click("title")}
        >
          {data.title}
        </h2>
        <h1
          className={`${styles.slogan}`}
          ref={sloganRef}
          onClick={() => Click("slogan")}
        >
          {data.slogan}
        </h1>
      </div>
    </section>
  );
};
export default HeroSectionOld;
