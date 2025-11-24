"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "../../Buttons/Button2";

const BtnCTA = ({ link, children }) => {
  const router = useRouter();
  return (
    <Button
      end="emoji"
      size="2xl"
      customEmojiSize={40}
      className="!text-2xl"
      onClick={() => {
        router.push(link);
      }}
    >
      {children}
    </Button>
  );
};

export default BtnCTA;
