import { useIsMobile } from "../contexts/UserAgentProvider";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function usePinImage({ textId, imageId, triggerId, markers = false }) {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById(textId);
    const imageEl = document.getElementById(imageId);

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#" + triggerId,
          start: "top top",
          end: "bottom bottom",
          pin: "#" + imageId,
          pinSpacing: false,
          markers,
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [isMobile]);
}

export default usePinImage;
