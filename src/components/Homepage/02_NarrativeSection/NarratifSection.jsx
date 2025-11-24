"use client";
import Lottie from "lottie-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import useNextScreenAboveCurrent from "../../../hooks/useNextScreenAboveCurrent";

const NarrativeSection = () => {
  const [donut, setDonut] = useState(null);
  const [livres, setLivres] = useState(null);
  const [globe, setGlobe] = useState(null);
  const [flower, setFlower] = useState(null);
  const [robot, setRobot] = useState(null);
  const [ampoule, setAmpoule] = useState(null);
  const [bulle, setBulle] = useState(null);
  const [logoBoxcom, setLogoBoxcom] = useState(null);

  const donutsRef = useRef(null);
  const livresRef = useRef(null);
  const globeRef = useRef(null);
  const flowerRef = useRef(null);
  const robotRef = useRef(null);
  const ampouleRef = useRef(null);
  const bulleRef = useRef(null);
  const logoBoxcomRef = useRef(null);

  useEffect(() => {
    Promise.all([
      fetch("/animations/ecran2/donuts.json").then((res) => res.json()),
      fetch("/animations/ecran2/livres.json").then((res) => res.json()),
      fetch("/animations/ecran2/globe_terre.json").then((res) => res.json()),
      fetch("/animations/ecran2/flower.json").then((res) => res.json()),
      fetch("/animations/ecran2/robot.json").then((res) => res.json()),
      fetch("/animations/ecran2/ampoule.json").then((res) => res.json()),
      fetch("/animations/ecran2/bulle.json").then((res) => res.json()),
      fetch("/animations/ecran2/logo_boxcom.json").then((res) => res.json()),
    ]).then(([donut, livres, globe, flower, robot, ampoule, bulle, logo]) => {
      setDonut(donut);
      setLivres(livres);
      setGlobe(globe);
      setFlower(flower);
      setRobot(robot);
      setAmpoule(ampoule);
      setBulle(bulle);
      setLogoBoxcom(logo);
    });
  }, []);

  useEffect(() => {
    if (
      !donut ||
      !livres ||
      !globe ||
      !flower ||
      !robot ||
      !ampoule ||
      !bulle ||
      !logoBoxcom
    )
      return;

    const tl = gsap.timeline();

    if (donutsRef.current) {
      tl.fromTo(
        donutsRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }

    if (livresRef.current && globeRef.current) {
      tl.fromTo(
        [livresRef.current, globeRef.current],
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.to([livresRef.current, globeRef.current], {
              y: -10,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
            });
          },
        },
        "+=1"
      );
    }

    if (flowerRef.current) {
      tl.fromTo(
        flowerRef.current,
        { opacity: 0, scale: 0.5, rotate: -5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(flowerRef.current, {
              rotate: 5,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        },
        "+=1"
      );
    }

    if (robotRef.current) {
      tl.fromTo(
        robotRef.current,
        { opacity: 0, rotateY: -15 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(robotRef.current, {
              rotateY: 15,
              duration: 1.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        },
        "+=1"
      );
    }

    if (ampouleRef.current) {
      tl.fromTo(
        ampouleRef.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(ampouleRef.current, {
              y: -10,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
            gsap.to(ampouleRef.current, {
              opacity: 0.3,
              duration: 0.5,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
            });
          },
        },
        "+=1"
      );
    }

    if (bulleRef.current) {
      tl.fromTo(
        bulleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
        },
        "+=1"
      );
    }

    if (logoBoxcomRef.current) {
      tl.fromTo(
        logoBoxcomRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "+=0.2"
      );
    }
  }, [donut, livres, globe, flower, robot, ampoule, bulle, logoBoxcom]);

  // Styles
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "100vh",
    zIndex: 10,
  };

  const leftStyle = {
    width: "50%",
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    objectPosition: "center 75%",
    display: "block",
  };

  const rightStyle = {
    width: "50%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem 2rem",
    textAlign: "left",
    lineHeight: "1.6",
    fontFamily: "Arial, sans-serif",
  };

  const contentBoxStyle = {
    maxWidth: "500px",
  };

  const titleStyle = {
    color: "#ff0078",
    fontWeight: "900",
    fontSize: "2.5rem",
    lineHeight: "1.1",
    textTransform: "uppercase",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    fontWeight: "400",
    marginBottom: "1rem",
  };

  const boldParagraphStyle = {
    ...paragraphStyle,
    fontWeight: "700",
    textTransform: "uppercase",
  };

  const donutStyle = {
    position: "absolute",
    bottom: "4%",
    left: "-4s%",
    width: "180px",
    height: "180px",
    pointerEvents: "none",
    zIndex: 3,
  };

  const livresStyle = {
    position: "absolute",
    bottom: "-8%",
    left: "40%",
    width: "290px",
    pointerEvents: "none",
    zIndex: 3,
  };

  const globeStyle = {
    position: "absolute",
    bottom: "6.5%",
    left: "42%",
    width: "290px",
    height: "290px",
    pointerEvents: "none",
    zIndex: 3,
  };

  const flowerStyle = {
    position: "absolute",
    bottom: "36%",
    left: "39%",
    width: "110px",
    pointerEvents: "none",
    zIndex: 3,
    transformOrigin: "bottom center",
  };

  const robotStyle = {
    position: "absolute",
    bottom: "12%",
    left: "30%",
    width: "120px",
    pointerEvents: "none",
    zIndex: 3,
    transformOrigin: "center",
  };

  const ampouleStyle = {
    position: "absolute",
    bottom: "65%",
    left: "45%",
    width: "160px",
    pointerEvents: "none",
    zIndex: 3,
    transformOrigin: "center",
  };

  const bulleStyle = {
    position: "absolute",
    top: "-2%",
    left: "42%",
    width: "150px",
    pointerEvents: "none",
    zIndex: 4,
  };

  const logoBoxcomStyle = {
    position: "absolute",
    top: "33%",
    left: "29%",
    width: "70px",
    pointerEvents: "none",
    zIndex: 5,
  };
  const buttonStyle = {
    marginTop: "2rem",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    backgroundColor: "#ff0078",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
  };

  const arrowStyle = { marginLeft: "0.5rem", fontSize: "1.2rem" };

  useNextScreenAboveCurrent("page01_screen02", "page01_screen03");

  return (
    <section id="page01_screen02" style={sectionStyle}>
      <div style={leftStyle}>
        <img
          src="/images/background2.jpg"
          alt="Deux femmes qui écrivent"
          style={imageStyle}
        />
        {donut && (
          <div ref={donutsRef} style={donutStyle}>
            <Lottie animationData={donut} loop autoplay />
          </div>
        )}
        {livres && (
          <div ref={livresRef} style={livresStyle}>
            <Lottie animationData={livres} loop autoplay />
          </div>
        )}
        {globe && (
          <div ref={globeRef} style={globeStyle}>
            <Lottie animationData={globe} loop autoplay />
          </div>
        )}
        {flower && (
          <div ref={flowerRef} style={flowerStyle}>
            <Lottie animationData={flower} loop autoplay />
          </div>
        )}
        {robot && (
          <div ref={robotRef} style={robotStyle}>
            <Lottie animationData={robot} loop autoplay />
          </div>
        )}
        {ampoule && (
          <div ref={ampouleRef} style={ampouleStyle}>
            <Lottie animationData={ampoule} loop autoplay />
          </div>
        )}
        {bulle && (
          <div ref={bulleRef} style={bulleStyle}>
            <Lottie animationData={bulle} loop autoplay />
            {logoBoxcom && (
              <div ref={logoBoxcomRef} style={logoBoxcomStyle}>
                <Lottie animationData={logoBoxcom} loop autoplay />
              </div>
            )}
          </div>
        )}
      </div>

      <div style={rightStyle}>
        <div style={contentBoxStyle}>
          <h1 style={titleStyle}>THE STORY BEHIND BOXCOM</h1>
          <p style={paragraphStyle}>
            In a city where old walls whisper stories and new ones rise with
            ambition, two women crossed paths.
            <br></br>
            Salwa mastered the art of strategy, launching global brands with
            precision.
            <br></br>
            Imane gave brands their voice, shaping narratives that moved the
            public.
            <br></br>
            Both had seen brilliance fall flat, when vision lacked clarity, when
            stories lacked structure.
            <br></br>
            So they sat down, over mint tea, and began something new.
          </p>
          <p style={boldParagraphStyle}>
            So, what happens when a strategist and a communications soul join
            forces around a single goal?
          </p>
          <button style={buttonStyle}>
            Find Out More <span style={arrowStyle}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
