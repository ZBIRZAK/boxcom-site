import gsap from "gsap";
import { useEffect, useRef } from "react";

function generatePath(nbPoints = 10, xStep = 10, yRange = [-20, 0]) {
  const path = [];
  for (let i = 0; i < nbPoints; i++) {
    const y = i % 2 == 0 ? yRange[0] : yRange[1];
    path.push({ x: (i + 1) * xStep, y });
  }
  return path;
}

const Bee = () => {
  const beeRef = useRef(null);

  useEffect(() => {
    if (!beeRef.current) return;

    gsap.set(beeRef.current, { x: 0, y: 0, rotation: 0 });
    gsap.to(beeRef.current, {
      rotation: 10,
      duration: 10,
      ease: "none",
      motionPath: {
        path: generatePath(8, 70, [-20, 20]),
        autoRotate: true,
      },
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  }, []);
  return (
    <div ref={beeRef} className="absolute w-[7%] left-[-5%] bottom-[20%] z-2">
      <img src="/images/animals/bee.svg" />
    </div>
  );
};

export default Bee;
