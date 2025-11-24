import Lottie from "lottie-react";
import { useDoodle } from "../../../hooks/useDoodle";

const Chart = () => {
  const [curve, curveRef, containerRef] = useDoodle(
      "/animations/about_us/curve.json",{}
  );
  return (
    <div className="absolute w-[30%] -right-[5%] bottom-[5%]">
      <img src="/images/shapes/chart-without-curve.svg" />
      <div ref={containerRef} className="absolute w-[105%] top-0 left-0">
        {curve && <Lottie animationData={curve} lottieRef={curveRef} />}
      </div>
    </div>
  );
};

export default Chart;
