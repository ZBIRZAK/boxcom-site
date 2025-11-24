import { formatUrl } from "../../../lib/urls";
import Button from "../../Buttons/Button2";
import BtnFreeConsult from "./BtnFreeConsult";
import Donut from "./Donut/Donut";
import Flower1 from "./Flower/Flower1";
import Flower2 from "./Flower/Flower2";
import Flower3 from "./Flower/Flower3";
import Ring from "./Ring/Ring";
import Trophy from "./Trophy/Trophy";

const SalesPerson = ({ data }) => {
  return (
    <section id="page04_screen06" className="w-full h-screen overflow-hidden">
      <div className="absolute md:w-[60%] w-[120%] -left-10 md:top-[-15%] top-[-7%] z-1  pointer-events-none overflow-hidden ">
        <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
      </div>
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="/images/web_dev/bg-screen6.jpg"
          alt="Background"
        />
      </div>

      <div className="absolute -bottom-0 md:left-0 -left-10 md:w-[55%] w-[120%] z-1">
        <Flower1 />
        <Flower2 />
        <Flower3 />
        <Ring />
        <Donut />
        <img
          src="/images/web_dev/woman-shopping.png"
          alt="Shopping gwoman"
          className="w-full"
        />
      </div>
      <Trophy />
      <div className="absolute w-screen top-0 right-0 flex flex-col justify-center items-center md:right-[-50] md:w-[65%] md:h-[60%] md:top-[20%] ">
        <div className="w-full md:w-[60%] md:h-auto flex flex-col justify-center items-center text-center mt-30 md:mt-0">
          <h3
            dangerouslySetInnerHTML={{ __html: data.title1 }}
            className="heading-tertiary md:mb-8 mb-4 md:!text-[3rem] !text-[2em]"
          />
          <h3
            dangerouslySetInnerHTML={{ __html: data.title2 }}
            className="heading-tertiary bg-[#ff0062] py-[0.2em] px-[1em] rounded-[40px] md:!text-[3rem] !text-[2em] -rotate-2 "
          />
        </div>
        <div className="h-full w-full md:w-[60%] md:h-[80%] px-[1em] md:px-0 flex flex-col justify-center items-center">
          <p
            dangerouslySetInnerHTML={{ __html: data.text }}
            className="text-center font-bold text-lg md:mt-0 mt-[10%] md:text-2xl md:mb-8 mb-3 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] md:[text-shadow:none]"
          ></p>
          <div className="py-3 w-[100%] flex justify-center items-center text-white">
            <BtnFreeConsult text={data.bouton_cta} link={formatUrl(data.button_link)} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SalesPerson;
