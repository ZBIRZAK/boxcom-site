"use server";

import { backendClient, seoClient } from "./HttpClients";
import { DEFAULT_LOCALE, normalizeLocale } from "./locale";
import { unstable_cache } from "next/cache";

const WORDPRESS_CONTENT_REVALIDATE_SECONDS = 5 * 60;
const WORDPRESS_SEO_REVALIDATE_SECONDS = 15 * 60;

const getCachedBackendData = unstable_cache(
  async (_baseUrl, url, params) => {
    const response = await backendClient.get(url, {
      params: params || undefined,
    });
    return response.data;
  },
  ["wordpress-backend-data-v1"],
  {
    revalidate: WORDPRESS_CONTENT_REVALIDATE_SECONDS,
    tags: ["wordpress-content"],
  }
);

const getCachedSeoData = unstable_cache(
  async (_baseUrl, url) => {
    const response = await seoClient.get(url);
    return response.data;
  },
  ["wordpress-seo-data-v1"],
  {
    revalidate: WORDPRESS_SEO_REVALIDATE_SECONDS,
    tags: ["wordpress-seo"],
  }
);

function getBackendData(url, params) {
  return getCachedBackendData(process.env.BACKEND_HOST, url, params);
}

function getSeoData(url) {
  return getCachedSeoData(process.env.BACKEND_HOST, url);
}

function getLocalizedContentId(key, locale = DEFAULT_LOCALE) {
  const normalizedLocale = normalizeLocale(locale).toUpperCase();
  return (
    process.env[`${key}_${normalizedLocale}`] ||
    process.env[key]
  );
}

export async function getHomepage(locale = DEFAULT_LOCALE) {
  const data = await getBackendACF(getLocalizedContentId("HOMEPAGE_ID", locale));

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

export async function getFooter(locale = DEFAULT_LOCALE) {
  return await getBackendACF(getLocalizedContentId("FOOTER_ID", locale));
}

export async function getHeader(locale = DEFAULT_LOCALE) {
  return await getBackendACF(getLocalizedContentId("HEADER_ID", locale));
}

export async function getFAQ(locale = DEFAULT_LOCALE) {
  return await getBackendACF(getLocalizedContentId("FAQ_ID", locale));
}

export async function getCreativeContent(locale = DEFAULT_LOCALE) {
  const data = await getBackendACF(
    getLocalizedContentId("CREATIVE_CONTENT_ID", locale)
  );
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

export async function getDigitalMarketing(locale = DEFAULT_LOCALE) {
  const data = await getBackendACF(
    getLocalizedContentId("DIGITAL_MARKETING_ID", locale)
  );
  // console.log(data);
  return {
    dataHeroSection: data.hero_section,
    dataDigitalStrategy: data.digital_strategy,
    dataSocialMediaManagement: data.social_media_management,
    dataDigitalAdvertising: data.digital_advertising,
    dataStartScaling: data.start_scaling,
  };
}

export async function getWebDevelopment(locale = DEFAULT_LOCALE) {
  const data = await getBackendACF(getLocalizedContentId("WEB_DEV_ID", locale));
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

export async function getLeadGeneration(locale = DEFAULT_LOCALE) {
  const data = await getBackendACF(
    getLocalizedContentId("LEAD_GENERATION_ID", locale)
  );
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

export async function getAboutUs(locale = DEFAULT_LOCALE) {
  const data = await getBackendACF(getLocalizedContentId("ABOUT_US_ID", locale));
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

export async function getOurProjects(locale = DEFAULT_LOCALE) {
  const data = await getBackendACF(
    getLocalizedContentId("OUR_PROJECTS_ID", locale)
  );
  // console.log(data);
  return {
    dataEveryProjectIsAStory: data.every_project_is_a_story,
  };
}

export async function getBlog(locale = DEFAULT_LOCALE) {
  try {
    const url = process.env.BACKEND_PAGE.replace(
      ":id",
      getLocalizedContentId("BLOG_ID", locale)
    );
    return await getBackendData(url, { _embed: 1 });
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

    return await getBackendData(url, params);
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
    return await getBackendData(url, params);
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
    const data = await getBackendData(url, params);

    return data[0] ?? null;
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
    const data = await getBackendData(url, params);

    return data[0] ?? null;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPortfolioTagById(id) {
  try {
    const url = `/wp-json/wp/v2/portfolio_tag/${id}`;
    return await getBackendData(url);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPortfolioTags(ids = []) {
  const uniqueIds = [...new Set((ids || []).filter(Boolean))];
  return await Promise.all(
    uniqueIds.map(async (id) => {
      return await getPortfolioTagById(id);
    })
  );
}

export async function getMediaById(id) {
  try {
    const url = process.env.BACKEND_MEDIA.replace(":id", id);
    // console.log("url: " + url);
    return await getBackendData(url);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBackendInfos(id) {
  try {
    const url = process.env.BACKEND_PAGE.replace(":id", id);
    return await getBackendData(url);
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
    return await getSeoData(_url);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getArticleSEO(url) {
  try {
    const _url = process.env.BACKEND_SEO.replace(":url", url);
    // console.log("[SEO] get url=" + _url);
    return await getSeoData(_url);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getHomepageSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("HOMEPAGE_ID", locale));
}

export async function getDigitalMarketingSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("DIGITAL_MARKETING_ID", locale));
}

export async function getCreativeContentSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("CREATIVE_CONTENT_ID", locale));
}

export async function getWebDevelopmentSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("WEB_DEV_ID", locale));
}

export async function getLeadGenerationSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("LEAD_GENERATION_ID", locale));
}

export async function getAboutUsSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("ABOUT_US_ID", locale));
}

export async function getOurProjectsSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("OUR_PROJECTS_ID", locale));
}

export async function getBlogSEO(locale = DEFAULT_LOCALE) {
  return await getSEO(getLocalizedContentId("BLOG_ID", locale));
}

export async function getAuthorById(id) {
  try {
    const url = process.env.BACKEND_USERS.replace(":id", id);
    return await getBackendData(url);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTagById(id) {
  try {
    const url = process.env.BACKEND_TAG.replace(":id", id);
    return await getBackendData(url);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTagBySlug(slug) {
  try {
    const url = process.env.BACKEND_TAGS;
    const data = await getBackendData(url + "?slug=" + slug);

    return data[0] ?? null;
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

export async function getContact(locale = DEFAULT_LOCALE) {
  return await getBackendACF(getLocalizedContentId("CONTACT_ID", locale));
}
