"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZigZag from "../../Doodles/ZigZag/ZigZag";
import Button2 from "../../Buttons/Button2";
import ScrollButton from "../../Buttons/ScrollButton";
import { useRouter } from "next/navigation";
import { formatUrl, urls } from "../../../lib/urls";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = ({ data }) => {
  const sectionRef = useRef();
  const whyRef = useRef();
  const why2Ref = useRef();
  const chooseRef = useRef();
  const usRef = useRef();
  const us2Ref = useRef();
  const paragraphRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "top 10%",
          toggleActions: "restart none none reset",
        },
      });

      tl.fromTo(
        whyRef.current,
        { opacity: 0, x: -500 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(why2Ref.current, { opacity: 0.7, xPercent: 0 });
            gsap.to(why2Ref.current, {
              opacity: 0,
              xPercent: 500,
              duration: 7,
              ease: "power4.out",
            });
          },
        }
      )
        .fromTo(
          chooseRef.current,
          { opacity: 0, y: 50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
        )
        .fromTo(
          usRef.current,
          { opacity: 0, x: 500, rotateY: 30 },
          { opacity: 1, x: 0, rotateY: 0, duration: 0.5, ease: "power3.in" }
        )
        .set(us2Ref.current, { opacity: 0.2, x: 0 })
        .to(
          us2Ref.current,
          {
            opacity: 0,
            xPercent: -500,
            duration: 7,
            ease: "power4.out",
          },
          ">"
        );

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 90%",
            end: "top 70%",
            // markers: true,
            scrub: 2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="page01_screen04"
      className="relative min-h-[120vh] md:min-h-screen w-full z-30"
      ref={sectionRef}
    >
      <img
        src="/images/homepage/bg-why-choose-us.webp"
        alt="Why choose BoxCom"
        className="absolute w-full h-full object-cover object-center"
      />

      <div
        className="w-full h-screen absolute text-transparent text-[5rem] md:text-[10rem]"
        style={{
          fontFamily:
            "Impact, \"Anton\", Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          WebkitTextStroke: "3px white",
          textStroke: "3px white",
        }}
      >
        {/* WHY */}
        <div
          ref={whyRef}
          className="absolute top-[10%] md:top-[19%] left-[10%]"
        >
          {data.why.toUpperCase()}
        </div>
        <div
          ref={why2Ref}
          className="absolute top-[10%] md:top-[19%] left-[10%] opacity-0"
        >
          {data.why.toUpperCase()}
        </div>

        {/* CHOOSE */}
        <div
          ref={chooseRef}
          className="absolute top-[30%] md:top-[32%] lg:top-[36%] left-1/2 md:left-[62%] lg:left-[58%] -translate-x-1/2"
        >
          {data.choose.toUpperCase()}
        </div>

        {/* US */}
        <div
          ref={usRef}
          className="absolute top-[50%] md:top-[68%] right-[10%] md:right-[15%]"
        >
          {data.us.toUpperCase()}
        </div>
        <div
          ref={us2Ref}
          className="absolute top-[50%] md:top-[68%] right-[10%] md:right-[15%] opacity-0"
        >
          {data.us.toUpperCase()}
        </div>
      </div>

      <ZigZag />

      <div className="absolute top-[61%] left-0 w-full px-3 color-white z-2 md:top-auto md:bottom-10 md:left-[8%] md:w-[34%] md:max-w-[460px] md:px-0 lg:bottom-16 lg:w-[38%] lg:max-w-[520px]">
        <div
          ref={paragraphRef}
          className="mb-4 text-[0.95rem] italic leading-[1.55] md:text-[0.95rem] md:leading-[1.6] lg:text-[1rem] lg:leading-[1.7] [&_p]:mb-3 [&_p]:leading-[1.55] md:[&_p]:leading-[1.6] lg:[&_p]:leading-[1.7]"
          dangerouslySetInnerHTML={{ __html: data.paragraph }}
        ></div>
        <h3 className="mt-2 max-w-[18ch] text-[1.6rem] font-bold leading-[1.15] md:max-w-[16ch] md:text-[2rem] lg:max-w-[20ch] lg:text-[2.8rem] md:leading-[1.12]">
          {data.title}
        </h3>
        <div className="relative mt-4 md:mt-6">
          <Button2
            dark={true}
            variant="outline"
            size="xl"
            end="arrow"
            className="w-fit"
            onClick={() => router.push(formatUrl(data.button_link))}
          >
            {data.ct_button}
          </Button2>
        </div>
      </div>

      <div className="hidden md:block">
        <ScrollButton to="page01_screen05" />
      </div>

      {/* Ripped paper effect at the bottom of this section */}
      {/* <div className="absolute z-99999 w-full md:top-[-4%] top-[-2%] left-0 right-0 pointer-events-none overflow-hidden">
        <img
          src="/images/objects/torn-papers/torn-paper-8.svg"
          alt="Torn sheet"
          className="w-full"
        />
      </div> */}
    </section>
  );
};

export default WhyChooseUs;
