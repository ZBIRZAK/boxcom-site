"use client";

import { useRouter } from "next/navigation";
import Button from "../../Buttons/Button2";

const BtnFreeConsult = ({ text, link }) => {
  const router = useRouter();

  return (
    <Button
      end="emoji"
      className="px-6 font-bold text-[1.3rem] sm:text-[2rem] z-10"
      customEmojiSize={30}
      onClick={() => router.push(link)}
    >
      {text}
    </Button>
  );
};

export default BtnFreeConsult;
