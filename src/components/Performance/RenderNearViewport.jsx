"use client";

import { useEffect, useState } from "react";

export default function RenderNearViewport({ targetId, children, margin = "800px" }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: `${margin} 0px` }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [margin, targetId]);

  return shouldRender ? children : null;
}
