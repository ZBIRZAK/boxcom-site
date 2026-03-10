"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { shouldSkipHeavyLottie } from "../lib/heavyAnimations";

export function useDoodle(doodlePath, animOptions = {}) {
  const { from, to, delay } = animOptions;
  const [doodle, setDoodle] = useState(null);
  const containerRef = useRef(null);
  const doodleRef = useRef(null);

  useEffect(() => {
    if (shouldSkipHeavyLottie(doodlePath)) {
      setDoodle(null);
      return;
    }

    let cancelled = false;
    fetch(doodlePath)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setDoodle(data);
      });

    return () => {
      cancelled = true;
    };
  }, [doodlePath]);

  useEffect(() => {
    if (containerRef.current && doodle && from && to) {
      gsap.set(containerRef.current, from);
      gsap.to(containerRef.current, to, delay);
    }
  }, [doodle]);

  return [doodle, doodleRef, containerRef];
}
