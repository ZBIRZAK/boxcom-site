"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";

export default function Abeille() {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);
  const beeRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    fetch("/animations/ecran10/abeille.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setData)
      .catch((e) => console.error("Abeille.json load error:", e));
  }, []);

  useEffect(() => {
    const section = document.getElementById("page10_letsMakeItHappen");
    if (!section) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active || !data || !beeRef.current) return;

    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    gsap.set(beeRef.current, { x: "-15vw", y: 0, rotate: -6 });

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(beeRef.current, {
      x: "115vw",
      duration: 6,
      ease: "none",
    });

    const wobbleY = gsap.to(beeRef.current, {
      y: "+=5vh",
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    const roll = gsap.to(beeRef.current, {
      rotate: 6,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    tlRef.current = tl;

    return () => {
      tl.kill();
      wobbleY.kill();
      roll.kill();
    };
  }, [active, data]); 

  if (!data || !active) return null;

  return (
    <div
      ref={beeRef}
      className="
        absolute
        top-[16%] left-0
        w-[4vw]
        pointer-events-none select-none z-[-1]
        will-change-transform
      "
    >
      <Lottie animationData={data} loop autoplay />
    </div>
  );
}
