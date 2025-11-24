import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useEffect } from "react";

gsap.registerPlugin(MotionPathPlugin);

const Pencil2 = () => {
  useEffect(() => {
    gsap.to("#myPencil", {
      duration: 5,
      motionPath: "#pathPreview",
    });
  }, []);

  return (
    <div>
      <svg id="svgPath" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          id="pathPreview"
          d="M10,80 Q25,20 40,50 Q55,80 70,40 Q85,10 100,60"
        />
      </svg>

      <div>
        <img id="myPencil" src="/images/pencil.svg" width="24" height="48" />
      </div>
    </div>
  );
};

export default Pencil2;
