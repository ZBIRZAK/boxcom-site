import PostContent from "../Blog/PostContent";
import HeroMainTitle from "../Headings/HeroMainTitle";
import HeroSmallTitle from "../Headings/HeroSmallTitle";
import Blackbar from "./Blackbar";
import ProjectMedia from "./ProjectMedia";

const Project =({project , featuredMedia})=>{
    console.log('project',project);
    return(
      <div className="bg-white w-full">

        <ProjectMedia featuredMedia={featuredMedia} project={project} />
        <Blackbar data={project.acf} />
        <div className="flex justify-center">
          <div className="pt-[100px] w-[900px] text-gray-800">
            <PostContent post={project} />
          </div>
        </div>
      </div>
    )
}
export default Project;
