import {
  getHeader,
  getMediaById,
  getOurProjects,
  getOurProjectsSEO,
  getPortfolioPosts,
} from "../../lib/BackendContents";
import HeroSection from "../../components/Our_projects/HeroSection";
import ProjectsList from "../../components/Our_projects/ProjectsList";
import EveryProject from "../../components/Our_projects/EveryProject";
import Header from "../../components/Headers/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import LDJsonScripts from "../../components/Seo/LDJsonScripts";
import Pencilcase2 from "../../components/Our_projects/Pencilcase2";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getOurProjectsSEO();

  return parseSeoTagsForMetaData(seo);
}

const ProjectPage = async () => {
  const posts = await getPortfolioPosts(process.env.PORTFOLIO_PROJECTS_ID);

  const medias = {};
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (post.featured_media) {
      medias[post.featured_media] = await getMediaById(post.featured_media);
    }
  }
  const header = await getHeader();
  const { dataEveryProjectIsAStory } = await getOurProjects();

  const seo = await getOurProjectsSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header data={header} dark={true} />
      <HeroSection />
      <ProjectsList projects={posts} medias={medias} className="bg-white" />
      <EveryProject data={dataEveryProjectIsAStory} />
    </>
  );
};

export default ProjectPage;
