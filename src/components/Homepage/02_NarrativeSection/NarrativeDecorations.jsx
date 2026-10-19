"use client";

import GlassOfTea from "./GlassOfTea/GlassOfTea";
import BooksGlobe from "./BooksGlobe/BooksGlobe";
import SmallRobot from "./SmallRobot/SmallRobot";
import BubbleBulbWrapper from "./BubbleBulbWrapper/BubbleBulbWrapper";
import Flower from "./Flower/Flower";

export default function NarrativeDecorations() {
  return (
    <>
      <BubbleBulbWrapper />
      <GlassOfTea />
      <BooksGlobe />
      <Flower />
      <SmallRobot />
    </>
  );
}
