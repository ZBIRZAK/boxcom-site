"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useDoodle } from "../../../../hooks/useDoodle";
import Lottie from "lottie-react";

gsap.registerPlugin(MotionPathPlugin);

function makeCoords(nb, yStep, xStartOffset = 0) {
  const out = [];
  let x = xStartOffset,
    y = 0;
  for (let i = 0; i <= nb; i++) {
    out.push({ x: Math.round(x), y: Math.round(y) });
    const coef = i % 2 ? 1 : -1;

    const amplitude = 8 + i * (4 + Math.random() * 3);
    x = coef * amplitude;
    y -= yStep + Math.random() * 5;
  }
  return out;
}

const notesSrc = [
  "/images/notes/cledesol.svg",
  "/images/notes/croche-verte.svg",
  "/images/notes/croche-violette.svg",
  "/images/notes/doublecroche-jaune.svg",
];

const WhistlingEmoji = () => {
  const [emoji, emojiRef, containerRef] = useDoodle(
    "/animations/digital-marketing/whistling-emoji.json"
  );

  useEffect(() => {
    let spawn = () => {
      if (!containerRef.current) return;

      const noteEl = document.createElement("div");
      noteEl.style.position = "absolute";
      noteEl.style.bottom = "20%";
      noteEl.style.left = `${Math.random() * 15 - 5}%`;
      noteEl.style.width = "18%";
      noteEl.style.zIndex = 0;

      const img = document.createElement("img");
      img.src = notesSrc[Math.floor(Math.random() * notesSrc.length)];
      noteEl.appendChild(img);

      containerRef.current.appendChild(noteEl);

      const coords = makeCoords(
        15 + Math.floor(Math.random() * 6),
        35,
        Math.random() * 15 - 7
      );

      const tl = gsap.timeline({
        onComplete: () => {
          noteEl.remove();
        },
      });

      const randomDuration = 15 + Math.random() * 6;
      const randomCurviness = 1 + Math.random() * 1.5;

      tl.set(noteEl, { opacity: 0, scale: 0.5 })
        .to(noteEl, { opacity: 1, scale: 1, zIndex: 20, duration: 0.2 })
        .to(noteEl, {
          motionPath: {
            path: coords,
            curviness: randomCurviness,
            autoRotate: false,
          },
          duration: randomDuration,
          ease: "linear",
          opacity: 0,
        });
    };

    let intervalId = setInterval(spawn, 1800 + Math.random() * 600);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-[20%] bottom-[12%] md:left-[-7%] left-[7%] z-10"
    >
      {emoji && (
        <Lottie
          animationData={emoji}
          lottieRef={emojiRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};

export default WhistlingEmoji;
