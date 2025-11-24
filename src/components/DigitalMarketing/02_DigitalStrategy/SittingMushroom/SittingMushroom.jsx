import { useDoodle } from "../../../../hooks/useDoodle";
import Lottie from "lottie-react";

const SittingMushroom=()=>{
    const [mushroom, mushroomRef, containerRef]=useDoodle("/animations/web_dev/sitting_mushroom.json",{});
    return(
        <div ref={containerRef} className="absolute w-[35%] right-[10%] top-[27%]">
           {mushroom && <Lottie animationData={mushroom} lottieRef={mushroomRef} loop autoplay />}
        </div>
    )
}
export default SittingMushroom;