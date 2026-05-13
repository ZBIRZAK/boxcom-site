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
import { getHost } from "../../lib/helpers";
import { urls } from "../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getOurProjectsSEO();
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();

  return {
    ...data,
    description:
      "Explore Boxcom projects and case studies across digital marketing, creative content, lead generation, and web development.",
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${urls.projects}`,
    },
    openGraph: {
      ...(data.openGraph || {}),
      url: `${host}${urls.projects}`,
    },
  };
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
