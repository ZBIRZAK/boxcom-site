import Lottie from "lottie-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDoodle } from "../../../hooks/useDoodle";

const scrollTrigger = {
  trigger: "#page06_screen04",
  start: "top 5%",
  toggleActions: "restart none none none",
};

const Robot = () => {
  const [robot1, robotRef1, containerRef1] = useDoodle(
    "/animations/ecran2/robot.json",
    {
      from: {
        x: 150,
        scaleX: 1,
      },
      to: {
        x: 0,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        scrollTrigger,
        delay: 1, 
        onRepeat: () => {
          gsap.to(containerRef1.current, {
            scaleX: gsap.getProperty(containerRef1.current, "scaleX") * -1,
            duration: 0.2,
          });
        },
      },
    }
  );

  useEffect(() => {
    if (!containerRef1.current) return;

    gsap.set(containerRef1.current, { opacity: 0 });

    gsap.to(containerRef1.current, {
        delay:4,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger, 
    });
  }, []);

  return (
    <div
      ref={containerRef1}
      className="absolute z-1 -bottom-[10%] -left-[3%] md:left-[10%] w-[50%] md:w-[40%]"
    >
      <div className="absolute bottom-[-55%]">
        {robot1 && (
          <Lottie
            animationData={robot1}
            lottieRef={robotRef1}
            loop={true}
            autoplay={true}
          />
        )}
      </div>
    </div>
  );
};

export default Robot;
