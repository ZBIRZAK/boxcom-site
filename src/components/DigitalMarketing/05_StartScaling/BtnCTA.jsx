"use client";

import { useRouter } from "next/navigation";
import Button from "../../Buttons/Button2";

const BtnCTA = ({ link, children }) => {
  const router = useRouter();

  return (
    <Button end={"emoji"} size="2xl" onClick={() => router.push(link)}>
      {children}
      {/* Let's Talk */}
    </Button>
  );
};

export default BtnCTA;
