import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import ParagraphText from "../../Contents/ParagraphText";
import Title1 from "../../Contents/Title1";

const OurTeam = ({ data }) => {
  return (
    <section
      id="page06_screen09"
      className="!h-auto section-dark relative grid grid-cols-1 md:grid-cols-[55%_45%] w-full md:min-h-screen"
    >
      <ColumnContentWrapper id="our-team-text">
        <Title1 html={data.title} className={"!text-white"} />
        <ParagraphText html={data.text}  />
      </ColumnContentWrapper>
      <div
        id="cont-img-our-team"
        className="md:order-2 relative md:h-screen overflow-hidden md:pt-[70px] pt-[80px] flex justify-center items-center"
      >
        <Title1 html={data.title} className={"!text-white md:!hidden !block top-5 text-shadow-lg w-full  absolute !text-center z-1"} />
        <img src="/images/persons/boxcom-team.jpg" className="max-h-full " />
        <div className="hidden md:block">
          <ScrollButton to="page06_screen10" />
        </div>
      </div>

      {/* Ripped paper effect at the bottom of this section */}
      {/* <div className="absolute z-10 w-full top-[-1%] md:top-[-4%] left-0 right-0 pointer-events-none overflow-hidden">
        <img
          src="/images/objects/torn-papers/torn-paper-10.svg"
          alt="Torn sheet"
          className="w-full"
        />
      </div> */}
    </section>
  );
};
export default OurTeam;
