"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Versvert() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/animations/ecran10/versvert.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setData)
      .catch((e) => console.error("versvert.json load error:", e));
  }, []);

  if (!data) return null;

  return (
    <div
      className="
        absolute top-[3%] right-[60%]
        translate-x-1/2 -translate-y-1/2
        w-[4.2%] rotate-[-36deg]
        pointer-events-none select-none
      "
    >
      <Lottie animationData={data} loop autoplay />
    </div>
  );
}
