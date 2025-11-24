'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Numbers=()=>{
    const numbersRef=useRef();
    useEffect(()=>{
        const numbers=numbersRef.current;
        gsap.fromTo(numbers,{ filter: "brightness(1)"},{
            filter: "brightness(5)",
            duration:1,
            repeat:-1,
            yoyo:true
        }
        )
    },[]);
    return(
        <div ref={numbersRef} className="absolute top-[14%] left-[22%] w-[45%] pointer-events-none ">
            <img src="/images/objects/calculator-numbers.svg" alt="Calculator" className="w-full" />
        </div>
    )
}
export default Numbers;