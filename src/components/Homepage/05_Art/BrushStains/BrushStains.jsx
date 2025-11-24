import gsap from "gsap";
// import { MotionPathHelper } from "gsap/MotionPathHelper";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../../../contexts/UserAgentProvider";

gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(MotionPathHelper);

const BrushStains = () => {
  const brushRef = useRef(null);
  const stain1Ref = useRef(null);
  const stain2Ref = useRef(null);
  const [tweenStain1, setTweenStain1] = useState();
  const [tweenStain2, setTweenStain2] = useState();
  const isMobile = useIsMobile();
  const progressMilestone2 = isMobile ? 0.35 : 0.6;

  // function animStain() {
  //   const tw2 = gsap.fromTo(
  //     stain1Ref.current,
  //     {
  //       scale: 0.2,
  //       opacity: 0.5,
  //     },
  //     {
  //       duration: 1,
  //       opacity: 1,
  //       repeat: 0,
  //       scale: 1,
  //       ease: "power4.in",
  //       motionPath: {
  //         path: [
  //           { x: -50, y: 10 },
  //           { x: -80, y: 300 },
  //         ],
  //       },
  //       scrollTrigger: {
  //         trigger: stain1Ref.current,
  //         start: "top 80%",
  //         toggleActions: "restart none none none",
  //       },
  //     }
  //   );
  // }

  function animStain(iRef) {
    const tw = gsap.fromTo(
      iRef.current,
      {
        scale: 0.2,
        opacity: 1,
      },
      {
        scale: 1.5,
        opacity: 1,
        duration: 1,
        repeat: 0,
        ease: "elastic",
        // motionPath: {
        //   path: [
        //     { x: -50, y: 10 },
        //     { x: -80, y: 300 },
        //   ],
        // },
        // scrollTrigger: {
        //   trigger: stain1Ref.current,
        //   start: "top 80%",
        //   toggleActions: "restart none none none",
        // },
      }
    );
    // tw2.restart();
    // setTweenStain1(tw1);
  }

  useEffect(() => {
    const tween = gsap.to(brushRef.current, {
      duration: 6,
      ease: "none",
      repeat: -1,
      onUpdate: function () {
        const p = this.progress();
        if (p >= 0 && p <= 0.05) {
          this.callA = false;
          this.callB = false;
          if (!stain1Ref.current) return;
          if (!stain2Ref.current) return;
          stain1Ref.current.style.opacity = 0;
          stain2Ref.current.style.opacity = 0;
        }
        if (p >= 0.25 && !this.callA) {
          // if (tweenStain1) {
          //   console.log("tweenStain1.restart()");
          //   tweenStain1.restart();
          // } else {
          animStain(stain1Ref);
          // }
          this.callA = true;
        }
        if (p >= progressMilestone2 && !this.callB) {
          // if (tweenStain2) {
          //   console.log("tweenStain2.restart()");
          //   tweenStain2.restart();
          // } else {
          animStain(stain2Ref);
          // }
          this.callB = true;
        }
      },
      motionPath: {
        // TEST 3
        // path: "M-43,51 C-77.848,22.655 -136.763,12.949 -200,53 -217.506,64.087 -242.736,99.25 -200.152,129.999 -164.595,155.673 -44.339,137.914 -32,180 -20.316,219.847 -186.179,268.771 -151.738,295.117 -128.391,312.976 -43.455,280.213 -28.017,245.559 -8.129,200.904 -9.158,94.326 -43,51",
        // autoRotate: true,

        // TEST 2
        path: [
          { x: 0, y: 0 },
          { x: -40, y: 300 },
          { x: -170, y: 500 },
          { x: -50, y: 100 },
          { x: 0, y: 0 },
        ],
        // curviness: 1.5,
        autoRotate: true,
      },
    });

    // MotionPathHelper.create(tween);
  }, []);

  return (
    <div className="absolute top-[20%] right-[30%] w-[50%] h-[100%]">
      <div
        ref={stain1Ref}
        className="absolute top-[40%] right-[20%] opacity-0 transition-opacity duration-500"
      >
        <img src="/images/shapes/tache2.svg" />
      </div>
      <div
        ref={stain2Ref}
        className="absolute w-[10%] top-[54%] left-[40%] opacity-0 transition-opacity duration-500"
      >
        <img src="/images/shapes/tache1.svg" />
      </div>

      <div ref={brushRef} className="w-[15%] absolute top-0 right-0">
        <img src="/images/brush.svg" />
      </div>
    </div>
  );
};

export default BrushStains;
