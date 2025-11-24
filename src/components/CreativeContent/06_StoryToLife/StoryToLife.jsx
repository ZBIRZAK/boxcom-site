"use client";

import Button2 from "../../Buttons/Button2";
import Dog from "./Dog/Dog";
import Like from "./Like/Like";
import Moustache from "./Moustache/Moustache";
import Follow from "./Follow/Follow";
import Heart from "./Heart/Heart";
import FireWork from "./FireWork/FireWork";
import ButtonCTA from "./ButtonCTA";

const StoryToLife = ({ data }) => {
  return (
    <section
      id="page02_screen06"
      className="relative h-screen w-full overflow-hidden"
    >

      <div className="absolute inset-0 w-full h-full ">
        <img
          src="/images/creative_content/metro.jpeg"
          className="h-full w-full object-cover object-left md:object-center"
        />
        <div className="absolute md:w-[55%] w-[100%] md:top-[-15%] top-[-7%] -left-10   pointer-events-none overflow-hidden ">
          <img src="/images/objects/torn_sheet.png" alt="Torn sheet" className="  w-full  " />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2  w-[105%]  md:left-auto md:right-[20%] md:translate-x-0 md:w-[33%]">
          <img src="/images/creative_content/man-yellow-costume.png" alt="" />
          <Moustache />
          <Heart />
        </div>
        <Dog />
        <Like />
        <Follow />
      </div>
      <div className=" absolute inset-0 w-full h-full md:w-[65%] md:h-[60%] md:left-30 md:top-[30%]">
        <div className=" w-full md:w-[60%] md:h-auto flex flex-col justify-center items-center text-center mt-30 md:mt-0">
          <h3
            dangerouslySetInnerHTML={{ __html: data.title1 }}
            className="heading-tertiary md:mb-8 mb-4 md:!text-[3rem] !text-[2em] drop-shadow-lg/50"
          />
          <h3
            dangerouslySetInnerHTML={{ __html: data.title2 }}
            className="heading-tertiary bg-[#ff0062] py-[0.2em] px-[1em] rounded-[20px] md:!text-[3rem] !text-[2em]  drop-shadow-lg/50"
          ></h3>
          <FireWork />
        </div>
        <div className="absolute bottom-14 w-full h-[20%] p-4 md:p-0 md:static md:w-[60%] md:h-[80%] flex flex-col justify-center items-center">
          <p
            dangerouslySetInnerHTML={{ __html: data.text }}
            className="text-center text-lg md:text-2xl font-bold md:font-bold mb-8 mt-0 md:mt-0"
          ></p>
          <div className="w-[70%] font-bold text-2xl flex justify-center items-center mt-6 text-white md:mt-0">
            {/* <Button label="Let's Talk" emoji={true} /> */}
            <ButtonCTA data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default StoryToLife;
