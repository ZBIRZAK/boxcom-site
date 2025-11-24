import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";
import gsap from "gsap";

const scrollTrigger = {
  trigger: "#page01_screen02",
  start: "top 5%",
  toggleActions: "restart none none none",
};

const SmallRobot = () => {
  const [robot1, robotRef1, containerRef1] = useDoodle(
    "/animations/ecran2/robot.json",
    {
      from: {
        x: 200,
        scaleX: 1,
      },
      to: {
        x: 0,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        scrollTrigger,
        onRepeat: () => {
          gsap.to(containerRef1.current, {
            scaleX: gsap.getProperty(containerRef1.current, "scaleX") * -1,
            duration: 0.2,
          });
        },
      },
    }
  );
  return (
    <div
      ref={containerRef1}
      className="absolute z-1 -bottom-[10%] -left-[20%] md:-left-[3%] w-[50%] md:w-[30%]"
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

export default SmallRobot;
