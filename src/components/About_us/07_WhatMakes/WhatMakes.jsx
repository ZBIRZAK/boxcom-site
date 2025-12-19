import ScrollButton from "../../Buttons/ScrollButton";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import ParagraphText from "../../Contents/ParagraphText";
import TextList from "../../Contents/TextList";
import Title1 from "../../Contents/Title1";
import Duh from "./Duh/Duh";
import Hashtag from "./Hashtag";
import Heart from "./Heart";
import Mouth from "./Mouth";

const WhatMakes = ({data}) => {
    return (
    <section id="page06_screen07" className="!h-auto section-light relative grid grid-cols-1 md:grid-cols-[45%_55%] w-full md:min-h-screen" >
        <div  className="relative h-screen overflow-hidden">
        <Title1 html={data.title} className={"md:!hidden !block top-5 text-shadow-lg w-full absolute  !text-center z-1"} />
            <img src="/images/about_us/bg_whatmakes.jpeg" alt="Women" className="w-full h-full object-cover" />
            <Duh/>
            <Heart/>
            <Hashtag/>
            <Mouth/>
        </div>
        <ColumnContentWrapper id="whatmakes-text" >
            <Title1 html={data.title} className={"!text-black"} />
            <ParagraphText html={data.text}  />
            <TextList html={data.list} className={"[&_ul]:list-disc [&_ul]:list-inside  "} />
        </ColumnContentWrapper>
        <ScrollButton to="page06_screen08" />

        {/* Ripped paper effect at the bottom of this section */}
        <div className="absolute z-10 w-full top-[-0.5%] md:top-[-4%] left-0 right-0 pointer-events-none overflow-hidden">
            <img
                src="/images/objects/torn-papers/torn-paper-9.svg"
                alt="Torn sheet"
                className="w-full"
                />
        </div>
    </section>)
};

export default WhatMakes;