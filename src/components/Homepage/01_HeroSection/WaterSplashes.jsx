import WaterSplash2 from "./WaterSplash2";

const WaterSplashes = () => {
  return (
    <div className="aspect-square absolute w-[30%] left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 opacity-100">
      <WaterSplash2 className="!w-[158%] md:!w-[108%] -bottom-[40%] left-[75%] rotate-10" />
      <WaterSplash2 className="!w-[178%] md:!w-[108%] -bottom-[40%] -left-[120%] md:-left-[80%] scale-x-[-1] -rotate-15" />
    </div>
  );
};

export default WaterSplashes;
