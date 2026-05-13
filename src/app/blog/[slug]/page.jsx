import { notFound } from "next/navigation";
import {
  getArticleSEO,
  getAuthorById,
  getBlogPostBySlug,
  getHeader,
  getMediaById,
  getTagById,
  getTags,
} from "../../../lib/BackendContents";
import PostContent from "../../../components/Blog/PostContent";
import WPStyles from "../../../components/Blog/WPStyles";
import HeroSmallTitle from "../../../components/Headings/HeroSmallTitle";
import HeroMainTitle from "../../../components/Headings/HeroMainTitle";
import Header from "../../../components/Headers/Header";
import { formatDate } from "../../../lib/i18n";
import { parseSeoTagsForMetaData } from "../../../lib/seo";
import LDJsonScripts from "../../../components/Seo/LDJsonScripts";
import Link from "next/link";
import { urls } from "../../../lib/urls";
import { getHost } from "../../../lib/helpers";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const seo = await getArticleSEO(post.link);
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();
  const canonical = `${host}${urls.blog}/${slug}`;

  return {
    ...data,
    alternates: {
      ...(data.alternates || {}),
      canonical,
    },
    openGraph: {
      ...(data.openGraph || {}),
      url: canonical,
    },
  };
}

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let featuredMedia;

  if (post.featured_media) {
    featuredMedia = await getMediaById(post.featured_media);
  }

  const author = await getAuthorById(post.author);
  const header = await getHeader();
  const seo = await getArticleSEO(post.link);

  const tags = await getTags(post.tags);

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <WPStyles />
      <div className="bg-white w-full">
        <Header data={header} dark={true} />

        <div className="relative w-full h-screen">
          {featuredMedia && (
            <img
              src={featuredMedia.media_details.sizes.full.source_url}
              alt={post.title?.rendered?.replace(/<[^>]*>/g, "") || "Featured image"}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={featuredMedia.media_details?.sizes?.full?.width || 1600}
              height={featuredMedia.media_details?.sizes?.full?.height || 900}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <HeroSmallTitle>
              {author.name} - {formatDate(post.date)}
            </HeroSmallTitle>
            <HeroMainTitle>
              <div
                className="text-3xl md:text-7xl font-bold text-shadow-lg px-4 text-center"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </HeroMainTitle>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="pt-[100px] w-full max-w-[900px] text-gray-800 px-4 md:px-0">
            <PostContent post={post} />
            <div className="my-10">
              {tags.length === 0 && <div>-</div>}
              {tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <div>Tags: </div>
                  {tags.map((tag, i) => (
                    <Link
                      href={urls.blog + "?tag=" + tag.slug}
                      key={i}
                      className="cursor-pointer hover:bg-gray-900 hover:text-white transition-all badge-tag"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
