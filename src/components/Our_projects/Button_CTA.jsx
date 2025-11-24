"use client";
import { useRouter } from "next/navigation";
import { urls } from "../../lib/urls";
import Button from "../Buttons/Button2";

const Button_CTA = ({html}) => {
    const router = useRouter();
    return(
        <Button className={"mt-15 w-[50%] !text-center flex justify-center"} size="xl" onClick={() => { router.push(urls.contact) }}>{html}</Button>
    )
}
export default Button_CTA;