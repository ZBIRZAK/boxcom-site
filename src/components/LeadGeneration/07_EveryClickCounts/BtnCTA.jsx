"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Button from "../../Buttons/Button2";
import { getLocaleFromPathname } from "../../../lib/locale";
import { localizeUrl } from "../../../lib/urls";

const BtnCTA = ({ link, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <Button
      end="emoji"
      size="2xl"
      customEmojiSize={40}
      className="!text-2xl"
      onClick={() => {
        router.push(localizeUrl(link, locale));
      }}
    >
      {children}
    </Button>
  );
};

export default BtnCTA;
