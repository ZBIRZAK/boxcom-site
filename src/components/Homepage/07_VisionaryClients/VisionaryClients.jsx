import styles from "./VisionaryClients.module.scss";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Zigzag from "./Zigzag/Zigzag";

const VisionaryClients = ({ data }) => {
  const clients = Object.entries(data || {})
    .filter(([key, value]) => {
      return /^client_\d/.test(key) && !!value.img;
    })
    .map(([key, value]) => value);

  return (
    <div
      id="page01_screen07"
      className="relative z-30 w-full overflow-hidden bg-black"
    >
      <div className="relative z-10 mx-auto flex w-[92%] max-w-[1700px] flex-col items-center pb-7 pt-11 md:w-full md:px-6 md:pb-8 md:pt-12 lg:px-8">
        <div className="mb-3 md:mb-4">
          <h2 className="heading-primary heading-primary--stroke text-center !text-[2.2rem] leading-none md:!text-[3.3rem]">
            {data.title}
          </h2>
          <Zigzag />
        </div>

        <div className="grid w-full grid-cols-3 place-items-center gap-x-1.5 gap-y-2.5 py-4 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-3 sm:py-5 md:grid-cols-7 md:gap-x-2.5 md:gap-y-3 md:py-6 lg:gap-x-3 lg:gap-y-3.5 lg:py-7">
          {clients.map((client, i) => {
            return (
              <img
                key={i}
                src={client.img}
                alt={client.alt || `Client logo ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-auto w-[90%] max-w-[190px] max-h-[58px] object-contain sm:max-h-[64px] md:w-[95%] md:max-h-[78px] lg:max-h-[84px]"
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
    </div>
  );
};
export default VisionaryClients;
