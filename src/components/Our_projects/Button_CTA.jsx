"use client";
import { usePathname, useRouter } from "next/navigation";
import { getLocaleFromPathname } from "../../lib/locale";
import { localizeUrl, urls } from "../../lib/urls";
import Button from "../Buttons/Button2";

const Button_CTA = ({ html }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <Button
      className={"mt-15 w-[50%] !text-center flex justify-center"}
      size="xl"
      onClick={() => {
        router.push(localizeUrl(urls.contact, locale));
      }}
    >
      {html}
    </Button>
  );
};

export default Button_CTA;
