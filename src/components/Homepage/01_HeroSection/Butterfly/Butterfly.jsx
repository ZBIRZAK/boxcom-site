import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import Butterfly2 from "./Butterfly2";

export default function Butterfly() {
  // const [butterfly, setButterfly] = useState(null);
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
    targetPos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    setPos({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
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
  }, []);

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
      className="md:block hidden"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 21,
        width: "80px",
        height: "80px",
        opacity: 0,
      }}
    >
      <Butterfly2 className="w-[70%]" />
    </div>
  );
}
