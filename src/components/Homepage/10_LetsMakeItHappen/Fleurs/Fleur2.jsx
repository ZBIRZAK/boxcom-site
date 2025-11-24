"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Fleur2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/animations/ecran10/flower2.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setData)
      .catch((e) => console.error("flower2.json load error:", e));
  }, []);

  if (!data) return null;

  return (
    <div
      className="
        absolute
        bottom-0 left-[62%]
        translate-y-[12%]
        w-[16%]
        pointer-events-none select-none
        z-[2]
      "
    >
      <Lottie animationData={data} loop autoplay />
    </div>
  );
}
