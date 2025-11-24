import styles from "./NotJustAPage.module.scss";
import OrangeCandy from "./Candies/OrangeCandy";
import Calculator from "./Calculator/Calculator";
import Heart from "./Heart/Heart";
import Lolipop from "./Lolipop/Lolipop";
import Ring from "./Ring/Ring";
import Present from "./Present/Present";
import Necklace from "./Necklace/Necklace";
import Dollar from "./Dollar/Dollar";
import RedCandy from "./Candies/RedCandy";
import BlueCandy from "./Candies/BlueCandy";
import Button1 from "./Calculator/Button1";
import Button2 from "./Calculator/Button2";
import Button3 from "./Calculator/Button3";
import ScrollButton from "../../Buttons/ScrollButton";
import BottomSection from "./BottonSection";

const NotJustAPage = ({ data }) => {
  const titleHtml = data.title_1.replace("styles.pinkBg", styles.pinkBg);
  return (
    <section id="page04_screen01" className="w-full h-screen overflow-hidden">
      <h1 className="hidden">{data.main_title}</h1>
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="/images/web_dev/bg-colors.jpeg"
          alt="Background"
        />
      </div>
      <div className="absolute -bottom-25 left-0 md:w-[60%] w-[140%] max-h-[80%] md:max-h-full">
        <Heart />
        <OrangeCandy />
        <RedCandy />
        <BlueCandy />
        <Dollar />
        <Calculator />
        <Button1 />
        <Button2 />
        <Button3 />
        <img
          src="/images/web_dev/woman-cart.png"
          alt="Shopping girl"
          className="w-full h-full"
        />
        <Lolipop />
      </div>
      <Ring />
      <Necklace />
      {/* <RedFlower/> */}
      <Present />
      <BottomSection data={data} />

      {/* TEXTE A DROITE */}
      <div className="absolute md:right-[5%] lg:right-[10%] xl:right-[15%] sm:top-[20%] top-[15%] md:w-auto w-full">
        <h3
          className="heading-tertiary text-center !text-[2rem] sm:leading-[1] sm:!text-[3rem]"
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        ></h3>
        <h3
          className="heading-tertiary text-center !text-[2.5rem] sm:!text-[3rem] mt-5 sm:mt-0"
          dangerouslySetInnerHTML={{ __html: data.title_2 }}
        ></h3>
      </div>
      <div className="hidden md:block">
        <ScrollButton to="page04_screen02" />
      </div>
    </section>
  );
};
export default NotJustAPage;
