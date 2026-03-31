import HeroMainTitle from "../Headings/HeroMainTitle";
import HeroSmallTitle from "../Headings/HeroSmallTitle";

const ProjectMedia=({ featuredMedia, project }) => {
    const date = new Date(project.date);
    const hasMedia = !!featuredMedia;
    const renderedTitle =
      project?.title?.rendered?.trim() ||
      project?.slug?.replace(/-/g, " ") ||
      "Project";

    const fmtDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
    return(
        <div className={`relative w-full ${hasMedia ? "h-[85vh]" : "min-h-[55vh] bg-black"} `}>
          {hasMedia && (
            <img
              src={featuredMedia.media_details.sizes.full.source_url}
              className="w-full h-full object-cover"
            />
          )}
          {!hasMedia && <div className="absolute inset-0 bg-black" />}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <HeroSmallTitle><div
                dangerouslySetInnerHTML={{ __html: fmtDate }}
              /></HeroSmallTitle>
            <HeroMainTitle>
              <div
                className="text-4xl md:text-7xl font-bold px-6 max-w-[1200px] text-center"
                dangerouslySetInnerHTML={{ __html: renderedTitle }}
              />
            </HeroMainTitle>
          </div>
          
        </div>
    )
}
export default ProjectMedia;
