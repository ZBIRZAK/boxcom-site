const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FRONTEND_HOST: process.env.FRONTEND_HOST,
    BACKEND_HOST: process.env.BACKEND_HOST,
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_POSTS: process.env.BACKEND_POSTS,
    BACKEND_PAGE: process.env.BACKEND_PAGE,
    BACKEND_PORTFOLIO: process.env.BACKEND_PORTFOLIO,
    BACKEND_MEDIA: process.env.BACKEND_MEDIA,
    BACKEND_SEO: process.env.BACKEND_SEO,
    FORM_SUBMISSION_URL: process.env.FORM_SUBMISSION_URL,
    BACKEND_USERS: process.env.BACKEND_USERS,
    BACKEND_TAG: process.env.BACKEND_TAG,
    BACKEND_TAGS: process.env.BACKEND_TAGS,
    HOMEPAGE_ID: process.env.HOMEPAGE_ID,
    CREATIVE_CONTENT_ID: process.env.CREATIVE_CONTENT_ID,
    DIGITAL_MARKETING_ID: process.env.DIGITAL_MARKETING_ID,
    LEAD_GENERATION_ID: process.env.LEAD_GENERATION_ID,
    WEB_DEV_ID: process.env.WEB_DEV_ID,
    ABOUT_US_ID: process.env.ABOUT_US_ID,
    FOOTER_ID: process.env.FOOTER_ID,
    HEADER_ID: process.env.HEADER_ID,
    BLOG_ID: process.env.BLOG_ID,
    FAQ_ID: process.env.FAQ_ID,
    OUR_PROJECTS_ID: process.env.OUR_PROJECTS_ID,
    CONTACT_ID: process.env.CONTACT_ID,
    CONTACT_FORM_ID: process.env.CONTACT_FORM_ID,
    CONTACT_FORM_KEY: process.env.CONTACT_FORM_KEY,
    PORTFOLIO_HOMEPAGE_ID: process.env.PORTFOLIO_HOMEPAGE_ID,
    PORTFOLIO_DIGITAL_MARKETING_ID: process.env.PORTFOLIO_DIGITAL_MARKETING_ID,
    PORTFOLIO_CREATIVE_CONTENT_ID: process.env.PORTFOLIO_CREATIVE_CONTENT_ID,
    PORTFOLIO_LEAD_GEN_ID: process.env.PORTFOLIO_LEAD_GEN_ID,
    PORTFOLIO_PROJECTS_ID: process.env.PORTFOLIO_PROJECTS_ID,
    PORTFOLIO_WEB_DEV_ID: process.env.PORTFOLIO_WEB_DEV_ID,
  },
  // reactStrictMode: true,
  // images: {
  //   unoptimized: true, // Disable default image optimization
  // },
  // assetPrefix: isProd ? "/boxcom_frontend/" : "",
  // basePath: isProd ? "/boxcom_frontend" : "",
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${process.env.BACKEND_HOST}/wp-admin`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Prevent manifest from being cached too long
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
