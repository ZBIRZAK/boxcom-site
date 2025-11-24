'use client';

import Numbers from "../../WebDevelopment/04_Sea/Calculator/Numbers";
import Screen from "../../WebDevelopment/04_Sea/Calculator/Screen";



const Calculator=()=>{
    return(
        <div className="absolute w-[15%] top-[10%] md:left-[-20%] ">
            <Screen/>
            <Numbers/>
            <img src="/images/objects/calculator.svg" alt="Calculator" />
        </div>
    )
}
export default Calculator;