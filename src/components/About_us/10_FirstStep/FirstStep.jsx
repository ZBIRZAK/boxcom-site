import Paperplane from "./Paperplane";
import Phone from "./Phone";
import Present from "./Present";
import BtnFreeConsult from "./BtnFreeConsult";

const FirstStep = ({ data }) => {
  return (
    <section id="page06_screen10" className="w-full h-screen overflow-hidden">
      <div className="absolute w-full h-full">
        <img
          src="/images/about_us/bg-colorfull-wall.jpeg"
          alt="Colorful wall"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-0 md:left-[27%] left-[30%] md:w-[38%] w-[50%] z-10">
        <img
          src="/images/persons/yellow-girl.png?v=2025-10-19"
          alt="Yellow girl"
          className="w-full"
        />
        <Present />
        <Phone />
        <Paperplane />
      </div>
      <div className="absolute w-screen top-0 right-[0%]  flex flex-col justify-center items-end md:right-[5%] md:w-[65%] md:h-[60%] md:top-[20%] z-1 ">
        <div className="w-full md:w-[60%] md:h-auto flex flex-col justify-center items-center text-center mt-30 md:mt-0">
          <h3
            dangerouslySetInnerHTML={{ __html: data.title1 }}
            className="heading-tertiary !text-[#ff0062] text-shadow md:mb-8 mb-4 md:!text-[3rem] !text-[2em]"
          />
          <h3 className="heading-tertiary relative inline-block py-[0.5em] px-[0.3em] md:!text-[3rem] !text-[2em] before:content-[''] before:absolute before:inset-0 before:bg-[#ff0062] before:rounded-[50px] before:z-0 before:rotate-[-3deg]">
            <span
              className="relative z-10"
              dangerouslySetInnerHTML={{ __html: data.title2 }}
            />
          </h3>
        </div>
        <div className="h-full w-full md:w-[60%] md:h-[80%] px-[1em] md:px-0 flex flex-col justify-center items-center">
          <div
            dangerouslySetInnerHTML={{ __html: data.text }}
            className="text-center font-bold text-lg md:mt-0 mt-[10%] md:text-2xl md:mb-8 mb-3 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] md:[text-shadow:none]"
          ></div>
          <div className=" flex justify-center items-center text-white">
            <BtnFreeConsult text={data.button} link={data.button_link} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstStep;
