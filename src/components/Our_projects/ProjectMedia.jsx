import HeroMainTitle from "../Headings/HeroMainTitle";
import HeroSmallTitle from "../Headings/HeroSmallTitle";

const ProjectMedia=({ featuredMedia, project }) => {
    const date = new Date(project.date);

    const fmtDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
    return(
        <div className="relative w-full h-[85vh]">
          {featuredMedia && (
            <img
              src={featuredMedia.media_details.sizes.full.source_url}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <HeroSmallTitle><div
                dangerouslySetInnerHTML={{ __html: fmtDate }}
              /></HeroSmallTitle>
            <HeroMainTitle>
              <div
                className="text-7xl font-bold"
                dangerouslySetInnerHTML={{ __html: project.title.rendered }}
              />
            </HeroMainTitle>
          </div>
          
        </div>
    )
}
export default ProjectMedia;