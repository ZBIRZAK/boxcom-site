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
        <section id="page06_screen03" className="relative md:screen w-full overflow-hidden">
            <div className="absolute w-full h-full">
                <img src="/images/persons/dot.jpg" alt="Meetdot" className="w-full h-full object-cover object-center " />
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
        </section>
    )
}

export default MeetDot