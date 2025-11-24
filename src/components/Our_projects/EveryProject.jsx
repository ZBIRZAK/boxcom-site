import Brush from "./Brush";
import Button_CTA from "./Button_CTA";
import PaperPlane from "./Paperplane";
import Pencilcase from "./Pencilcase";
import Pencilcase2 from "./Pencilcase2";
import Stain from "./Stain";

const EveryProject = ({ data }) => {
  //   console.log("EveryProject data:", data);
  return (
    <section
      id="page08_screen3"
      className="relative h-screen w-full overflow-hidden"
    >
      <img
        src="/images/our_projects/bg.png"
        alt="Bg"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute md:w-[80%] w-[160%] bottom-0 md:left-0 left-[-40%]">
        <img src="/images/persons/girl_sitting.png" alt="girl" />
        <Stain />
        <Brush />
        <PaperPlane />
        {/* <Pencilcase /> */}
        <Pencilcase2 className="w-[10%] bottom-[5%] left-[5%]" />
      </div>
      <div
        className="absolute 
        right-0 top-[20%] z-20 w-full text-center flex flex-col items-center
        md:top-[25%] md:w-[40%] md:items-center  "
      >
        <h3
          dangerouslySetInnerHTML={{ __html: data.title_1 }}
          className="heading-tertiary mb-4 !text-[2em] sm:!text-[2.5em] text-shadow-lg md:!text-[3rem] md:mb-8"
        ></h3>
        <h3
          dangerouslySetInnerHTML={{ __html: data.title_2 }}
          className="
              relative inline-block heading-tertiary
              py-[0.4em] px-[0.3em] md:!text-[3rem] !text-[2em] sm:!text-[2.5em]
              before:content-[''] before:absolute before:inset-0
              before:bg-[#ff0062] before:rounded-[20px]
              before:-z-10 before:rotate-[-2deg]
            "
        ></h3>
        <Button_CTA html={data.button_cta} />
      </div>
    </section>
  );
};
export default EveryProject;
