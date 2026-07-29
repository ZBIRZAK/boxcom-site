import gsap from "gsap";
import Header from "../../../components/Headers/Header";
import Lately from "../../../components/Our_projects/Lately";
import NotJustAPage from "../../../components/WebDevelopment/01_NotJustAPage/NotJustAPage";
import Websites from "../../../components/WebDevelopment/02_Websites/Websites";
import Seo from "../../../components/WebDevelopment/03_Seo/Seo";
import Sea from "../../../components/WebDevelopment/04_Sea/Sea";
import MaintenanceAndAnalytics from "../../../components/WebDevelopment/05_Mantenance&Analytics/MaintenanceAndAnalytics";
import SalesPerson from "../../../components/WebDevelopment/06_SalesPerson/SalesPerson";
import WebDevelopmentFAQSection from "../../../components/WebDevelopment/07_FAQSection/07_FAQSection";
import {
  getHeader,
  getWebDevelopment,
  getWebDevelopmentSEO,
} from "../../../lib/BackendContents";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../../lib/seo";
import LDJsonScripts from "../../../components/Seo/LDJsonScripts";
import { areServiceFaqsEnabled, getHost } from "../../../lib/helpers";
import { localizeUrl, urls } from "../../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getWebDevelopmentSEO("fr");
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();
  const title =
    "Agence de Developpement Web au Maroc | Sites Web, SEO et SEA | Boxcom";
  const description =
    "Boxcom conçoit des sites web performants au Maroc avec developpement web, SEO, SEA et maintenance pour transformer votre trafic en opportunites commerciales.";

  return {
    ...data,
    title,
    description,
    keywords: [
      "agence developpement web maroc",
      "creation site web casablanca",
      "seo maroc",
      "sea maroc",
      "maintenance site web maroc",
    ],
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${localizeUrl(urls.webDevelopment, "fr")}`,
      languages: {
        en: `${host}${localizeUrl(urls.webDevelopment, "en")}`,
        fr: `${host}${localizeUrl(urls.webDevelopment, "fr")}`,
      },
    },
    openGraph: {
      ...(data.openGraph || {}),
      title,
      description,
      url: `${host}${localizeUrl(urls.webDevelopment, "fr")}`,
    },
    twitter: {
      ...(data.twitter || {}),
      title,
      description,
    },
  };
}

export default async function WebDevelopmentFr() {
  const header = await getHeader("fr");
  const {
    dataNotJustAPageSection,
    dataWebsitesSection,
    dataSeoSection,
    dataSeaSection,
    dataMaintenanceAndAnalytics,
    dataSalesPerson,
  } = await getWebDevelopment("fr");
  const seo = await getWebDevelopmentSEO("fr");

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <Header data={header} transitionToDark={true} locale="fr" />
      <NotJustAPage data={dataNotJustAPageSection} />
      <Websites data={dataWebsitesSection} />
      <Seo data={dataSeoSection} />
      <Sea data={dataSeaSection} />
      <MaintenanceAndAnalytics data={dataMaintenanceAndAnalytics} />
      {areServiceFaqsEnabled() && <WebDevelopmentFAQSection />}
      <Lately
        sectionId="page04_screen07"
        portfolioCategoryId={process.env.PORTFOLIO_WEB_DEV_ID}
      />
      <SalesPerson data={dataSalesPerson} />
    </>
  );
}
