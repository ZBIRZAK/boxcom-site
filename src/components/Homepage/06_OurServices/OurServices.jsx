import Button2 from "../../Buttons/Button2";
import styles from "./OurServices.module.scss";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Link from "next/link";
import { formatUrl } from "../../../lib/urls";

const Service = ({ contents }) => {
  return (
    <Link href={formatUrl(contents.link)} className={styles.box}>
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

const OurServices = ({ data }) => {
  const values = Array.from({ length: 4 }, (_, i) => i + 1);
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
            __html: data.title,
          }}
        ></h2>
        <div className={styles.grid}>
          {values.map((i) => {
            const content = data.services["service_" + i];
            return <Service key={i} contents={content} />;
          })}
        </div>
      </div>
      <div className="hidden md:block">
        <ScrollButton
          containerStyles={styles.scrollButtonContainer}
          to="page01_screen07"
          delay={0}
        />
      </div>
    </section>
  );
};

export default OurServices;
