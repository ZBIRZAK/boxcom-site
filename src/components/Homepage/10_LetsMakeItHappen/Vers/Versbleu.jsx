"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Versbleu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/animations/ecran10/versbleu.json")
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setData)
      .catch(e => console.error("versbleu.json load error:", e));
  }, []);

  if (!data) return null;

  return (
    <div
      className="
        absolute
        top-[9%] left-[35.2%]
        -translate-x-1/2 -translate-y-1/2
        w-[15%] rotate-[-36deg]
        pointer-events-none select-none
      "
    >
      <Lottie animationData={data} loop autoplay />
    </div>
  );
}
