import { notFound } from "next/navigation";
import WPStyles from "../../../components/Blog/WPStyles";
import Header from "../../../components/Headers/Header";
import Project from "../../../components/Our_projects/Project";
import {
  getHeader,
  getPortfolioTags,
  getProjectBySlug,
} from "../../../lib/BackendContents";

const ProjectPostPage = async ({ params }) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const header = await getHeader();
  const portfolioTags = await getPortfolioTags(project.portfolio_tag || []);
  const tagNames = portfolioTags.map((tag) => tag.name).filter(Boolean);

  return (
    <>
      <WPStyles />
      <Header data={header} light={true} />
      <Project project={project} tagNames={tagNames} />
    </>
  );
};
export default ProjectPostPage;
