import ScrollButton from "../../Buttons/ScrollButton";
import BottomSection from "./BottomSection";
import Calculator from "./Calculator";
import Magnifier from "./Magnifier";
import Pencil from "./Pencil";
import Screw from "./Screw";
import Screwdriver from "./Screwdriver";
import Trophy from "./Trophy";

const Hero = ({ data }) => {
  return (
    <section
      id="page05_screen01"
      className="relative md:!h-screen  w-full overflow-hidden"
    >
      <h1 className="hidden">{data.main_title}</h1>
      <img
        src="/images/lead_generation/bg-hero.jpg"
        className="absolute w-full h-full object-cover"
      />

      <img
        src="/images/lead_generation/man-open-arm.png"
        className="absolute md:scale-[1] scale-[2.5] md:w-[76%] w-[100%] left-0 md:bottom-0 bottom-30"
      />

      <div className="absolute md:right-[10%] md:top-[20%] top-[10%]  md:w-auto w-full">
        <h3
          className="heading-tertiary text-center "
          dangerouslySetInnerHTML={{ __html: data.title1 }}
        ></h3>
        <div className="flex justify-center">
          <h3
            className="heading-tertiary inline-block  bg-[#ff0062] px-6 py-[.4em] mt-3 rounded-[30px] text-shadow-lg/40"
            dangerouslySetInnerHTML={{ __html: data.title2 }}
          ></h3>
        </div>
      </div>

      <Pencil />
      {/* <Screwdriver /> */}
      {/* <Screw /> */}
      <Trophy />
      <Magnifier />
      <Calculator />
      <BottomSection data={data} />

      <div className="hidden md:block">
        <ScrollButton to="page05_screen02" />
      </div>
    </section>
  );
};

export default Hero;
