"use client";

import Surfer from "../../Doodles/Surfer/Surfer";
import Hello from "../../Doodles/Hello/Hello";
import Enveloppe from "../../Doodles/Enveloppe/Enveloppe";
import Planet from "../../Doodles/Planet/Planet";
import OrangeFlower from "../../Doodles/OrangeFlower/OrangeFlower";
import PinkMushroom from "../../Doodles/PinkMushroom/PinkMushroom";
import YellowButterfly from "../../Doodles/YellowButterfly/YellowButterfly";
import MusicalNote1 from "../../Doodles/MusicalNote1/MusicalNote1";
import MusicalNote2 from "../../Doodles/MusicalNote2/MusicalNote2";
import MusicalNote3 from "../../Doodles/MusicalNote3/MusicalNote3";
import Butterfly from "./Butterfly/Butterfly";
import PinkHeart2 from "../../Doodles/PinkHeart/PinkHeart2";
import WaterSplashes from "./WaterSplashes";
import BlueFlower2 from "./BlueFlower2";
import RedMushroom2 from "./RedMushroom2";

export default function HeroDecorations({ context, isMobile }) {
  const delay = isMobile ? 1 : 5;

  return (
    <>
      <WaterSplashes />
      <Hello delay={delay} />
      <Planet delay={delay} />
      <Butterfly />
      <BlueFlower2 delay={delay} />
      <OrangeFlower context={context} delay={delay} />
      <PinkHeart2 delay={delay} />
      <YellowButterfly context={context} delay={delay} />
      <Surfer delay={isMobile ? 1 : 6} context={context} />
      <Enveloppe delay={isMobile ? 1 : 10} />
      <RedMushroom2 delay={delay} />
      <PinkMushroom context={context} delay={delay} />
      <MusicalNote1 delay={delay} />
      <MusicalNote2 delay={delay} />
      <MusicalNote3 delay={delay} />
    </>
  );
}
