import Button2 from "../../Buttons/Button2";
import styles from "./OurServices.module.scss";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Link from "next/link";
import { formatUrl, localizeUrl, urls } from "../../../lib/urls";

const serviceHelperCopy = {
  en: {
    intro: "Looking for more context before choosing a service? Visit our",
    about: "About page",
    middle: "to learn how Boxcom works, or explore the",
    blog: "Blog",
    outro:
      "for insights on digital marketing, creative content, lead generation, and web development.",
  },
  fr: {
    intro:
      "Vous souhaitez mieux comprendre notre approche avant de choisir un service ? Consultez notre",
    about: "page A Propos",
    middle: "pour decouvrir comment Boxcom travaille, ou explorez le",
    blog: "Blog",
    outro:
      "pour des insights sur le marketing digital, le contenu creatif, la generation de leads et le developpement web.",
  },
};

function ensureImgAltAttributes(html = "") {
  return html.replace(/<img(?![^>]*\balt=)/gi, '<img alt=""');
}

const Service = ({ contents, locale }) => {
  return (
    <Link href={formatUrl(contents.link, locale)} className={styles.box}>
      <h3 className="title2 text-center !text-[#ff0062] md:mb-0 mb-4 ">
        {contents.title}
      </h3>
      <p className="subtitle2 ">{contents.subtitle}</p>
      <div
        className="mb-3 text"
        dangerouslySetInnerHTML={{ __html: contents.description }}
      />
      <div className="flex justify-center">
        <Button2 variant="ghost" end="arrow" size="lg">
          {contents.button}
        </Button2>
      </div>
    </Link>
  );
};

const OurServices = ({ data, locale }) => {
  const values = Array.from({ length: 4 }, (_, i) => i + 1);
  const copy = serviceHelperCopy[locale] || serviceHelperCopy.en;
  // console.log({data});
  return (
    <section
      id="page01_screen06"
      className={`${styles.screen6} section-dark z-30`}
    >
      <div className="max-w-[1000px]">
        <h2
          className={`hero-title2 text-center mb-3 md:mt-5 [&_span]:relative [&_span]:inline-block [&_img]:absolute [&_img]:top-[0%] [&_img]:left-[50%] [&_img]:transform [&_img]:translate-x-[-50%] [&_img]:w-[200px] [&_img]:block`}
          dangerouslySetInnerHTML={{
            __html: ensureImgAltAttributes(data.title),
          }}
        ></h2>
        <div className={styles.grid}>
          {values.map((i) => {
            const content = data.services["service_" + i];
            return <Service key={i} contents={content} locale={locale} />;
          })}
        </div>
        <p className="mx-auto mt-8 max-w-[760px] text-center text-balance text-white/85 text-base leading-7">
          {copy.intro}{" "}
          <Link
            href={localizeUrl(urls.about, locale)}
            className="underline underline-offset-4"
          >
            {copy.about}
          </Link>{" "}
          {copy.middle}{" "}
          <Link
            href={localizeUrl(urls.blog, locale)}
            className="underline underline-offset-4"
          >
            {copy.blog}
          </Link>{" "}
          {copy.outro}
        </p>
      </div>
      <div className="hidden md:block">
        <ScrollButton
          containerStyles={styles.scrollButtonContainer}
          to="page01_screen07"
          delay={0}
        />
      </div>

      {/* Ripped paper effect at the bottom of this section */}
      {/* <div className="absolute z-99999 w-full top-[-2%] left-0 right-0 pointer-events-none overflow-hidden">
        <img
          src="/images/objects/torn-papers/torn-paper-10.svg"
          alt="Torn sheet"
          className="w-full"
        />
      </div> */}
    </section>
  );
};

export default OurServices;
