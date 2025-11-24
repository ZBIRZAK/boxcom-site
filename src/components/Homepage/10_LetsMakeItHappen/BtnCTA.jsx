"use client";

import { urls } from "../../../lib/urls";
import { useRouter } from "next/navigation";
import Button2 from "../../Buttons/Button2";
import { useIsMobile } from "../../../contexts/UserAgentProvider";

const BtnCTA = ({ children, to }) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <Button2
      end="emoji"
      size={isMobile ? "sm" : "xl"}
      dark
      className="md:!py-4 md:px-16 py-2 px-4 "
      onClick={() => router.push(to)}
    >
      {children}
    </Button2>
  );
};

export default BtnCTA;
