"use client";

import { useState } from "react";

const HeroAboutUs = () => {
  const [videoActive, setVideoActive] = useState(true);

  return (
    <section
      id="page06_screen01"
      className="bg-black relative md:!h-screen !h-auto w-full overflow-hidden section-light pt-[70px] lg:pt-0"
    >
      {videoActive ? (
        <div className="relative inset-0">
          <video
            src="/videos/teaser-boxcom.mp4"
            autoPlay
            muted
            className="relative w-full h-full object-cover obect-top"
            onEnded={() => {
              setVideoActive(false);
            }}
          />
        </div>
      ) : (
        <div className="relative inset-0">
          <img
            src="/images/about_us/bg-boxcom.jpg"
            alt="Boxcom"
            className="relative w-full h-full object-cover object-top"
          />
          <img
            onClick={() => {
              setVideoActive(true);
            }}
            src="/images/buttons/play2.svg"
            className="absolute w-[30%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 opacity-50 hover:opacity-80 transition-opacity"
          />
        </div>
      )}
    </section>
  );
};

export default HeroAboutUs;
