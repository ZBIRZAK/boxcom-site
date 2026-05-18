"use client";

import Button2 from "../../../components/Buttons/Button2";
import ScrollButton from "../../Buttons/ScrollButton";
import TopSection from "./TopSection";
import { formatUrl } from "../../../lib/urls";
import { useRouter } from "next/navigation";

const StillDoubting = ({ data }) => {
  const router = useRouter();
  // console.log(data);
  const videoId = data.youtube_id;

  return (
    <section
      id="page01_screen08"
      className={
        "section-light bg-white w-full relative overflow-hidden md:min-h-screen !h-auto flex justify-center z-30"
      }
    >
      <div className="w-full max-w-[850px]">
        <div className="h-[110px] md:h-[160px]">
          <TopSection data={data} />
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&modestbranding=1&rel=0`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
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
