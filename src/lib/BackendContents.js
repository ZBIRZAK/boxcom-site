"use server";

import { backendClient, seoClient } from "./HttpClients";

export async function getHomepage() {
  const data = await getBackendACF(process.env.HOMEPAGE_ID);

  return {
    dataHeroSection: data.hero_section,
    dataNarrativeSection: data.narrative_section,
    dataExpertiseSection: data.expertise_section,
    dataWhyChooseUs: data.why_choose_us,
    dataBigIdeas: data.big_ideas,
    dataServices: data.our_services,
    dataClients: data.clients,
    dataSeeForYourself: data.see_for_yourself,
    dataTestimonials: data.testimonials,
    dataLetsMakeItHappen: data.lets_make_it_happen,
    dataLately: data.lately,
  };
}

export async function getFooter() {
  return await getBackendACF(process.env.FOOTER_ID);
}

export async function getHeader() {
  return await getBackendACF(process.env.HEADER_ID);
}

export async function getFAQ() {
  return await getBackendACF(process.env.FAQ_ID);
}

export async function getCreativeContent() {
  const data = await getBackendACF(process.env.CREATIVE_CONTENT_ID);
  return {
    dataExperiencesSection: data.experiences_section,
    dataContentMarketingSection: data.content_marketing_section,
    dataGraphicDesignSection: data.graphic_design_section,
    dataVideoProductionSection: data.video_production_section,
    dataDistributionAndRepurposingSection:
      data.distribution_and_repurposing_section,
    dataStoryToLifeSection: data.story_to_life_section,
  };
}

export async function getDigitalMarketing() {
  const data = await getBackendACF(process.env.DIGITAL_MARKETING_ID);
  // console.log(data);
  return {
    dataHeroSection: data.hero_section,
    dataDigitalStrategy: data.digital_strategy,
    dataSocialMediaManagement: data.social_media_management,
    dataDigitalAdvertising: data.digital_advertising,
    dataStartScaling: data.start_scaling,
  };
}

export async function getWebDevelopment() {
  const data = await getBackendACF(process.env.WEB_DEV_ID);
  // console.log(data);
  return {
    dataNotJustAPageSection: data.not_just_a_page_section,
    dataWebsitesSection: data.websites_section,
    dataSeoSection: data.seo_section,
    dataSeaSection: data.sea_section,
    dataMaintenanceAndAnalytics: data.maintence_and_analytics_section,
    dataSalesPerson: data.salesperson_section,
  };
}

export async function getLeadGeneration() {
  const data = await getBackendACF(process.env.LEAD_GENERATION_ID);
  // console.log(data);
  return {
    dataHero: data.hero,
    dataLeadGenerationStrategy: data.lead_generation_strategy,
    dataQualityLeads: data.quality_leads,
    dataRoiResults: data.roi_results,
    dataMarkets: data.markets,
    dataAnalyticsOptimization: data.analytics,
    dataEveryClickCounts: data.every_click_count,
  };
}

export async function getAboutUs() {
  const data = await getBackendACF(process.env.ABOUT_US_ID);
  // console.log(data);
  return {
    dataWelcome: data.welcome,
    dataMeetDot: data.meet_dot,
    dataTheStory: data.the_story,
    dataBoxComAfrica: data.boxcom_africa,
    dataExpertise: data.expertise,
    dataWhatMakes: data.what_makes,
    dataOurImpact: data.our_impact,
    dataOurTeam: data.our_team,
    dataFirstStep: data.first_step,
  };
}

export async function getOurProjects() {
  const data = await getBackendACF(process.env.OUR_PROJECTS_ID);
  // console.log(data);
  return {
    dataEveryProjectIsAStory: data.every_project_is_a_story,
  };
}

