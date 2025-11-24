"use client"
import { useRouter } from "next/navigation";
import { formatUrl, urls } from "../../../lib/urls";
import Button from "../../Buttons/Button2";

const BottomSection = ({data}) => {
    const router = useRouter();
  
    return (
      <div className="absolute bottom-0 w-full flex justify-center items-center h-[9%] bg-[#ff0062]">
        <div className="w-[40%] font-bold text-2xl flex justify-center items-center text-white">
        <Button
          end="emoji"
          size="lg"
          className="!text-4xl !px-12 hover:!border-white"
          customEmojiSize={35}
          onClick={() => {
            router.push(formatUrl(data.bouton_cta.link));
          }}
        >
          <span className="whitespace-nowrap">{data.bouton_cta.caption}</span>
        </Button>
        </div>
      </div>
    );
  };
  export default BottomSection;