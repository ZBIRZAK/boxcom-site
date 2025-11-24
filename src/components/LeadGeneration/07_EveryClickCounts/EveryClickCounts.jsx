import ChatBubble from "./ChatBubble";
import Dollar from "./Currency/Dollar";
import Euro from "./Currency/Euro";
import GlowingArrow from "./GlowingArrow";
import Hashtag from "./Hashtag";
import HeartEyesEmoji from "./HeartEyesEmoji";
import SmilingEmoji from "./SmilingEmoji";
import Facebook from "./SocialMedia/Facebook";
import Instagram from "./SocialMedia/Instagram";
import Tiktok from "./SocialMedia/Tiktok";
import Whatsapp from "./SocialMedia/Whatsapp";
import Speaker from "./Speaker";
import Yes from "./Yes";
import { urls } from "../../../lib/urls";
import BtnCTA from "./BtnCTA";

const EveryClickCounts = ({ data }) => {
  return (
    <section
      id="page05_screen07"
      className="relative !h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full ">
        <img
          src="/images/lead_generation/bg-every-click-counts.png"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 md:left-[15%] left-[15%] md:w-[37%] w-[70%]">
          <img
            src="/images/persons/man-with-phone.png"
            alt=""
            className="w-full object-cover"
          />
          <Tiktok />
          <Facebook />
          <Whatsapp />
          <Instagram />
          <Euro />
          <Dollar />
          <Speaker />
          <HeartEyesEmoji />
          <Hashtag />
          <ChatBubble />
          <Yes />
          <SmilingEmoji />
        </div>
        <GlowingArrow />
      </div>
      <div className=" absolute inset-0 w-full md:w-[65%] w-[60%] h-[60%] md:left-[45%] md:top-[5%] flex flex-col justify-center items-center text-center">
        <div className=" w-full w-[60%] h-auto flex flex-col justify-center items-center text-center mt-30 mt-0">
          <h3
            dangerouslySetInnerHTML={{ __html: data.title1 }}
            className="hero-title !mb-0  drop-shadow-lg/50"
          />
          <h3
            dangerouslySetInnerHTML={{ __html: data.title2 }}
            className="hero-title bg-[#ff0062] mb-4 !py-[0.2em] px-[1em] rounded-[20px]  drop-shadow-lg/50"
          ></h3>
        </div>
        <div className="absolute  bottom-14 w-full h-[20%] p-4 p-0 static w-[60%] h-[80%] flex flex-col justify-center items-center">
          <p
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
            className="text-center text-lg text-2xl font-bold font-bold mb-4 mt-0"
          ></p>
          <div className="w-[100%] font-bold text-2xl flex justify-center items-center mt-6 text-white mt-0">
            <BtnCTA link={urls.contact}>{data.button}</BtnCTA>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryClickCounts;
