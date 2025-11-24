"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Bird() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/animations/ecran10/oiseau.json")
      .then((r) =>
        r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))
      )
      .then(setData)
      .catch((e) => console.error("oiseau.json load error:", e));
  }, []);

  if (!data) return null;

  return (
    <div className="absolute top-[-49%] md:top-[-33%] left-[7%] md:left-[15%] w-[35%] md:w-[22%]">
      <Lottie animationData={data} loop autoplay />
    </div>
  );
}
