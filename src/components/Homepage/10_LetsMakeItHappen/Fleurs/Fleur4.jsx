"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Fleur4() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/animations/ecran10/flower4.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setData)
      .catch((e) => console.error("flower4.json load error:", e));
  }, []);

  if (!data) return null;

  return (
    <div
      className="
        absolute bottom-1 left-[93%]
        -translate-x-1/2 translate-y-[11%]
        w-[13.5%] -rotate-6
        pointer-events-none select-none
        z-[2]
      "
    >
      <Lottie animationData={data} loop autoplay />
    </div>
  );
}
