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
      className="relative md:!h-screen !h-[120vh] w-full overflow-hidden z-30"
      ref={sectionRef}
    >
      <img
        src="/images/homepage/bg-why-choose-us.jpg"
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
          className="absolute top-[30%] md:top-[45%] left-1/2 -translate-x-1/2"
        >
          {data.choose.toUpperCase()}
        </div>

        {/* US */}
        <div
          ref={usRef}
          className="absolute top-[50%] md:top-[78%] right-[10%] md:right-[15%]"
        >
          {data.us.toUpperCase()}
        </div>
        <div
          ref={us2Ref}
          className="absolute top-[50%] md:top-[78%] right-[10%] md:right-[15%] opacity-0"
        >
          {data.us.toUpperCase()}
        </div>
      </div>

      <ZigZag />

      <div className="absolute top-[61%] md:top-[60%] left-0 px-3 md:px-0 md:left-[8%] w-full md:w-[40%] color-white z-2">
        <div
          ref={paragraphRef}
          className="text-[0.9rem] md:text-[1rem] italic mb-4"
          dangerouslySetInnerHTML={{ __html: data.paragraph }}
        ></div>
        <h3 className="text-[1.6rem] md:text-[2.8rem] font-bold mt-2">
          {data.title}
        </h3>
        <div className="relative mt-4 md:mt-6">
          <Button2
            dark={true}
            variant="outline"
            size="xl"
            end="arrow"
            onClick={() => router.push(formatUrl(data.button_link))}
          >
            {data.ct_button}
          </Button2>
        </div>
      </div>

      <div className="hidden md:block">
        <ScrollButton to="page01_screen05" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
