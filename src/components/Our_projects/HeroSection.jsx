import HeroMainTitle from "../Headings/HeroMainTitle";
import HeroSmallTitle from "../Headings/HeroSmallTitle";

const HeroSection = () => {
  return (
    <div className="relative !h-[400px] flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div>
        <HeroSmallTitle>WHAT WE DO</HeroSmallTitle>
        <HeroMainTitle>
          Our{" "}
          <span className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_80%,#fed841_80%)] bg-[length:100px_1.2em]">
            Projects
          </span>
        </HeroMainTitle>
      </div>
    </div>
  );
};
export default HeroSection;
