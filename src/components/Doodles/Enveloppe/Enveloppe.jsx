"use client";

import gsap from "gsap";
import { useDoodle } from "../../../hooks/useDoodle";
import Lottie from "lottie-react";
import { useEffect } from "react";

function makeCoords(nb, yStep) {
  const out = [];
  let x = 0,
    y = 0;
  let xOffsetAdd = 5;
  for (let i = 0; i <= nb; i++) {
    out.push({ x: Math.round(x), y: Math.round(y) });
    const coef = i % 2 ? 1 : -1;
    x = coef * (10 + Math.random() * xOffsetAdd);
    y -= yStep;
    xOffsetAdd += Math.random() * 5;
  }
  // console.log({ out });
  return out;
}

const Enveloppe = ({ containerStyles, delay = 0 }) => {
  const coords = makeCoords(20, 40);
  const lastY = coords[coords.length - 1].y;

  function animEnveloppe(element, delay) {
    gsap.fromTo(
      element,
      {
        scale: 1,
      },
      {
        scale: 1.5,
        motionPath: {
          path: coords,
        },
        duration: 10,
        ease: "power1.out",
        delay,
        // yoyo: true,
        // repeat: -1,

        onUpdate: function () {
          const p = this.progress();
          if (p >= 0.05 && !this.callA) {
            // console.log("OK OPACITY = 1");
            element.style.opacity = 1;
            this.callA = true;
          }
        },
        onComplete: () => {
          // L'enveloppe tombe
          gsap.to(element, {
            scale: 1.5,
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: 0, y: -1 * lastY },
              ],
            },
            duration: 10,
            ease: "power2.in",
            onComplete: () => {
              animEnveloppe(element);
            },
          });
        },
      }
    );
  }

  const [enveloppe, enveloppeRef, containerRef] = useDoodle(
    "/animations/ecran1/enveloppe-static.json"
    // {
    //   from: { scale: 1 },
    //   to: {
    //     scale: 1.5,
    //     motionPath: {
    //       path: coords,
    //     },
    //     duration: 10,
    //     ease: "power2.out",
    //     // yoyo: true,
    //     // repeat: -1,

    //     onUpdate: function () {
    //       const p = this.progress();
    //       if (p >= 0.05 && !this.callA) {
    //         console.log("OK OPACITY = 1");
    //         if (containerRef.current) {
    //           containerRef.current.style.opacity = 1;
    //         }
    //         this.callA = true;
    //       }
    //     },
    //     onComplete: () => {
    //       // L'enveloppe tombe
    //       gsap.to(containerRef.current, {
    //         scale: 1.5,
    //         motionPath: {
    //           path: [
    //             { x: 0, y: 0 },
    //             { x: 0, y: -1 * lastY },
    //           ],
    //         },
    //         duration: 10,
    //         ease: "power2.in",
    //       });
    //     },
    //   },
    //   delay,
    // }
  );

  useEffect(() => {
    if (containerRef.current) {
      animEnveloppe(containerRef.current, delay);
    }
  }, [containerRef]);

  // gsap.to(
  //   enveloppeRef,
  //   {
  //     motionPath: {
  //       path: [
  //         {x: 0, y: 0},
  //         {x: -20, y: 20},
  //         {x: 20, y: 40},
  //       ]
  //     }
  //   }
  // )

  return (
    <div
      ref={containerRef}
      className="absolute z-5 md:w-[5%] w-[20%] bottom-[15%] right-[15%] opacity-0"
    >
      {enveloppe && (
        <Lottie
          animationData={enveloppe}
          lottieRef={enveloppeRef}
          loop={true}
          autoplay={true}
        />
      )}
    </div>
  );
};

export default Enveloppe;
