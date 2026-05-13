import gsap from "gsap";
import Header from "../../components/Headers/Header";
import Hero from "../../components/LeadGeneration/01_Hero/Hero";
import LeadGenerationStrategy from "../../components/LeadGeneration/02_LeadGenerationStrategy/LeadGenerationStrategy";
import QualityLeads from "../../components/LeadGeneration/03_QualityLeads/QualityLeads";
import RoiResults from "../../components/LeadGeneration/04_RoiResults/RoiResults";
import Markets from "../../components/LeadGeneration/05_Markets/Markets";
import AnalyticsOptimization from "../../components/LeadGeneration/06_AnalyticsOptimization/AnalyticsOptimization";
import EveryClickCounts from "../../components/LeadGeneration/07_EveryClickCounts/EveryClickCounts";
import Lately from "../../components/Our_projects/Lately";
import {
  getHeader,
  getLeadGeneration,
  getLeadGenerationSEO,
} from "../../lib/BackendContents";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import LDJsonScripts from "../../components/Seo/LDJsonScripts";
import { getHost } from "../../lib/helpers";
import { urls } from "../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getLeadGenerationSEO();
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();

  return {
    ...data,
    description:
      "Lead generation services designed to attract qualified prospects and convert demand into measurable pipeline growth.",
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${urls.leadGeneration}`,
    },
    openGraph: {
      ...(data.openGraph || {}),
      url: `${host}${urls.leadGeneration}`,
    },
  };
}

const PageLeadGeneration = async () => {
  const header = await getHeader();

  const {
    dataHero,
    dataLeadGenerationStrategy,
    dataQualityLeads,
    dataRoiResults,
    dataMarkets,
    dataAnalyticsOptimization,
    dataEveryClickCounts,
  } = await getLeadGeneration();

  const seo = await getLeadGenerationSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header data={header} transitionToDark={true} />
      <Hero data={dataHero} />
      <LeadGenerationStrategy data={dataLeadGenerationStrategy} />
      <QualityLeads data={dataQualityLeads} />
      <RoiResults data={dataRoiResults} />
      <Markets data={dataMarkets} />
      <AnalyticsOptimization data={dataAnalyticsOptimization} />
      <Lately
        sectionId="page05_screen08"
        portfolioCategoryId={process.env.PORTFOLIO_LEAD_GEN_ID}
      />
      <EveryClickCounts data={dataEveryClickCounts} />
      {/* https://www.youtube.com/watch?v=1t-gK-9EIq4 */}
    </>
  );
};

export default PageLeadGeneration;
