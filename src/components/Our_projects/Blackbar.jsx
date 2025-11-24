import HeroSmallTitle from "../Headings/HeroSmallTitle";
import { formatMonthYear } from "../../lib/i18n";
const Blackbar=({data})=>{
    const date= formatMonthYear(data.release_date);
    return( 
    <div className="bg-black w-full h-auto flex flex-wrap justify-around items-center p-10">
        <div>
            <p className="text-sm uppercase text-center  tracking-widest text-pink">Our Clients</p>
            <p dangerouslySetInnerHTML={{ __html: data.client }}/>
        </div>
        <div>
            <p className="text-sm uppercase text-center  tracking-widest text-pink">What we did</p>
            <p dangerouslySetInnerHTML={{ __html: data.what_we_did }}/>
        </div>
        <div>
            <p className="text-sm uppercase text-center  tracking-widest text-pink">Release date</p>
            <p >{date}</p>
        </div>
        <div>
            <p className="text-sm uppercase text-center  tracking-widest text-pink">Authors</p>
            <p dangerouslySetInnerHTML={{ __html: data.authors }}/>
        </div>
    </div>)
}
export default Blackbar;