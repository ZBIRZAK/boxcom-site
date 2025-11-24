"use client";

import BtnGoogleMyBusiness from "./BtnGoogleMyBusiness";
import SliderTestimonials from "./SliderTestimonials";
import ScrollButton from "../../Buttons/ScrollButton";
import clsx from "clsx";

export default function SayItBetter({ data }) {
  const testimonials = Object.values(data.testimonials);
  // console.log({ testimonials, pages });
  const titleHtml = (data?.title || "")
    .replace("<span>", '<span class="relative inline-block text-[#ff0078]">')
    .replace(
      "</span>",
      '<img src="/images/Design-line.gif" alt="" class="absolute left-20 -bottom-25 md:-bottom-28 w-[45%]"/></span>'
    );

  return (
    <section
      id="page01_screen09"
      className="bg-[url('/images/bg-screen6-9-3.webp')] bg-center bg-cover bg-no-repeat !h-auto flex flex-col items-center relative overflow-hidden z-30"
    >
      <h2
        className="heading-secondary heading-secondary--white mt-[80px] relative !text-[2rem] md:!text-[2.5rem]"
        dangerouslySetInnerHTML={{ __html: titleHtml }}
      />
      {/* <FallingStars /> */}

      <div className="mt-15">
        <SliderTestimonials testimonials={testimonials} />
      </div>

      <div
        className={clsx(
          "my-5 w-[min(1000px,92%)] border border-white/40 md:border-white/20",
          "bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(255,255,255,0.08)_100%)]",
          "rounded-2xl md:px-22 py-4",
          "grid grid-cols-[45%_55%] md:grid-cols-[200px_1fr_350px] items-center gap-1 md:gap-4 relative"
        )}
      >
        <div className="flex flex-col items-center md:items-start text-white">
          <div className="flex items-center gap-[.7rem]">
            <span className="text-[2.5rem] md:text-[3.5rem] font-black font-[Impact,Arial,sans-serif] text-[#FFD700]">
              {data.google_rating}
            </span>
            <img
              className="w-[35px] md:w-[52px] h-auto block -rotate-20"
              src="/images/shapes/star.svg"
              alt="star"
            />
          </div>
          <span className="font-bold text-[0.85rem] opacity-85 mt-1">
            On Google
          </span>
        </div>

        <div
          className="text-white font-bold leading-[1.2] text-[0.9em] md:text-[1em] italic pr-3"
          dangerouslySetInnerHTML={{ __html: data.pitch }}
        />

        <div className="hidden md:flex md:justify-end">
          <BtnGoogleMyBusiness link={data.url_reviews}>
            {data.google_reviews_button}
          </BtnGoogleMyBusiness>
        </div>
      </div>

      <div className="md:hidden mt-5 mb-12">
        <BtnGoogleMyBusiness link={data.url_reviews}>
          {data.google_reviews_button}
        </BtnGoogleMyBusiness>
      </div>

      <div className="hidden md:block">
        <ScrollButton to="page01_screen11" />
      </div>
    </section>
  );
}
