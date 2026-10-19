"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const NarrativeDecorations = lazy(() => import("./NarrativeDecorations"));

export default function DeferredNarrativeDecorations() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const section = document.getElementById("page01_screen02");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio === 0) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { threshold: 0.01 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return shouldRender ? (
    <Suspense fallback={null}>
      <NarrativeDecorations />
    </Suspense>
  ) : null;
}
