import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import Butterfly2 from "./Butterfly2";
import { useIsMobile } from "../../../../contexts/UserAgentProvider";

export default function Butterfly() {
  // const [butterfly, setButterfly] = useState(null);
  const isMobile = useIsMobile();
  const targetPos = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);
  const butterflyRef = useRef(null);

  // useEffect(() => {
  //   fetch("/animations/ecran1/papillon_rose.json")
  //     .then((res) => res.json())
  //     .then((data) => setButterfly(data));
  // }, []);

  useEffect(() => {
    if (isMobile) return;
    targetPos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    setPos({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      setPos((currentPos) => ({
        x: lerp(currentPos.x, targetPos.current.x, 0.1),
        y: lerp(currentPos.y, targetPos.current.y, 0.1),
      }));
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile]);

  useEffect(() => {
    if (butterflyRef.current) {
      gsap.fromTo(
        butterflyRef.current,
        { autoAlpha: 0, scale: 0.5 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.2,
          delay: 4,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={butterflyRef}
      className="block"
      style={{
        position: isMobile ? "absolute" : "fixed",
        left: isMobile ? "18%" : pos.x,
        top: isMobile ? "42%" : pos.y,
        transform: isMobile ? "none" : "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 21,
        width: isMobile ? "56px" : "80px",
        height: isMobile ? "56px" : "80px",
        opacity: 0,
      }}
    >
      <Butterfly2 className="w-[70%]" />
    </div>
  );
}
