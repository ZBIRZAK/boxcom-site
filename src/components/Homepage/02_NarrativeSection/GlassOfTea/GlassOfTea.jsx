import "./smoke.css";
import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const GlassOfTea = () => {
  const [teaGlass, teaGlassRef, containerRef] = useDoodle(
    "/animations/ecran2/tea_glass.json",
    {
      from: { opacity: 0 },
      to: {
        opacity: 1,
        duration: 2,
      },
    }
  );

  function getVapourStyle(v) {
    return {
      position: "relative",
      bottom: "50px",
      display: "block",
      margin: "0 2px",
      minWidth: "8px",
      height: "120px",
      background: "#fff",
      borderRadius: "50%",
      animation: "animSmoke 5s linear infinite",
      opacity: 0,
      filter: "blur(10px)",
      animationDelay: `${v * -0.5}s`,
    };
  }

  return (
    <div ref={containerRef} className="opacity-0 h-[200px]">
      <div className="w-[5.5rem] absolute bottom-[0%] -right-[5%] md:right-[17%]">
        {teaGlass && (
          <Lottie animationData={teaGlass} lottieRef={teaGlassRef} />
        )}
      </div>
      <div className="absolute bottom-[0%] right-[13%] coffeeBlock">
        <div className="coffee">
          <div className="vapour">
            <span style={getVapourStyle(1)}></span>
            {/* <span style={getVapourStyle(2)}></span> */}
            <span style={getVapourStyle(5)}></span>
            <span style={getVapourStyle(4)}></span>
            {/* <span style={getVapourStyle(6)}></span> */}
            <span style={getVapourStyle(19)}></span>
            <span style={getVapourStyle(7)}></span>
            {/* <span style={getVapourStyle(8)}></span> */}
            <span style={getVapourStyle(9)}></span>
            <span style={getVapourStyle(10)}></span>
            {/* <span style={getVapourStyle(11)}></span> */}
            <span style={getVapourStyle(18)}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassOfTea;
