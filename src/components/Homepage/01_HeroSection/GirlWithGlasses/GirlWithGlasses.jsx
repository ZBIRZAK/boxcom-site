"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import PurpleStar from "../../../Doodles/PurpleStar/PurpleStar";
import BouncingCreature from "../BouncingCreature";
import { useIsMobile } from "../../../../contexts/UserAgentProvider";

const GirlWithGlasses = ({ context }) => {
  const refContainer = useRef(null);
  const [showDecor, setShowDecor] = useState(false);
  const isMobile = useIsMobile();
  const { scr1Scr2ScrollOptions } = context;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (!reduceMotion) {
      if (isMobile) {
        // Keep the LCP image paintable from the initial frame. Fading it from
        // opacity: 0 makes Lighthouse wait for the animation before recording
        // LCP, while the existing upward entrance motion gives the same feel.
        gsap.set(refContainer.current, { y: 40, opacity: 1 });
        gsap.to(refContainer.current, {
          y: 0,
          duration: 1.1,
          delay: 0.1,
          ease: "power2.out",
        });
      } else {
        // Desktop: keep original "fade-up" hero feel.
        gsap.set(refContainer.current, { y: 120, opacity: 0 });
        gsap.to(refContainer.current, {
          y: 0,
          opacity: 1,
          duration: 3,
          delay: 0.2,
          ease: "sine",
        });
      }
    } else {
      gsap.to(refContainer.current, {
        opacity: 1,
        y: 0,
      });
    }

    if (!isMobile) {
      // Keep LCP element visible immediately; only animate on scroll.
      gsap.to(refContainer.current, {
        scrollTrigger: scr1Scr2ScrollOptions,
        y: 300,
      });
    }
    }, refContainer);

    const timer = setTimeout(() => setShowDecor(!isMobile), isMobile ? 1400 : 200);
    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <div
      id="girl_with_glasses"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0 md:w-[60%] w-[100%] md:h-auto h-[70%] z-20 will-change-transform opacity-100 md:opacity-0"
      ref={refContainer}
    >
      <picture className="block w-full h-full">
        <source
          media="(max-width: 767px)"
          srcSet="/images/homepage/girl-with-glasses-800.avif"
          type="image/avif"
        />
        <img
          src="/images/homepage/girl-with-glasses-q68.webp"
          alt="Woman with glasses"
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover drop-shadow-[0_0_14px_rgb(76,76,76)]"
        />
      </picture>
      {showDecor && (
        <>
          <BouncingCreature delay={5} />
          <PurpleStar context={context} delay={6} />
        </>
      )}
    </div>
  );
};

export default GirlWithGlasses;
