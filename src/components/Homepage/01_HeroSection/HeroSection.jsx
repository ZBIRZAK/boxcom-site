"use client";
import { gsap } from "gsap";
import styles from "./HeroSection.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GirlWithGlasses from "./GirlWithGlasses/GirlWithGlasses";
import BecauseYourBrand from "./BecauseYourBrand/BecauseYourBrand";
import Surfer from "../../Doodles/Surfer/Surfer";
import Hello from "../../Doodles/Hello/Hello";
import Enveloppe from "../../Doodles/Enveloppe/Enveloppe";
import Planet from "../../Doodles/Planet/Planet";
import HomepageProvider from "../HomepageProvider";
import Marquee from "./Marquee/Marquee";
import OrangeFlower from "../../Doodles/OrangeFlower/OrangeFlower";
import PinkMushroom from "../../Doodles/PinkMushroom/PinkMushroom";
import YellowButterfly from "../../Doodles/YellowButterfly/YellowButterfly";
import MusicalNote1 from "../../Doodles/MusicalNote1/MusicalNote1";
import MusicalNote2 from "../../Doodles/MusicalNote2/MusicalNote2";
import MusicalNote3 from "../../Doodles/MusicalNote3/MusicalNote3";
import Butterfly from "./Butterfly/Butterfly";
import ScrollButton from "../../Buttons/ScrollButton";
import ImagePreloader from "../../Loaders/ImagePreloader";
import PinkHeart2 from "../../Doodles/PinkHeart/PinkHeart2";
import WaterSplashes from "./WaterSplashes";
import BlueFlower2 from "./BlueFlower2";
import RedMushroom2 from "./RedMushroom2";

gsap.registerPlugin(ScrollTrigger);

const context = {
  scr1Scr2ScrollOptions: {
    trigger: "#page01_screen02",
    start: "top 90%",
    end: "top 10%",
    // markers: true,
    scrub: 3,
    // toggleActions: "play none none reverse",
    toggleActions: "restart none none none",
    // toggleActions: onEnter onLeave onEnterBack onLeaveBack
  },
};

const HeroSection = ({ data }) => {
  // useNextScreenAboveCurrent("page01_screen01", "page01_screen02");

  return (
    <HomepageProvider>
      <section
        id="page01_screen01"
        className="relative w-full h-screen overflow-hidden z-1 bg-[url('/images/bg_ecran1.jpg')] bg-cover bg-center"
      >
        <h1 className="hidden">{data.main_title}</h1>
        <ImagePreloader imageUrls={["/images/homepage/girl-with-glasses.png"]}>
          <GirlWithGlasses
            starStyles={styles.purpleStarContainer}
            duration={3}
            delay={2}
            context={context}
          />

          <BecauseYourBrand
            containerStyles={styles.textContainer}
            text1Styles={styles.title}
            text2Styles={styles.slogan}
            text1={data.title}
            text2={data.slogan}
            text1Duration={2}
            text1Delay={3.5}
            text2Duration={1}
            text2Delay={7}
            context={context}
          />

          <WaterSplashes />

          <Surfer
            containerStyles={styles.surfeuseContainer}
            delay={6}
            context={context}
          />

          <Hello containerStyles={styles.helloContainer} delay={5} />
          <Planet delay={5} />

          <Enveloppe containerStyles={styles.enveloppeContainer} delay={10} />
          <Butterfly />

          {/* <Butterfly containerStyles={styles.butterflyContainer} delay={5} /> */}
          {/* <BlueFlower containerStyles={styles.blueFlowerContainer} delay={5} /> */}
          <BlueFlower2 delay={5} />

          <OrangeFlower
            containerStyles={styles.orangeFlowerContainer}
            context={context}
            delay={5}
          />
          {/* <PinkHeart
            containerStyles={styles.pinkHeartContainer}
            context={context}
            delay={5}
          /> */}
          <PinkHeart2 delay={5} />
          {/* <RedMushroom
            containerStyles={styles.redMushroomContainer}
            context={context}
            delay={5}
          /> */}
          <RedMushroom2 delay={5} />
          <PinkMushroom
            containerStyles={styles.pinkMushroomContainer}
            context={context}
            delay={5}
          />

          <YellowButterfly
            containerStyles={styles.yellowButterflyContainer}
            context={context}
            delay={5}
          />

          <MusicalNote1
            containerStyles={styles.musicalNote1Container}
            delay={5}
          />
          <MusicalNote2
            containerStyles={styles.musicalNote2Container}
            delay={5}
          />
          <MusicalNote3
            containerStyles={styles.musicalNote3Container}
            delay={5}
          />

          <div className="hidden md:block">
            <ScrollButton to="page01_screen02" />
          </div>

          <Marquee context={context} data={data} />
        </ImagePreloader>
      </section>
    </HomepageProvider>
  );
};

export default HeroSection;
