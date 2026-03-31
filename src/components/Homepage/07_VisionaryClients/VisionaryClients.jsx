import styles from "./VisionaryClients.module.scss";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Zigzag from "./Zigzag/Zigzag";

const VisionaryClients = ({ data }) => {
  const clients = Object.entries(data)
    .filter(([key, value]) => {
      return /^client_\d/.test(key) && !!value.img;
    })
    .map(([key, value]) => value);

  return (
    <div
      id="page01_screen07"
      className="w-full bg-black h-auto relative z-30 overflow-x-hidden md:!h-screen md:min-h-screen"
    >
      {/* <div className="w-full h-full absolute top-0 left-0 z-0">
        <img
          src="/images/homepage/books-sky.webp"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="relative z-10 flex flex-col items-center h-full">
        <div>
          <h2 className="heading-primary heading-primary--stroke text-center !text-[2.3rem] leading-none mb-3 mt-12 md:!text-[3.5rem] md:h-[18vh] md:mt-16">
            {data.title}
          </h2>
          <Zigzag />
        </div>
        <div className="relative w-full max-w-[1400px] mx-auto min-h-[50vh] md:h-[72vh] grid grid-cols-3 md:grid-cols-6 auto-rows-min content-start md:content-center place-items-center gap-y-4 gap-x-2 px-3 pb-3 pt-2 md:p-4 md:px-8 md:gap-y-5 md:gap-x-6 [&>img]:min-w-0 [&>img]:max-w-full [&>img]:w-[92%] md:[&>img]:w-[94%] [&>img]:h-auto [&>img]:max-h-[64px] sm:[&>img]:max-h-[74px] md:[&>img]:max-h-[130px] [&>img]:object-contain">
          {clients.map((client, i) => {
            return (
              <img
                key={i}
                src={client.img}
                alt={client.alt}
                loading="lazy"
                decoding="async"
              />
            );
          })}
        </div>
        <div className="hidden md:block">
          <ScrollButton
            delay={0}
            containerStyles={styles.scrollButtonContainer}
            to="page01_screen08"
          />
        </div>
      </div>

      {/* Ripped paper effect at the top of this section */}
      {/* <div className="absolute z-99999 w-full top-[-1%] md:top-[-4%] left-0 right-0 pointer-events-none overflow-hidden">
          <img
            src="/images/objects/torn-papers/torn-paper-6.svg"
            alt="Torn sheet"
            className="w-full"
          />
      </div> */}

      {/* Ripped paper effect at the top of this section */}
      {/* <div className="absolute z-99999 w-full bottom-[-1%] md:bottom-[-4%] left-0 right-0 pointer-events-none overflow-hidden">
          <img
            src="/images/objects/torn-papers/torn-paper-7.svg"
            alt="Torn sheet"
            className="w-full"
          />
      </div> */}
  </div>

  );
};
export default VisionaryClients;
