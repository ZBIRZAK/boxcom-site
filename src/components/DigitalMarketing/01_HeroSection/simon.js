import gsap from "gsap";

export function highlightFlower(elt) {
  gsap.fromTo(
    elt,
    {
      filter: "brightness(5) drop-shadow(0 0 12px white)", // start: super bright + glow
    },
    {
      filter: "brightness(1) drop-shadow(0 0 0px white)", // end: normal + no glow
      duration: 2,
      ease: "power4.inOut",
    }
  );
}
