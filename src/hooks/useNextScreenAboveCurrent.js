import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useIsMobile } from "../contexts/UserAgentProvider";

// Ce hook n'est pas actif en mobile
//
export default function useNextScreenAboveCurrent(
  currentScreenId,
  nextScreenId
) {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Ce hook n'est pas actif en mobile
    if (isMobile) {
      return;
    }

    const nextScreen = document.getElementById(nextScreenId);

    if (nextScreen) {
      ScrollTrigger.create({
        trigger: "#" + currentScreenId,
        start: "top top",
        end: () => `+=${nextScreen.offsetHeight}`,
        pin: true,
        pinSpacing: false,
      });
    }
  }, []);
}
