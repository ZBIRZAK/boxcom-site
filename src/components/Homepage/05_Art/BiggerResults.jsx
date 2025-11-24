import gsap from "gsap";
import { useEffect, useRef } from "react";

const BiggerResults = ({ data }) => {
  const refBigResults = useRef(null);
  const refBigResults2 = useRef(null);

  // useEffect(() => {
  //   gsap.set(refBigResults.current, { opacity: 0, x: 500 });
  //   gsap.to(refBigResults.current, {
  //     opacity: 1,
  //     x: 0,
  //     ease: "power2.inOut",
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: "#page01_screen05",
  //       start: "top 70%",
  //       end: "top 30%",
  //       // markers: true,
  //       scrub: true,
  //     },
  //     onComplete: () => {
  //       gsap.set(refBigResults2.current, { opacity: 1, scale: 1 });

  //       gsap.to(refBigResults2.current, {
  //         opacity: 0,
  //         scale: 2,
  //         duration: 2,
  //         ease: "power3.out",
  //         onComplete: () => {
  //           gsap.set(refBigResults2.current, { opacity: 0, scale: 1 });
  //         },
  //       });
  //     },
  //   });
  // }, []);
  return (
    <div className="overflow-hidden absolute z-1 w-full text-center text-shadow-lg md:hidden p-3">
      <h2 className="title">{data.title1}</h2>
      <h2
        ref={refBigResults}
        className="title"
      >
        {data.title2}
      </h2>
    </div>
  );
};
export default BiggerResults;
