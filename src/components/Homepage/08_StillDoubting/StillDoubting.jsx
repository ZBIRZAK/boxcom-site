"use client";

import Button2 from "../../../components/Buttons/Button2";
import ScrollButton from "../../Buttons/ScrollButton";
import TopSection from "./TopSection";
import { formatUrl, urls } from "../../../lib/urls";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const StillDoubting = ({ data }) => {
  const router = useRouter();
  // console.log(data);
  const videoId = data.youtube_id;
  const iframeRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="page01_screen08"
      className={
        "section-light bg-white w-full relative overflow-hidden md:!h-screen !h-auto flex justify-center z-30"
      }
    >
      <div className="w-full max-w-[850px]">
        <div className="h-[110px] md:h-[160px]">
          <TopSection data={data} />
        </div>

        <div
          className="aspect-video relative overflow-hidden rounded-lg cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-[#FF0000] cursor-pointer rounded-[20%] md:rounded-[30%] p-0 md:p-2 flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 68 48"
                    className="w-10 md:w-18 h-auto"
                  >
                    <path
                      d="M66.52 7.37a8 8 0 0 0-5.63-5.66C55.79.43 34 .43 34 .43s-21.79 0-26.89 1.28a8 8 0 0 0-5.63 5.66A83.06 83.06 0 0 0 0 24a83.06 83.06 0 0 0 1.48 16.63 8 8 0 0 0 5.63 5.66C12.21 47.57 34 47.57 34 47.57s21.79 0 26.89-1.28a8 8 0 0 0 5.63-5.66A83.06 83.06 0 0 0 68 24a83.06 83.06 0 0 0-1.48-16.63z"
                      fill="#FF0000"
                    />
                    <path d="M45 24 27 14v20z" fill="#fff" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>

        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 md:mt-4  z-10 "> */}
        {/* <div className="">
          <Button dark={true} />
        </div> */}
        <div className="flex justify-center my-8 md:my-4">
          <Button2
            end="arrow"
            size="xl"
            dark={false}
            onClick={() => router.push(formatUrl(data.button_link))}
          >
            {data.cta_button}
          </Button2>
        </div>
      </div>

      <div className="hidden md:block">
        <ScrollButton to="page01_screen09" />
      </div>
    </section>
  );
};
export default StillDoubting;
