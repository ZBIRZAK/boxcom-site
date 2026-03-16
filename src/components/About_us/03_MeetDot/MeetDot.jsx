import ScrollButton from "../../Buttons/ScrollButton"
import BlueFlower from "./BlueFlower"
import Brush from "./Brush"
import Creature from "./Creature"
import Heart from "./Heart"
import Mushroom from "./Mushroom"
import Stain from "./Stain"
import WaterSplash from "./WaterSplash"

const MeetDot = ({data}) => {
    return(
        <section id="page06_screen03" className="relative md:screen w-full">
            <div className="absolute w-full h-full">
                <img src="/images/persons/dot.webp" alt="Meetdot" className="w-full h-full object-cover object-center " />
            </div>

            <WaterSplash/>
            <Brush/>
            <Mushroom/>
            <Stain/>
            <BlueFlower/>
            <div className="absolute md:right-[5%] ">
                <div className="relative">
                    <div className="relative inline-block top-25 md:w-[500px] bg-[#ff0062] md:m-0 mx-5 p-7 section-dark rounded-4xl">
                    <h2 className="title text-white">{data.title}</h2>
                    <div className="text" dangerouslySetInnerHTML={{ __html: data.text }}/>
                    <Creature />
                    <Heart/>
                    </div>
                </div>
            </div>
            
            <ScrollButton  to="page06_screen04" />

            {/* Ripped paper effect at the top of this section */}
            {/* <div className="absolute z-99 w-full top-[-1%] md:top-[-4%] left-0 right-0 pointer-events-none overflow-hidden">
                <img
                src="/images/objects/torn-papers/torn-paper-6.svg"
                alt="Torn sheet"
                className="w-full"
                />
            </div> */}

            {/* Ripped paper effect at the bottom of this section */}
            {/* <div className="absolute z-99 w-full bottom-[-1%] md:bottom-[-4%] left-0 right-0 pointer-events-none overflow-hidden">
                <img
                src="/images/objects/torn-papers/torn-paper-7.svg"
                alt="Torn sheet"
                className="w-full"
                />
            </div> */}
        </section>
    )
}

export default MeetDot