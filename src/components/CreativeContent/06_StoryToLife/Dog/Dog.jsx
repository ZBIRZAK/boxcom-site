"use client";

import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const Dog = () => {
  const [dog, dogRef, containerRef] = useDoodle(
    "/animations/creative_content/dog.json",
    {
      from: { opacity: 0, scale: 0.3 },
      to: {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        onStart: () => {
          dogRef.current?.setSpeed(3);
          dogRef.current?.play();
        },
      },
    }
  );

  return (
    <div
      ref={containerRef}
      className="absolute top-[47%] md:top-[50%] left-[5%] w-[19%] md:w-[13%] pointer-events-none"
    >
      {dog && <Lottie animationData={dog} lottieRef={dogRef} loop autoplay />}
    </div>
  );
};

export default Dog;
