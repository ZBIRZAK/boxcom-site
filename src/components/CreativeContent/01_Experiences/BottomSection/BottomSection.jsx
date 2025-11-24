"use client";

import { useRouter } from "next/navigation";
import Button2 from "../../../Buttons/Button2";
import { formatUrl, urls } from "../../../../lib/urls";

const BottomSection = ({data}) => {
  console.log("BottomSection DATA:", data);
  const router = useRouter();
  return (
    <div className="absolute bottom-0 w-full flex justify-center items-center h-[9%] bg-[#ff0062] z-1">
      <div className="w-[40%] font-bold text-2xl flex justify-center items-center text-white">
        {/* <Button2 className="btn-cta" label="Let's Talk" emoji={true} /> */}
        <Button2
          end="emoji"
          size="lg"
          className="!text-4xl !px-12 hover:!border-white"
          customEmojiSize={35}
          onClick={() => {
            router.push(formatUrl(data.button_link));
          }}
        >
          <span className="whitespace-nowrap">{data.button_cta}</span>
        </Button2>
      </div>
    </div>
  );
};
export default BottomSection;
