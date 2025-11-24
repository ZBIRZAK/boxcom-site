import ClaDeSol from "./MusicalNotes/CleDeSol";
import CrocheViolette from "./MusicalNotes/CrocheViolette";
import DoubleCroche from "./MusicalNotes/DoubleCroche";
import CrocheVerte from "./MusicalNotes/CrocheVerte";
import Whatsapp from "./Rs/Whatsapp";
import Youtube from "./Rs/Youtube";
import Facebook from "./Rs/Facebook";
import Tiktok from "./Rs/Tiktok";
import Instagram from "./Rs/Instagram";
import Coeur from "./Coeur/Coeur";
import Abeille from "./Abeille/Abeille";
import Fleur1 from "./Fleurs/Fleur1";
import Fleur2 from "./Fleurs/Fleur2";
import Fleur3 from "./Fleurs/Fleur3";
import Fleur4 from "./Fleurs/Fleur4";
import Oiseau from "./Oiseau/Oiseau";
import Ballon from "./Ballon/Ballon";
import Versbleu from "./Vers/Versbleu";
import Versvert from "./Vers/Versvert";
import BtnCTA from "./BtnCTA";
import { formatUrl, urls } from "../../../lib/urls";

export default function LetsMakeItHappen({ data }) {
  // console.log("LetsMakeItHappen data:", data);
  return (
    <section
      id="page10_letsMakeItHappen"
      className="relative !h-screen flex justify-end overflow-hidden z-30"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-left-bottom "
          src="/images/homepage/bg-blue-medina.jpeg"
        />
        <Ballon />
        <Versbleu />
        <Versvert />

        <div className="absolute md:left-17 -left-[30%] bottom-0 w-[clamp(660px,50vw,1200px)] ">
          <img
            className="block w-full h-auto object-left-bottom origin-bottom-left "
            src="/images/homepage/dancing-girl.png"
          />

          <ClaDeSol />
          <CrocheVerte />
          <CrocheViolette />
          <DoubleCroche />
          <Whatsapp />
          <Youtube />
          <Facebook />
          <Tiktok />
          <Instagram />
          <Abeille />
          <Fleur1 />
          <Fleur2 />
          <Fleur3 />
          <Fleur4 />
          <Oiseau />
        </div>
      </div>

      <div className="z-2 max-w-full md:max-w-[50%] lg:max-w-[40%] px-[2%] xl:mx-10 flex flex-col items-center justify-center text-center md:pt-[80px]">
        <div className="relative">
          <div className="relative inline-block mb-[10vh] md:mb-0">
            <h2
              className="hero-title !text-[2.5rem] md:!text-[3rem] xl:!text-[3.8rem]"
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></h2>

            {/* Coeur is now absolutely positioned relative to the wrapper */}
            <Coeur />
          </div>
        </div>

        <div className="flex md:gap-3 md:mt-0 mt-25 md:mr-5 justify-center md:w-[125%] w-full">
          <div className="flex flex-col items-center justify-between ">
              <p
              dangerouslySetInnerHTML={{ __html: data.text }}
              className="hero-text"
            ></p>

            <div className="flex justify-center mt-[2em] ">
              <BtnCTA to={formatUrl(data.button_link_1)}>{data.cta_button}</BtnCTA>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between ">
              <p
              dangerouslySetInnerHTML={{ __html: data.text }}
              className="hero-text"
            ></p>

            <div className="flex justify-center mt-[2em] ">
              <BtnCTA to={formatUrl(data.button_link_2)}>{data.button_cta_2}</BtnCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
