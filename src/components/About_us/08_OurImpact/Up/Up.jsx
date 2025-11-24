'use client';

import Exclamation from "./Exclamation";
import P from "./P";
import U from "./U";


const Up=()=>{
    return(
    <div className="absolute w-[25%] left-[5%] top-[15%] -rotate-30">
      <Exclamation />
      <P />
      <U />
    </div>
    )
}
export default Up;