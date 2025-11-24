"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

export default function Oiseau() {
  const [data, setData] = useState(null);
  const lottieRef = useRef();

  useEffect(() => {
    fetch("/animations/ecran10/oiseau.json")
      .then((r) =>
        r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))
      )
      .then(setData)
      .catch((e) => console.error("oiseau.json load error:", e));
  }, []);

  useEffect(() => {
    lottieRef.current?.setSpeed(5);
    lottieRef.current?.play();
  }, [lottieRef.current]);

  if (!data) return null;

  return (
    <div
      className="
        absolute top-[12%] left-[24%]
        -translate-x-1/2 -translate-y-1/2
        w-[12%] -rotate-6
        pointer-events-none select-none z-[2]
      "
    >
      <Lottie animationData={data} lottieRef={lottieRef} loop autoplay />
    </div>
  );
}
