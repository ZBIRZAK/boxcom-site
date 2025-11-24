"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const PageTestScroll = () => {
  const arrA = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#screen2", // section containing text + image
      start: "top top", // when screen2 top hits top of viewport
      end: "bottom bottom", // when screen2 bottom hits bottom of viewport
      pin: "#img2", // pin the image column
      pinSpacing: false, // optional: remove extra spacing
    });

    return () => ScrollTrigger.killAll(); // cleanup when unmount
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#screen3", // section containing text + image
      start: "top top", // when screen2 top hits top of viewport
      end: "bottom bottom", // when screen2 bottom hits bottom of viewport
      pin: "#img3", // pin the image column
      pinSpacing: false, // optional: remove extra spacing
    });

    return () => ScrollTrigger.killAll(); // cleanup when unmount
  }, []);

  return (
    <div>
      <div
        id="screen1"
        className="h-screen bg-blue-950 color-white w-full border border-amber-500 flex justify-center items-center text-5xl"
      >
        SCREEN 1 (100vh)
      </div>

      <div
        id="screen2"
        className="color-white w-full border border-b-cyan-400 grid grid-cols-[60%_40%]"
      >
        <div id="text2" className="pt-[60px]">
          <div className="p-5">
            <h2 className="text-4xl mb-3">SCREEN 2 TITLE</h2>
            {arrA.map((i) => (
              <p key={i} className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                possimus exercitationem dolorum modi saepe libero odit alias
                veritatis vero eligendi accusantium, in beatae natus temporibus
                inventore eius deserunt sint! Labore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laborum possimus exercitationem
                dolorum modi saepe libero odit alias veritatis vero eligendi
                accusantium, in beatae natus temporibus inventore eius deserunt
                sint! Labore.
              </p>
            ))}
          </div>
        </div>
        <div
          id="img2"
          className="h-screen flex justify-center items-center bg-amber-800 text-5xl text-center w-full"
        >
          IMAGE
          <br />
          SCREEN 2
        </div>
      </div>

      <div
        id="screen3"
        className="color-white w-full border border-b-cyan-400 grid grid-cols-[40%_60%]"
      >
        <div
          id="img3"
          className="h-screen flex justify-center items-center bg-amber-800 text-5xl text-center"
        >
          IMAGE
          <br />
          SCREEN 3
        </div>
        <div id="text3" className="pt-[60px]">
          <div className="p-5">
            <h2 className="text-4xl mb-3">SCREEN 3 TITLE</h2>
            {arrA.map((i) => (
              <p key={i} className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                possimus exercitationem dolorum modi saepe libero odit alias
                veritatis vero eligendi accusantium, in beatae natus temporibus
                inventore eius deserunt sint! Labore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laborum possimus exercitationem
                dolorum modi saepe libero odit alias veritatis vero eligendi
                accusantium, in beatae natus temporibus inventore eius deserunt
                sint! Labore.
              </p>
            ))}
          </div>
        </div>
      </div>

      <div
        id="screen4"
        className="h-screen bg-blue-950 color-white w-full border border-amber-500 flex justify-center items-center text-5xl"
      >
        SCREEN 4 (100vh)
      </div>
    </div>
  );
};

export default PageTestScroll;
