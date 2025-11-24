"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Enveloppe = () => {
  const enveloppeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page06_screen05",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });
    tl.fromTo(
      enveloppeRef.current,
      { y: 100 },
      { y: 1, duration: 1, ease: "power1.in" }
    ).to(enveloppeRef.current, {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div
      ref={enveloppeRef}
      className="absolute w-[17%] left-[5%] top-[10%] -rotate-25"
    >
      <img src="/images/objects/enveloppe.svg" />
    </div>
  );
};

export default Enveloppe;
