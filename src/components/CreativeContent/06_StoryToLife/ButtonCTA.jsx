import { useRouter } from "next/navigation";
import Button from "../../Buttons/Button2";
import { formatUrl } from "../../../lib/urls";

const ButtonCTA = ({data}) => {
    const router = useRouter();
    console.log("ButtonCTA DATA:", data);
    return(
        <Button
            end="emoji"
            size="2xl"
            customEmojiSize={40}
            className="!text-4xl"
            onClick={() => {
                router.push(formatUrl(data.button_link));
            }}
        >
            {data.button_cta}
        </Button>
    )
}
export default ButtonCTA;