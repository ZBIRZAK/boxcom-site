'use client'

import Laughing from "./Laughing";
import Loud from "./Loud";
import Out from "./Out";

 const Lol=()=>{
    return(
          <div className="absolute w-[27%] h-[10%] md:w-[25%] top-[10%] md:top-[10%] right-[10%] md:rotate-[50deg] ">
            <Laughing/>
            <Out/>
            <Loud/>
          </div>
    );
 }
 export default Lol;