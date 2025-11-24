export function formatUrl(token) {
  const tokenUC = (token + "").toUpperCase();

  switch (tokenUC) {
    case "%URL_DIGITAL_MARKETING%":
      return urls.digitalMarketing;
    case "%URL_CREATIVE_CONTENT%":
      return urls.creativeContent;
    case "%URL_WEB_DEV%":
      return urls.webDevelopment;
    case "%URL_LEAD_GENERATION%":
      return urls.leadGeneration;
    case "%URL_PROJECTS%":
      return urls.projects;
    case "%URL_BLOG%":
      return urls.blog;
    case "%URL_ABOUT_US%":
      return urls.about;
    case "%URL_CONTACT%":
      return urls.contact;
    case "%URL_HOMEPAGE%":
      return urls.homepage;

    default:
      return token;
  }
}

export const urls = {
  homepage: "/",
  digitalMarketing: "/digital-marketing",
  creativeContent: "/creative-content",
  webDevelopment: "/web-development",
  leadGeneration: "/lead-generation",
  projects: "/projects",
  projectPost: "/projects/:slug",
  blog: "/blog",
  blogPost: "/blog/:slug",
  about: "/about",
  contact: "/contact",
};
