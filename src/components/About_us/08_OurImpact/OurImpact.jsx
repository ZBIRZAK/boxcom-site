import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import ParagraphText from "../../Contents/ParagraphText";
import Title1 from "../../Contents/Title1";
import Chart from "./Chart";
import Rocket from "./Rocket";
import Up from "./Up/Up";

const OurImpact = ({ data }) => {
  return (
    <section
      id="page06_screen08"
      className="relative !h-auto section-dark bg-[#ff0062] grid grid-cols-1  md:grid-cols-[50%_50%]"
    >
      <ColumnContentWrapper id="our-impact-text" >
        <Title1
          html={data.title}
          className={"!text-white !text-start px-5 ml-5"}
        />
        <div className="flex flex-wrap justify-start mt-15 items-center px-5">
          <div className="w-[45%] md:mt-0 mt-5">
            <Title1
              html={data.years_expertise.subtitle}
              className={"!text-white !text-center !block "}
            />
            <ParagraphText
              html={data.years_expertise.text}
              className={"!text-white !text-center"}
            />
          </div>
          <div className="w-[45%] ">
            <Title1
              html={data.successful_launches.subtitle}
              className={"!text-white !text-center !block"}
            />
            <ParagraphText
              html={data.successful_launches.text}
              className={"!text-white !text-center"}
            />
          </div>
          <div className="w-[45%] mt-10 ">
            <Title1
              html={data.campaigns_crafted.subtitle}
              className={"!text-white !text-center !block"}
            />
            <ParagraphText
              html={data.campaigns_crafted.text}
              className={"!text-white !text-center"}
            />
          </div>
          <div className="w-[45%] mt-15 ">
            <Title1
              html={data.stories_to_life.subtitle}
              className={"!text-white !text-center !block"}
            />
            <ParagraphText
              html={data.stories_to_life.text}
              className={"!text-white !text-center"}
            />
          </div>
        </div>
      </ColumnContentWrapper>
      <div
        id="cont-img-surprised-man"
        className="md:order-2 relative h-screen w-full  h-full overflow-hidden"
      >
        <img
          src="/images/persons/surprised_man.jpeg"
          alt="Surprised man"
          className=" w-full  h-full object-cover"
        />
        <Up />
        <Rocket />
        <Chart />
        <div className="hidden md:block">
          <ScrollButton to="page06_screen09" />
        </div>
      </div>
    </section>
  );
};
export default OurImpact;
