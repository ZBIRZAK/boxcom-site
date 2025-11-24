import gsap from "gsap";
import { useEffect, useRef } from "react";
import { audios } from "../../Audio/audios";
import { highlightFlower } from "./simon";
import { useGSAP } from "@gsap/react";

const Flower5 = ({ onClick }) => {
  const flowerRef = useRef();

  useGSAP(() => {
    const el = flowerRef.current;

    gsap.set(el, { rotation: 0, transformOrigin: "50% 100%" });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(el, { rotation: 5, duration: 1, ease: "sine.inOut" })
      .to(el, { rotation: -5, duration: 2, ease: "sine.inOut" })
      .to(el, { rotation: 3, duration: 1.5, ease: "sine.inOut" });
  });

  return (
    <div
      ref={flowerRef}
      className="absolute w-[max(130px,15%)] right-[3%] bottom-[5%] z-10"
      // onClick={onClick}
    >
      <img
        src="/images/flowers/fleur7-half-stroke.svg"
        // onClick={() => {
        //   audios.C4.play();
        //   highlightFlower(flowerRef.current);
        // }}
      />
    </div>
  );
};

export default Flower5;
