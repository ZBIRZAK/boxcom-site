"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Fleur1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/animations/ecran10/flower1.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setData)
      .catch((e) => console.error("flower1.json load error:", e));
  }, []);

  if (!data) return null;

  return (
    <div
      className="
        absolute left-[15%] bottom-0
        -translate-x-1/2 translate-y-[8%]
        w-[16%] rotate-[-6deg]
        pointer-events-none select-none z-[0]
      "
    >
      <Lottie animationData={data} loop autoplay />
    </div>
  );
}