export async function getBlog() {
  try {
    const url = process.env.BACKEND_PAGE.replace(":id", process.env.BLOG_ID);
    const response = await backendClient.get(url, { params: { _embed: 1 } });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// options can be
// "tags": a list of tag ids (array of ints or strings),
// "search": a search term (string)
export async function getBlogPosts(options = {}) {
  try {
    const url = process.env.BACKEND_POSTS;
    const params = {
      orderby: "date",
      order: "desc",
      per_page: 10,
      page: 1,
      _embed: true,
    };

    // S'il y a des tag Ids parmi les options, on l'ajoute aux params
    if (
      options.tags &&
      Array.isArray(options.tags) &&
      options.tags.length > 0
    ) {
      const iTags = options.tags.filter((d) => !!d);
      if (iTags.length > 0) {
        params.tags = iTags.join(",");
      }
    }

    // gestion de la recherche
    if (options.search) {
      params.search = options.search;
    }

    // console.log({ options, params });

    const response = await backendClient.get(url, { params });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPortfolioPosts(...categoryIds) {
  try {
    const url = process.env.BACKEND_PORTFOLIO;
    const params = {
      orderby: "date",
      order: "desc",
      per_page: 20,
      page: 1,
      portfolio_category: categoryIds.join(","),
    };
    const response = await backendClient.get(url, { params });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBlogPostBySlug(slug) {
  try {
    const url = process.env.BACKEND_POSTS;
    const params = {
      slug,
      _embed: true,
    };
    const response = await backendClient.get(url, { params });

    return response.data[0] ?? null;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProjectBySlug(slug) {
  try {
    const url = process.env.BACKEND_PORTFOLIO;
    const params = {
      slug,
    };
    const response = await backendClient.get(url, { params });

    return response.data[0] ?? null;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMediaById(id) {
  try {
    const url = process.env.BACKEND_MEDIA.replace(":id", id);
    // console.log("url: " + url);
    const response = await backendClient.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBackendInfos(id) {
  try {
    const url = process.env.BACKEND_PAGE.replace(":id", id);
    const response = await backendClient.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBackendACF(id) {
  const data = await getBackendInfos(id);
  return data.acf;
}

async function getSEO(id) {
  try {
    const data = await getBackendInfos(id);
    const _url = process.env.BACKEND_SEO.replace(":url", data.link);
    // console.log("[SEO] id=" + id + ", get url=" + _url);
    const response = await seoClient.get(_url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getArticleSEO(url) {
  try {
    const _url = process.env.BACKEND_SEO.replace(":url", url);
    // console.log("[SEO] get url=" + _url);
    const response = await seoClient.get(_url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getHomepageSEO() {
  return await getSEO(process.env.HOMEPAGE_ID);
}

export async function getDigitalMarketingSEO() {
  return await getSEO(process.env.DIGITAL_MARKETING_ID);
}

export async function getCreativeContentSEO() {
  return await getSEO(process.env.CREATIVE_CONTENT_ID);
}

export async function getWebDevelopmentSEO() {
  return await getSEO(process.env.WEB_DEV_ID);
}

export async function getLeadGenerationSEO() {
  return await getSEO(process.env.LEAD_GENERATION_ID);
}

export async function getAboutUsSEO() {
  return await getSEO(process.env.ABOUT_US_ID);
}

export async function getOurProjectsSEO() {
  return await getSEO(process.env.OUR_PROJECTS_ID);
}

export async function getBlogSEO() {
  return await getSEO(process.env.BLOG_ID);
}

export async function getAuthorById(id) {
  try {
    const url = process.env.BACKEND_USERS.replace(":id", id);
    const response = await backendClient.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTagById(id) {
  try {
    const url = process.env.BACKEND_TAG.replace(":id", id);
    const response = await backendClient.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTagBySlug(slug) {
  try {
    const url = process.env.BACKEND_TAGS;
    const response = await backendClient.get(url + "?slug=" + slug);

    return response.data[0] ?? null;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTags(ids) {
  return await Promise.all(
    ids.map(async (id) => {
      return await getTagById(id);
    })
  );
}

export async function getContact() {
  return await getBackendACF(process.env.CONTACT_ID);
}
