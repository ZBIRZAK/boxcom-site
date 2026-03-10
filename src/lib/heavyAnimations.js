"use client";

const HEAVY_LOTTIES = new Set([
  "/animations/ecran2/globe_terre.json",
  "/animations/ecran1/red-mushroom.json",
  "/animations/ecran10/versvert.json",
  "/animations/ecran1/small-pink-dude.json",
  "/animations/ecran10/versbleu.json",
  "/animations/ecran2/bulle.json",
  "/animations/ecran1/planete.json",
  "/animations/ecran1/little-heart.json",
  "/animations/ecran10/oiseau.json",
  "/animations/ecran1/papillon_rose.json",
  "/animations/ecran1/surfeuse.json",
]);

export function isHeavyLottie(path) {
  return HEAVY_LOTTIES.has(path);
}

export function shouldSkipHeavyLottie(path) {
  if (!isHeavyLottie(path)) return false;
  if (typeof window === "undefined") return false;

  // Default behavior: disable heavy Lottie files unless explicitly re-enabled.
  // Set NEXT_PUBLIC_DISABLE_HEAVY_LOTTIES=false to opt back in.
  const disableHeavyByDefault =
    process.env.NEXT_PUBLIC_DISABLE_HEAVY_LOTTIES !== "false";
  if (disableHeavyByDefault) return true;

  const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const lowCpu =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= 4;
  const lowMemory =
    typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;

  const connection = navigator.connection || navigator.mozConnection;
  const saveData = !!connection?.saveData;
  const effectiveType = connection?.effectiveType || "";
  const isSlowNetwork = /(^2g$|^slow-2g$|^3g$)/.test(effectiveType);

  return (
    isMobileViewport ||
    prefersReducedMotion ||
    lowCpu ||
    lowMemory ||
    saveData ||
    isSlowNetwork
  );
}
