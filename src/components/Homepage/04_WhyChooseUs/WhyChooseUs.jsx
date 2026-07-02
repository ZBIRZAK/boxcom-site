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
      className="relative min-h-screen overflow-hidden w-full z-30"
      ref={sectionRef}
    >
      <img
        src="/images/homepage/bg-why-choose-us.webp"
        alt="Why choose BoxCom"
        className="absolute w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/25 md:hidden" />

      <div className="relative z-10 px-5 pb-[96px] pt-[96px] text-white md:hidden">
        <div
          className="relative mx-auto mb-8 h-[360px] max-w-[360px] text-transparent"
          style={{
            fontFamily:
              "Impact, \"Anton\", Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            WebkitTextStroke: "2px white",
            textStroke: "2px white",
          }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 text-[5.2rem] leading-none">
            {data.why.toUpperCase()}
          </div>
          <div className="absolute left-1/2 top-[6.3rem] -translate-x-1/2 text-[5.9rem] leading-none">
            {data.choose.toUpperCase()}
          </div>
          <div className="absolute left-1/2 top-[12.9rem] -translate-x-1/2 text-[5.2rem] leading-none">
            {data.us.toUpperCase()}
          </div>

          <div className="absolute left-1/2 top-[9.4rem] w-[150px] -translate-x-1/2">
            <img
              src="/images/shapes/zigzag-pink.svg"
              alt=""
              aria-hidden="true"
              className="w-full"
            />
          </div>
        </div>

        <div
          className="mb-6 text-[1rem] italic leading-[1.65] [&_p]:mb-4 [&_p]:leading-[1.65]"
          dangerouslySetInnerHTML={{ __html: data.paragraph }}
        ></div>

        <h3 className="max-w-[11ch] text-[2.1rem] font-bold leading-[1.05]">
          {data.title}
        </h3>

        <div className="mt-5">
          <Button2
            dark={true}
            variant="outline"
            size="lg"
            end="arrow"
            className="w-full justify-center"
            onClick={() => router.push(formatUrl(data.button_link))}
          >
            {data.ct_button}
          </Button2>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-0 hidden h-[72svh] text-transparent text-[4.2rem] md:block md:h-screen md:text-[10rem]"
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
          className="absolute top-[19%] left-[10%]"
        >
          {data.why.toUpperCase()}
        </div>
        <div
          ref={why2Ref}
          className="absolute top-[19%] left-[10%] opacity-0"
        >
          {data.why.toUpperCase()}
        </div>

        {/* CHOOSE */}
        <div
          ref={chooseRef}
          className="absolute top-[32%] lg:top-[36%] left-[62%] lg:left-[58%] -translate-x-1/2"
        >
          {data.choose.toUpperCase()}
        </div>

        {/* US */}
        <div
          ref={usRef}
          className="absolute top-[68%] right-[15%]"
        >
          {data.us.toUpperCase()}
        </div>
        <div
          ref={us2Ref}
          className="absolute top-[68%] right-[15%] opacity-0"
        >
          {data.us.toUpperCase()}
        </div>
      </div>

      <div className="hidden md:block">
        <ZigZag />
      </div>

      <div className="absolute bottom-10 left-[8%] hidden w-[34%] max-w-[460px] px-0 text-white z-2 md:block lg:bottom-16 lg:w-[38%] lg:max-w-[520px]">
        <div
          ref={paragraphRef}
          className="mb-4 text-[0.95rem] italic leading-[1.6] lg:text-[1rem] lg:leading-[1.7] [&_p]:mb-3 [&_p]:leading-[1.6] lg:[&_p]:leading-[1.7]"
          dangerouslySetInnerHTML={{ __html: data.paragraph }}
        ></div>
        <h3 className="mt-2 max-w-[16ch] text-[2rem] font-bold leading-[1.12] lg:max-w-[20ch] lg:text-[2.8rem]">
          {data.title}
        </h3>
        <div className="relative mt-6">
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
