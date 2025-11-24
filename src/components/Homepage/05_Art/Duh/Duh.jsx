"use client";

import gsap from "gsap";
import styles from "./Duh.module.scss";
import { useEffect, useRef } from "react";
// import { MotionPathHelper } from "gsap/MotionPathHelper";

// gsap.registerPlugin(MotionPathHelper);

const Duh = () => {
  const pencilRef = useRef(null);

  useEffect(() => {
    gsap.set(pencilRef.current, {
      x: 0,
      y: 0,
      transformOrigin: "center center",
    });

    gsap.to(pencilRef.current, {
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      // motionPath: {
      //   path: "#pencilPath",
      //   align: "#pencilPath",
      //   autoRotate: 90,
      // },
      onUpdate: function () {
        const p = this.progress();
        if (p >= 0.2 && !this.callA) {
          const path = document.querySelector("#pathMask > path");
          if (!path) return;
          path.classList.add(styles.path);
          this.callA = true;
          this.callB = false;
        }
        if (p >= 0.5 && !this.callB) {
          const path = document.querySelector("#pathMask > path");
          if (!path) return;
          path.classList.remove(styles.path);
          this.callB = true;
          this.callA = false;
        }
      },
      motionPath: {
        // TEST 3
        // path: "M-39,19.999 C20.488,-45.584 194.225,-27.771 234,12 280.886,103.886 100.936,118.713 95.912,165.424 92.557,196.609 229.083,239.168 161,298 97.021,353.284 86.465,327.946 35.217,277.802 -15.126,228.542 25.028,268.062 -32.101,212.428 -79.864,133.975 -94.494,113.515 -39,19.999 ",
        // autoRotate: true,

        // TEST 2
        path: [
          { x: 0, y: 0 },
          { x: 70, y: -5 },
          { x: 150, y: -40 },
          // { x: 150, y: 150 },
          { x: 0, y: 0 },
        ],
        // curviness: 1.5,
        // autoRotate: true,

        // TEST 1
        // alignOrigin: [0.5, 0.5],
        // },
        // scrollTrigger: scr5Scr2ScrollOptions,
        // onComplete:()=>{
        //   gsap.to(rocketRef.current, {
        //     scrollTrigger: scr5Scr2ScrollOptions,
        //     opacity: 0,
        //     scale: 0.5,
        //     ease: "power2.out",
        //   });
      },
    });

    // MotionPathHelper.create(pencilRef.current);
  }, []);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 20 20"
        className="absolute left-0 top-0 w-[35%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="pathMask" maskUnits="userSpaceOnUse">
            {/* Black = transparent, White = visible */}
            <path
              // className={styles.path}
              d="M -1 0 C -0.394 5.077 0.848 13.666 3.693 14.339 C 8.125 13.895 2.659 2.852 6.12 1.205 C 10.317 0.42 9.385 16.357 13.37 16.185 C 16.837 15.322 11.61 2.593 14.23 1.395 C 16.805 1.3 17.9833 10.175 18.424 14.546"
              stroke="white"
              strokeWidth="5.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
        </defs>

        <image
          href="/images/duh.svg"
          x="0"
          y="0"
          width="20"
          height="20"
          mask="url(#pathMask)"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>

      {/* <svg viewBox="0 0 250 100">
        <path
          id="pencilPath"
          fill="none"
          stroke="red"
          strokeWidth={1}
          d="M 0 10 C 30.46 1.34 88.67 11.26 90.2 23.86 C 98.98 36.83 18.44 21.38 5.46 37.41 C -5.23 54.58 89.82 44.85 90.96 57.83 C 97.83 68.71 28.55 79.97 26.26 68.52 C 19.8367 54.46 0.69 41.99 6.99 26.34 C 16.91 9.16 72.45 7.44 90.2 19.66"
        />
      </svg> */}

      <div ref={pencilRef} className="absolute w-[5%] -top-[10px] -left-[10%]">
        <img src="/images/pencil.svg" />
      </div>
    </div>
  );
};

export default Duh;
