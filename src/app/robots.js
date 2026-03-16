import { getHost } from "../lib/helpers";

export default function robots() {
  const host = getHost();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
