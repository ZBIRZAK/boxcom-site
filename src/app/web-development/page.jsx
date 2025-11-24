import gsap from "gsap";
import Header from "../../components/Headers/Header";
import Lately from "../../components/Our_projects/Lately";
import NotJustAPage from "../../components/WebDevelopment/01_NotJustAPage/NotJustAPage";
import Websites from "../../components/WebDevelopment/02_Websites/Websites";
import Seo from "../../components/WebDevelopment/03_Seo/Seo";
import Sea from "../../components/WebDevelopment/04_Sea/Sea";
import MaintenanceAndAnalytics from "../../components/WebDevelopment/05_Mantenance&Analytics/MaintenanceAndAnalytics";
import SalesPerson from "../../components/WebDevelopment/06_SalesPerson/SalesPerson";
import {
  getHeader,
  getWebDevelopment,
  getWebDevelopmentSEO,
} from "../../lib/BackendContents";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import LDJsonScripts from "../../components/Seo/LDJsonScripts";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getWebDevelopmentSEO();

  return parseSeoTagsForMetaData(seo);
}

const WebDevPage = async () => {
  const header = await getHeader();

  const {
    dataNotJustAPageSection,
    dataWebsitesSection,
    dataSeoSection,
    dataSeaSection,
    dataMaintenanceAndAnalytics,
    dataSalesPerson,
  } = await getWebDevelopment();

  const seo = await getWebDevelopmentSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />

      <Header data={header} transitionToDark={true} />
      <NotJustAPage data={dataNotJustAPageSection} />
      <Websites data={dataWebsitesSection} />
      <Seo data={dataSeoSection} />
      <Sea data={dataSeaSection} />
      <MaintenanceAndAnalytics data={dataMaintenanceAndAnalytics} />
      <Lately
        sectionId="page04_screen07"
        portfolioCategoryId={process.env.PORTFOLIO_WEB_DEV_ID}
      />
      <SalesPerson data={dataSalesPerson} />
    </>
  );
};

export default WebDevPage;
