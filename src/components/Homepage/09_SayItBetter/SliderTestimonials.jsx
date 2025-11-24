import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  // EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/autoplay";
// import "swiper/css/effect-coverflow";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useCallback, useRef } from "react";
import clsx from "clsx";

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const Arrow = ({ ref, prev = true, onClick }) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={clsx(
        "group cursor-pointer absolute z-10 transition-all flex items-center justify-center",
        "w-10 h-10 md:w-20 md:h-20",
        prev ? "left-[-40px] md:left-[-70px]" : "right-[-40px] md:right-[-70px]"
      )}
    >
      <img
        src={
          prev
            ? "/images/arrows/chevron-left.svg"
            : "/images/arrows/chevron-right.svg"
        }
        className={clsx("h-[70%] transition-all group-hover:scale-120")}
      />
    </button>
  );
};

const SliderTestimonials = ({ testimonials }) => {
  const sliderRef = useRef(null);
  const prevRef = useRef();
  const nextRef = useRef();
  const isMD = useMediaQuery("(max-width: 768px)");

  // const pages = chunkArray(testimonials, 3);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="flex items-center relative">
      <Arrow ref={prevRef} prev={true} onClick={handlePrev} />
      <Swiper
        ref={sliderRef}
        // effect={"coverflow"}
        // grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={"auto"}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={30}
        slidesPerView={isMD ? 1 : 3}
        // navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
        // pagination={
        //   {
        //     // clickable: true,
        //     // el: ".sliderNav",
        //     // renderBullet: (_, className) => {
        //     //   return `<span class="${className} inline-block w-[10px] h-[10px] rounded-full bg-white/35 border-2 border-[#111] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"></span>`;
        //     // },
        //   }
        // }
        onBeforeInit={(swiper) => {
          swiper.navigation.prevEl = prevRef.current;
          swiper.navigation.nextEl = nextRef.current;
        }}
        modules={[Pagination, Autoplay, A11y, Navigation]}
        className="max-w-[300px] md:max-w-[1000px] !h-full"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            {/* <div className="grid grid-cols-1 md:[grid-template-columns:repeat(3,minmax(260px,1fr))] gap-8 w-full mt-[5%]"> */}
            {/* <div className="flex  gap-8 w-full mt-[5%]"> */}
            {/* {pageItems.map((item, j) => ( */}
            <article
              key={item.name}
              className="h-[60vh] bg-[#f8026980] text-white rounded-[14px] py-6 px-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] border-2 border-white"
              aria-label="Testimonial"
            >
              <h3 className="tracking-[0.2px] mb-[0.35rem] text-[1.7rem] font-[impact,anton,sans-serif] leading-[1em]">
                {item.name}
              </h3>
              <p className="italic text-sm h-[44px] overflow-hidden">
                {item.job}
              </p>
              <p className="mt-5">&ldquo;{item.quote}&rdquo;</p>
            </article>
            {/* ))} */}
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      <Arrow ref={nextRef} prev={false} onClick={handleNext} />
      {/*  */}
      {/* <div className="swiper-button-prev">PREV</div> */}
      {/* <div className="swiper-button-next">NEXT</div> */}

      {/* Petits points pour indiquer la pagination */}
      {/* <div
        className="sliderNav flex gap-2 justify-center mt-4"
        role="tablist"
        aria-label="Testimonials pages"
        aria-live="polite"
      /> */}
    </div>
  );
};

export default SliderTestimonials;
