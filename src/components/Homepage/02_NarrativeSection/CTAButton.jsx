'use client';
import { useRouter } from "next/navigation";
import Button from "../../Buttons/Button2";
import { formatUrl } from "../../../lib/urls";

const CTAButton=({data})=>{
    const router= useRouter();

    return(
        <Button onClick={() => router.push(formatUrl(data.button_link))} size="lg" dark={false} end="arrow" >
            {data.cta_button_caption}
        </Button>
    )
}
export default CTAButton;