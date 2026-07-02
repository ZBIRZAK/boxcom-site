import Camera from "./Camera";
import Chart from "./Chart";
import Crown from "./Crown";
import Enveloppe from "./Enveloppe";
import Leaf1 from "./Leaf1";
import Leaf2 from "./Leaf2";
import Leaf3 from "./Leaf3";
import Leaf4 from "./Leaf4";
import Leaf5 from "./Leaf5";
import Leaf6 from "./Leaf6";
import Magnet from "./Magnet";
import Magnifier from "./Magnifier";
import Megaphone from "./Megaphone";
import Microphone from "./Microphone";
import Newspaper from "./Newspaper";
import NumberOne from "./NumberOne";
import SEO from "./SEO";
import Subscribe from "./Subscribe";
import ScrollButton from "../../Buttons/ScrollButton";
import Title1 from "../../Contents/Title1";

const prProjectCopy = {
  en: {
    question: "You have a PR project?",
    cta: "Visit our website",
  },
  fr: {
    question: "Vous avez un projet RP ?",
    cta: "Visitez notre site web",
  },
};

const LogoContainer = ({ children }) => (
  <div className="flex justify-center pt-5 h-[100px] items-start">
    {children}
  </div>
);

const Title = ({ children }) => (
  <div className="font-bold uppercase">{children}</div>
);

const Content = ({ value }) => (
  <div
    className="mb-3 [&_ul]:list-disc [&_ul]:list-inside"
    dangerouslySetInnerHTML={{ __html: value }}
  ></div>
);

const BoxComAfrica = ({ data, locale = "en" }) => {
  const copy = prProjectCopy[locale] || prProjectCopy.en;

  return (
    <section
      id="page06_screen05"
      className="relative section-light !bg-[#F5B7CC] md:min-h-screen !h-auto overflow-hidden"
    >
      <img
        src="/images/about_us/bg-boxcom-africa.webp"
        className="absolute md:block hidden w-full h-full object-cover object-[center_40%]"
      />
      <img
        src="/images/about_us/yin-yang.webp"
        className="md:hidden mt-30 block absolute w-full  object-cover"
      />
      <div className="absolute md:hidden block top-[41.5%] w-full h-[2px] bg-[#EA389B] shadow-[0_0_10px_2px_rgba(234,56,155,0.6)]" />

      <Title1
        html={data.mobile_title}
        className={
          "!block top-[70px] w-full absolute !text-center z-1 !text-white drop-shadow-lg/40"
        }
      />

      <div className="relative grid md:grid-cols-3 grid-cols-1 pt-[70px]">
        <div className="md:order-1 order-2 md:mt-0 mt-[40%]">
          <LogoContainer>
            <img
              src="/Logos_Boxcom/logo-new-white-353.webp"
              className="w-[52vw] max-w-[200px] h-auto filter drop-shadow-lg/40"
            />
          </LogoContainer>
          <div className="mt-10 pl-[15%]">
            <div className="relative">
              <Title>{data.title1}</Title>
              <Content value={data.content1} />
              <NumberOne />
            </div>
            <div className="relative">
              <Title>{data.title2}</Title>
              <Content value={data.content2} />
              <Magnet />
            </div>
          </div>
        </div>

        <div className="relative md:mt-0  mt-15  flex justify-center pt-10 md:order-2 order-1">
          <img
            src="/images/about_us/girl2.webp"
            className="relative w-[85vw] max-w-[350px] h-auto mt-13"
          />
          <Leaf1 />
          <Subscribe />
          <Magnifier />
          <Leaf2 />
          <SEO />
          <Leaf3 />
          <Enveloppe />
          <Crown />
          <Camera />
          <Leaf4 />
          <Leaf5 />
          <Chart />
          <Leaf6 />
          <Newspaper />
          <div
            className="absolute w-[90vw] md:w-[80vw] py-3 text-center text-black font-bold md:bottom-[-10%] bottom-[-20%]"
            dangerouslySetInnerHTML={{ __html: data.bottomText }}
          />
        </div>

        <div className="order-3">
          <LogoContainer>
            <img
              src="/Logos_Boxcom/logo-boxcom-africa.webp"
              className="w-[52vw] max-w-[200px] h-auto drop-shadow-lg/40"
            />
          </LogoContainer>
          <div className="mt-10 pl-10 pr-[15%]">
            <div className="relative">
              <Title>{data.title3}</Title>
              <Content value={data.content3} />
              <Megaphone />
            </div>
            <div className="relative">
              <Title>{data.title4}</Title>
              <Content value={data.content4} />
              <Microphone />
            </div>
            <div className="mt-8">
              <p className="text-black font-semibold">{copy.question}</p>
              <a
                href="https://boxcom-africa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 rounded-full border-2 border-black px-6 py-2 font-semibold text-black hover:bg-black hover:text-white transition-colors"
              >
                {copy.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton to="page06_screen06" />
    </section>
  );
};

export default BoxComAfrica;
