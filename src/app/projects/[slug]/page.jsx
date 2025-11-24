import WPStyles from "../../../components/Blog/WPStyles";
import Header from "../../../components/Headers/Header";
import Project from "../../../components/Our_projects/Project";
import {
  getHeader,
  getMediaById,
  getProjectBySlug,
} from "../../../lib/BackendContents";

const ProjectPostPage = async ({ params }) => {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
  const header = await getHeader();

  let featuredMedia;

  if (project.featured_media) {
    featuredMedia = await getMediaById(project.featured_media);
  }

  if (!project) {
    notFound();
  }
  return (
    <>
      <WPStyles />
      <Header data={header} dark={true} />
      <Project project={project} featuredMedia={featuredMedia} />
    </>
  );
};
export default ProjectPostPage;
