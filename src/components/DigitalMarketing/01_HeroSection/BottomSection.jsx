"use client";

import { useRouter } from "next/navigation";
import Button2 from "../../Buttons/Button2";
import { formatUrl, urls } from "../../../lib/urls";

const BottomSection = ({ data }) => {
  const router = useRouter();

  return (
    <div className="absolute bottom-0 w-full flex justify-center items-center h-[9%] bg-[#ff0062] z-9993">
      <div className="w-[40%] font-bold text-2xl flex justify-center items-center text-white">
        <Button2
          end="emoji"
          size="lg"
          className="!text-4xl !px-12"
          customEmojiSize={35}
          onClick={() => {
            router.push(formatUrl(data.button_link));
          }}
        >
          {data.button_cta}
        </Button2>
      </div>
    </div>
  );
};
export default BottomSection;
