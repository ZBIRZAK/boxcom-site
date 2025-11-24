import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Pencil2 from "./Pencil2";
import styles from "../../Homepage/05_Art/ArtSection";
import Duh from "../../Homepage/05_Art/Duh/Duh";
import Pencil from "./Pencil";

gsap.registerPlugin(MotionPathPlugin);

const MagicWriting = () => {
  const duhRef = useRef(null);
  const pencilRef = useRef(null);

  // useLayoutEffect(() => {
  //   const updateAnimation = () => {
  //     const duh = duhRef.current;
  //     gsap.fromTo(
  //       duh,
  //       {
  //         opacity: 0,
  //         scale: 0.9,
  //         filter: "blur(4px)",
  //       },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         filter: "blur(0px)",
  //         delay: 2.5,
  //         duration: 1.5,
  //         ease: "power3.out",
  //       }
  //     );
  //   };

  //   updateAnimation();

  //   window.addEventListener("resize", updateAnimation);

  //   return () => {
  //     window.removeEventListener("resize", updateAnimation);
  //   };
  // }, []);

  return (
    <div className={styles.magiCwritingContainer}>
      <div ref={duhRef} className={styles.duhImage}>
        <Duh />
      </div>
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "200px",
          top: "10px",
          left: "150px",
        }}
      >
        <Pencil />
      </div>

      {/* <div
        style={{
          // left: -300,
          width: "400px",
          height: "200px",
          position: "relative",
          // border: "1px solid red",
        }}
      >
        <Pencil />
      </div> */}
    </div>
  );
};

export default MagicWriting;
