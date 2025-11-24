'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ChatBubble = () => {
    const BubbleRef = useRef();

    useEffect(()=>{
        const bubble=BubbleRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#page05_screen07",
              start: "top 60%",
              end: "bottom 20%",
              toggleActions: "restart none restart none",
            //   markers: true, 
            },
        });
        tl.fromTo(bubble, {scale:0, y:100, opacity:0}, 
            {
                y:0, 
                opacity:1,
                scale:1, 
                duration:1.5, 
                ease:"elastic.out"
            })
    },[]);
    return (
        <div ref={BubbleRef} className="absolute bottom-[19%] left-[10%] w-[37%]" >
            <img src="/images/misc/chat_bubble.png" alt="Chat Bubble" className="w-full" />
        </div>
    )
}
export default ChatBubble;