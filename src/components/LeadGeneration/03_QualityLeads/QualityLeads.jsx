'use client';
import { useEffect } from "react";
import { useIsMobile } from "../../../contexts/UserAgentProvider";
import ScrollButton from "../../DigitalMarketing/ScrollButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColumnContentWrapper from "../../Contents/ColumnContentWrapper";
import Title1 from "../../Contents/Title1";
import Subtitle1 from "../../Contents/Subtitle1";
import ParagraphText from "../../Contents/ParagraphText";
import Title2 from "../../Contents/Title2";
import TextList from "../../Contents/TextList";
import EndTitle from "../../Contents/EndTitle";
import Yes from "./Yes";
import Phone from "./Phone";
import Magnet from "./Magnet";

const QualityLeads = ({ data }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const textEl = document.getElementById("quality-leads-text");
    const imageEl = document.getElementById("cont-img-girl-with-mushrooms");

    if (textEl && imageEl) {
      const textHeight = textEl.scrollHeight;
      const imageHeight = imageEl.offsetHeight;

      if (textHeight > imageHeight) {
        const st = ScrollTrigger.create({
          trigger: "#page05_screen03",
          start: "top top",
          end: "bottom bottom",
          pin: "#cont-img-girl-with-mushrooms",
          pinSpacing: false,
          // markers: true,
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [isMobile]);

  return (
    <section id="page05_screen03" className="relative overflow-hidden !h-auto section-dark grid grid-cols-1 md:grid-cols-[55%_45%]">
      <ColumnContentWrapper id="quality-leads-text" >
        <Title1 html={data.title} />
        <Subtitle1 html={data.subtitle} />
        <ParagraphText html={data.text} />
        <Title2 html={data.subtitle2} />
        <TextList html={data.quality_leads_services}  className="[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4" />
        <EndTitle html={data.bigEndText} />
      </ColumnContentWrapper>
      
      <div id="cont-img-girl-with-mushrooms" className="relative md:overflow-visible overflow-hidden order-1 md:order-2 h-screen">
      <div className="absolute w-[110%] -left-10 md:bottom-[-15%] bottom-[-7%] z-1 -rotate-3  pointer-events-none overflow-hidden ">
        <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
      </div>
        <div className="absolute w-full h-full overflow-hidden">
          <img
            src="/images/lead_generation/bg-puzzle-heads.jpeg"
            alt="A girl under mushrooms"
            className="object-cover object-top w-full h-full"
          />
          
        </div>
        
        <Yes/>
        <Phone/>
        <Magnet/>
        <div className="absolute w-[110%] rotate-2 -left-10 md:top-[-13%] top-[-7%] z-1  pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="w-full" />
        </div>
        {/* TITRE POUR MOBILE */}
        <h2
          dangerouslySetInnerHTML={{ __html: data.title }}
          className="title block md:hidden absolute top-[12%] left-1/2 -translate-x-1/2 text-center"
        ></h2>

        {!isMobile && <ScrollButton to="page05_screen04" />}
      </div>
    </section>
  )
};

export default QualityLeads;
