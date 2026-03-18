"use client";

const HeroAboutUs = () => {
  return (
    <section
      id="page06_screen01"
      className="bg-black relative md:!h-screen !h-auto w-full overflow-hidden section-light pt-[70px] lg:pt-0"
    >
      <div className="relative inset-0">
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          poster="/images/about_us/bg-boxcom.webp"
          className="relative w-full h-full object-cover object-top"
        >
          <source src="/videos/teaser-boxcom.webm" type="video/webm" />
          <source src="/videos/teaser-boxcom.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroAboutUs;
