import {
  getHeader,
  getOurProjects,
  getOurProjectsSEO,
  getPortfolioTags,
  getPortfolioPosts,
} from "../../lib/BackendContents";
import HeroSection from "../../components/Our_projects/HeroSection";
import EveryProject from "../../components/Our_projects/EveryProject";
import CaseStudiesCarousel from "../../components/Our_projects/CaseStudiesCarousel";
import Header from "../../components/Headers/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import LDJsonScripts from "../../components/Seo/LDJsonScripts";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getOurProjectsSEO();

  return parseSeoTagsForMetaData(seo);
}

const ProjectPage = async () => {
  const posts = await getPortfolioPosts(process.env.PORTFOLIO_PROJECTS_ID);
  const portfolioTagIds = posts.flatMap((post) => post.portfolio_tag || []);
  const portfolioTags = await getPortfolioTags(portfolioTagIds);
  const tagNameMap = portfolioTags.reduce((acc, tag) => {
    acc[tag.id] = tag.name;
    return acc;
  }, {});
  const header = await getHeader();
  const { dataEveryProjectIsAStory } = await getOurProjects();

  const seo = await getOurProjectsSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header data={header} dark={true} />
      <HeroSection />
      <CaseStudiesCarousel posts={posts} tagNameMap={tagNameMap} />
      <EveryProject data={dataEveryProjectIsAStory} />
    </>
  );
};

export default ProjectPage;
