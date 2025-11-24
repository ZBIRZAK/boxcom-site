import { getHost } from "../../lib/helpers";
import { urls } from "../../lib/urls";

export async function GET() {
  const host = getHost();

  /*
  ## Articles
  - [Article 4](https://slategrey-swallow-779920.hostingersite.com/article-4/): Dans Article, il y a &quot;art&quot;... bienvenue chez BoxCom !!!
  - [Article 3 sur l&rsquo;écologie!](https://slategrey-swallow-779920.hostingersite.com/article-3-sur-lecologie/): Voici le contenu sur l&#039;écologie.
  - [Article #2 sur le bon marketing](https://slategrey-swallow-779920.hostingersite.com/article-2-sur-le-marketing/): le marketing est-il bon pour la santé ?
  - [Hello world!](https://slategrey-swallow-779920.hostingersite.com/hello-world/): Welcome to WordPress. This is your first post. Edit or delete it, then start writing!

  ## Portfolio
  - [Garden Expo](https://slategrey-swallow-779920.hostingersite.com/portfolio/garden-expo/)
  - [Project 2 au top !](https://slategrey-swallow-779920.hostingersite.com/portfolio/project-2/): Another awesome project
  - [Project 1](https://slategrey-swallow-779920.hostingersite.com/portfolio/project-1/): This is one of our great projects!
  */

  const content = `# BoxCom

## Sitemaps
[XML Sitemap](${host}/sitemap.xml): Includes all crawlable and indexable pages.

## Pages
- [Accueil](${host}${urls.homepage})
- [Contact](${host}${urls.contact})
- [Our Projects](${host}${urls.projects})
- [About us](${host}${urls.about})
- [Blog](${host}${urls.blog})
- [Lead Generation](${host}${urls.leadGeneration})
- [Digital Marketing](${host}${urls.digitalMarketing})
- [Web Development](${host}${urls.webDevelopment})
- [Creative content](${host}${urls.creativeContent})
`;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
