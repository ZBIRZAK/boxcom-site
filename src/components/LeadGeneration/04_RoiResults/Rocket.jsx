"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Rocket = () => {
  const rocketRef = useRef(null);
  const smokeRef = useRef(null);

  useEffect(() => {
    if (!rocketRef.current || !smokeRef.current) return;

    // 🚀 Rocket timeline (independent)
    gsap.timeline({ repeat: -1, repeatDelay: 0 })
      .to(rocketRef.current, {
        y: -1000,
        duration: 5,
        ease: "power1.inOut",
      })
      .to(rocketRef.current, {
        y: 0,
        duration: 0, // reset instantly
      });

    // ☁️ Clouds timeline (independent)
    const clouds = smokeRef.current.querySelectorAll(".cloud");

    const smokeTl = gsap.timeline({ repeat: -1, repeatDelay: -0.5 });

    clouds.forEach((cloud, i) => {
      smokeTl
        .fromTo(
          cloud,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
          },
          i * 0.6
        )
        .to(
          cloud,
          {
            opacity: 0,
            scale: 1.3,
            duration: 0.5,
            ease: "power1.in",
          },
          i * 0.6 + 1
        );
    });

    return () => {
      gsap.killTweensOf(rocketRef.current);
      smokeTl.kill();
    };
  }, []);

  return (
    <div ref={rocketRef} className="absolute w-[15%] left-[5%] -bottom-50">
      {/* Smoke clouds */}
      <div
        ref={smokeRef}
        className="absolute w-[100%] h-[50%] bottom-[0%] left-[50%]"
      >
        <img
          src="/images/misc/rocket-smoke.svg"
          alt="Rocket smoke cloud"
          className="cloud absolute w-[50%] left-[-15%] bottom-[-10%]"
        />
        <img
          src="/images/misc/rocket-smoke.svg"
          alt="Rocket smoke cloud"
          className="cloud absolute w-[50%] left-[-60%] bottom-[-40%]"
        />
        <img
          src="/images/misc/rocket-smoke.svg"
          alt="Rocket smoke cloud"
          className="cloud absolute w-[40%] left-[20%] bottom-[-50%]"
        />
        <img
          src="/images/misc/rocket-smoke.svg"
          alt="Rocket smoke cloud"
          className="cloud absolute w-[40%] left-[-15%] bottom-[-70%]"
        />
      </div>

      {/* Rocket */}
      <img

        src="/images/misc/rocket-without-smoke.svg"
        className="relative w-full z-10"
      />
    </div>
  );
};

export default Rocket;
