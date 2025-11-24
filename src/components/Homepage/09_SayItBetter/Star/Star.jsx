'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Star.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function FallingStars({
  starCount = 25,
  types = 8, 
  enterStart = 'top 80%',
  repeat = -1,
}) {
  const layerRef = useRef(null);
  const starsRef = useRef([]);
  const triggerRef = useRef(null);

  useEffect(() => {
    const container = layerRef.current;
    if (!container) return;

    const createStars = () => {
      const stars = [];
      for (let i = 0; i < starCount; i++) {
        const el = document.createElement('div');
        el.className = `${styles.star} ${styles[`star${i % types}`]}`;
        el.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        `;

        const startX = Math.random() * container.offsetWidth;
        const startY = -50;
        const endY = container.offsetHeight + 100;

        gsap.set(el, {
          position: 'absolute',
          left: startX,
          top: startY,
          zIndex: i % 3 === 0 ? 1 : i % 3 === 1 ? 5 : 2,
          pointerEvents: 'none',
        });

        container.appendChild(el);

        const star = {
          element: el,
          startX,
          endY,
          delay: Math.random() * 3,
          duration: 4 + Math.random() * 6,
          rotation: Math.random() * 720,
          drift: (Math.random() - 0.5) * 300,
        };
        stars.push(star);
        starsRef.current.push(el);
      }
      return stars;
    };

    const animateStars = (stars) => {
      stars.forEach((star, index) => {
        gsap.fromTo(
          star.element,
          { y: -50, x: star.startX, rotation: 0, opacity: 0, scale: 0.3 },
          {
            y: star.endY,
            x: star.startX + star.drift,
            rotation: star.rotation,
            opacity: 1,
            scale: 1,
            duration: star.duration,
            delay: star.delay,
            ease: 'none',
            repeat,
            repeatDelay: Math.random() * 4,
            onRepeat: () => {
              gsap.set(star.element, {
                x: Math.random() * container.offsetWidth,
                rotation: Math.random() * 720,
              });
            },
          }
        );

        if (index % 3 === 0) {
          gsap.to(star.element, {
            opacity: 0.3,
            duration: 0.5 + Math.random() * 1,
            repeat,
            yoyo: true,
            ease: 'power2.inOut',
            delay: Math.random() * 2,
          });
        }
      });
    };

    const mount = () => {
      const stars = createStars();
      animateStars(stars);
    };

    const unmount = () => {
      starsRef.current.forEach((el) => el?.parentNode?.removeChild(el));
      starsRef.current = [];
      gsap.killTweensOf(container.querySelectorAll(`.${styles.star}`));
    };

    triggerRef.current = ScrollTrigger.create({
      trigger: container,
      start: enterStart,
      onEnter: mount,
      onLeave: unmount,
      onEnterBack: mount,
      onLeaveBack: unmount,
    });

    // cleanup
    return () => {
      unmount();
      triggerRef.current?.kill();
    };
  }, [starCount, types, enterStart, repeat]);

  // IMPORTANT : parent section doit être position:relative (c’est ton cas)
  return <div className={styles.starsLayer} ref={layerRef} aria-hidden="true" />;
}
