'use client';

import Numbers from "./Numbers";
import Screen from "./Screen";

const Calculator=()=>{
    return(
        <div className="absolute top-[-20%] right-[5%] w-[25%] pointer-events-none z-[-1] ">
            <Screen/>
            <Numbers/>
            <img src="/images/objects/calculator.svg" alt="Calculator" />
        </div>
    )
}
export default Calculator;