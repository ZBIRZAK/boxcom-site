"use client";

import { useEffect, useState } from "react";
import BottomSection from "./BottomSection";
import Butterfly from "./Butterfly";
import ButterflyTwo from "./Butterfly2";
import Flower1 from "./Flower1";
import Flower3 from "./Flower3";
import Flower4 from "./Flower4";
import Flower5 from "./Flower5";
import SpiralGlasses from "./SpiralGlasses";
import Splash from "./Splash";
import Surfer from "./Surfer";
import { audios } from "../../Audio/audios";
import ScrollButton from "../../Buttons/ScrollButton";

function getRandomKey(obj) {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

const HeroSection = ({ data }) => {
  const [gameAudios, setGameAudios] = useState([]);
  const [userAudios, setUserAudios] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [gameTurn, setGameTurn] = useState("OFF"); // OFF, COMPUTER, WAIT_USER, USER_HAS_ANSWERED

  function doComputerTurn() {
    // disable flowers

    const rndKey = getRandomKey(audios);
    // console.log("rndKey:", rndKey);
    audios[rndKey].play();
    setGameAudios(gameAudios.slice().concat(rndKey));
    setUserAudios([]);
    setGameTurn("WAIT_USER");
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function doComputerCheck() {
    // Enable flowers
    console.log(
      "[USER TURN] computer seq:",
      gameAudios.join(", "),
      "user seq:",
      userAudios.join(", ")
    );
    for (let i = 0; i < userAudios.length; i++) {
      if (userAudios[i] !== gameAudios[i]) {
        alert("ERROR");
        await sleep(3000);

        startGame();
        return;
      }
    }

    if (userAudios.length < gameAudios.length) {
      // player is still playing... wait
      return;
    }

    await sleep(3000);
    setGameTurn("COMPUTER");
  }

  async function addUserNote(note) {
    setUserAudios(userAudios.slice().concat(note));
    setGameTurn("USER_HAS_ANSWERED");
    setUserIndex(userIndex + 1);
  }

  function startGame() {
    setUserAudios([]);
    setGameAudios([]);
    setGameTurn("COMPUTER");
  }

  useEffect(() => {
    return; // Jeu désactivé
    (async function play() {
      console.log("useEffect, gameTurn=" + gameTurn);
      if (gameTurn === "COMPUTER") {
        doComputerTurn();
      } else if (gameTurn === "USER_HAS_ANSWERED") {
        await doComputerCheck();
      }
    })();
  }, [gameTurn, userIndex]);

  return (
    <section id="page03_screen01" className="relative h-screen overflow-hidden">
      <h1 className="hidden">{data.main_title}</h1>
      <img
        src="/images/digital_marketing/bg-digital-marketing.jpg"
        className="w-full h-full object-cover"
      />
      <Flower1
      // onClick={() => {
      //   addUserNote("C3")
      // }}
      />
      <Butterfly />
      <ButterflyTwo />
      <Flower3
      // onClick={() => {
      // addUserNote("E3")
      // }}
      />
      <Flower4
      // onClick={() => {
      // addUserNote("G3")
      // }}
      />
      <Flower5
      // onClick={() => {
      // addUserNote("C4")
      // }}
      />
      <div className="w-[380px] left-[-20%] bottom-0 absolute sm:w-[40%] sm:h-auto sm:left-[5%]">
        <img
          src="/images/digital_marketing/woman-mobile-pink.png"
          className="w-full h-auto z-10"
        />
        <Splash />
        <Surfer />
        <SpiralGlasses />
      </div>
      <div className="absolute left-0 top-[10%] right-0 md:top-[20%] md:right-[5%] z-20 md:text-end text-center flex flex-col md:items-end items-center  ">
        {/* It’s not about surfing on the trend. */}
        <h3
          dangerouslySetInnerHTML={{ __html: data.title_1 }}
          className="heading-tertiary heading-tertiary--rose mb-4 !text-[2em] sm:!text-[2.5em] md:mb-8 md:!text-[3rem]"
          style={{ textShadow: "2px 2px 4px white" }}
        ></h3>

        {/* It's about creating */}
        <h3
          dangerouslySetInnerHTML={{ __html: data.title_2 }}
          className="heading-tertiary mb-4 !text-[2em] sm:!text-[2.5em] text-shadow-lg md:!text-[3rem] md:mb-8"
        ></h3>

        {/* The next wave. */}
        <h3
          dangerouslySetInnerHTML={{ __html: data.title_3 }}
          className="
              relative inline-block heading-tertiary
              py-[0.5em] px-[0.3em] md:!text-[3rem] !text-[2em] sm:!text-[2.5em]
              before:content-[''] before:absolute before:inset-0
              before:bg-[#ff0062] before:rounded-[20px]
              before:-z-10 before:rotate-[-3deg]
          "
        ></h3>

        {/* BOUTON DE DEPART DU JEU */}
        {/* <div className="absolute -bottom-[50%] right-[20%]">
          <Button label="Start" onClick={startGame} />
        </div> */}
      </div>
      <BottomSection data={data} />
      <div className="hidden md:block z-9994 relative bottom-10">
        <ScrollButton to="page03_screen02" />
      </div>
    </section>
  );
};

export default HeroSection;
