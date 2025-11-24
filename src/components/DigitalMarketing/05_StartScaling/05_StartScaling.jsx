"use client";
import Button from "../../Buttons/Button2";
import LeftFirework from "./Fireworks/LeftFirework";
import Rocket from "./Rocket/Rocket";
import Facebook from "./SocialMedia/Facebook";
import Instagram from "./SocialMedia/Instagram";
import Tiktok from "./SocialMedia/Tiktok";
import Whatsapp from "./SocialMedia/Whatsapp";
import Youtube from "./SocialMedia/Youtube";
import LeftSpiral from "./Spirals/LeftSpiral";
import RightSpiral from "./Spirals/RighSpiral";
import RightFirework from "./Fireworks/RightFirework";
import Sparkles from "./Fireworks/Sparkles";
import Chart from "./Chart";
import { useRouter } from "next/navigation";
import { formatUrl, urls } from "../../../lib/urls";
import BtnCTA from "./BtnCTA";

const StartScaling = ({ data }) => {
  const router = useRouter();
  return (
    <section id="page03_screen05" className="relative h-screen overflow-hidden">
      <img
        src="/images/digital_marketing/coloured-street2.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute md:w-[55%] w-[110%] -right-5 md:top-[-15%] top-[-5%]   pointer-events-none overflow-hidden ">
        <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
      </div>

      <div className="absolute w-[91%] md:w-[27%] left-[6%] md:left-[14%] top-[25%] md:top-[4%]">
        <Sparkles
          count={30}
          className="top-[10%] right-[6%] w-[32%]"
          centerPointRadius={0}
        />
        <RightFirework />
        <Sparkles
          count={30}
          className="top-[11%] left-[19%] w-[22%]"
          centerPointRadius={1}
        />
        <LeftFirework />
        <div className="relative">
          <img
            src="/images/digital_marketing/happy-man-jumping.png"
            className=" w-full h-auto z-2"
          />
        </div>
        <div className="absolute w-[12%] left-[30%] top-[17%]">
          <img src="/images/creatures/creature1.svg" />
        </div>
       

        <Whatsapp />
        <Chart />
        <Tiktok />
        <Instagram />
        <Rocket />
        <Youtube />
        <Facebook />
        {/* <PurpleTriangles />
        <VioletBlueTriangles /> */}

        <LeftSpiral />
        <RightSpiral />
      </div>

      <div className="absolute w-screen h-screen top-0 right-0 flex flex-col justify-center  md:right-[-200] md:w-[65%] md:h-[60%] md:top-[30%] ">
        <div className="w-full md:w-[60%] md:h-auto flex flex-col justify-center items-center text-center mt-30 md:mt-0">
          <h3
            dangerouslySetInnerHTML={{ __html: data.title1 }}
            className="heading-tertiary md:mb-8 mb-4 md:!text-[3rem] !text-[2em]"
          />
          <h3
            dangerouslySetInnerHTML={{ __html: data.title2 }}
            className="heading-tertiary bg-[#ff0062] py-[0.2em] px-[1em] rounded-[20px] md:!text-[3rem] !text-[2em] "
          />
        </div>
        <div className="h-full w-full md:w-[60%] md:h-[80%] px-[1em] md:px-0 flex flex-col justify-center items-center">
          <p
            dangerouslySetInnerHTML={{ __html: data.text }}
            className="text-center font-bold text-sm mb-8 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] md:[text-shadow:none]"
          ></p>
          <div className="px-6 py-3 w-[70%] font-bold text-2xl flex justify-center items-center text-white">
            <BtnCTA link={formatUrl(data.cta_link)}>{data.bouton_cta}</BtnCTA>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartScaling;
