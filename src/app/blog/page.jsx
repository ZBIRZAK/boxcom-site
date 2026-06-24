import {
  getBlog,
  getBlogPosts,
  getBlogSEO,
  getHeader,
  getMediaById,
  getTagBySlug,
} from "../../lib/BackendContents";
import PostThumbnail from "../../components/Blog/PostThumbnail";
import HeroSmallTitle from "../../components/Headings/HeroSmallTitle";
import HeroMainTitle from "../../components/Headings/HeroMainTitle";
import Header from "../../components/Headers/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../lib/seo";
import LDJsonScripts from "../../components/Seo/LDJsonScripts";
import InputText from "../../components/Forms/InputText";
import { Search } from "lucide-react";
import { getHost } from "../../lib/helpers";
import Link from "next/link";
import { urls } from "../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getBlogSEO();
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();
  const title = "Boxcom Blog | Digital Marketing, Content & Web Insights";
  const description =
    "Explore Boxcom articles on digital marketing, social media, creative content, branding, lead generation, and web development.";

  return {
    ...data,
    title,
    description,
    keywords: [
      "boxcom blog",
      "digital marketing blog morocco",
      "content marketing insights",
      "web development blog",
      "lead generation tips",
    ],
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${urls.blog}`,
    },
    openGraph: {
      ...(data.openGraph || {}),
      title,
      description,
      url: `${host}${urls.blog}`,
      type: "website",
    },
    twitter: {
      ...(data.twitter || {}),
      title,
      description,
    },
  };
}

const HeroSection = ({ tag, data }) => {
  return (
    <div className="relative !bg-black w-full h-[400px]">
      {/* {blogFeaturedMedia && (
          <img
            src={blogFeaturedMedia.media_details.sizes.full.source_url}
            className="w-full h-full object-cover"
          />
        )} */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <HeroSmallTitle>{data.title_1}</HeroSmallTitle>
        <HeroMainTitle>{data.title_2}</HeroMainTitle>
        {tag && (
          <div className="flex items-center gap-2 mt-3 text-xl">
            <div>{data.tag_prefix}</div>
            <div className="badge-tag">{tag.name}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const Toolbar = ({ search, data }) => {
  return (
    <div className="bg-white text-black drop-shadow-2xl/20">
      <div className="md:max-w-[1250px] mx-auto py-5 px-2">
        <form className="md:max-w-[500px] mx-auto flex items-center gap-2">
          <div className="flex-1">
            <InputText
              name="search"
              placeholder={data.search_placeholder}
              defaultValue={search || ""}
            />
          </div>
          <button className="cursor-pointer opacity-50 hover:opacity-100">
            <Search strokeWidth={3} />
          </button>
        </form>
      </div>
    </div>
  );
};

const BlogPage = async ({ searchParams }) => {
  const medias = {};

  const header = await getHeader();

  const blog = await getBlog();
  // let blogFeaturedMedia;
  // if (blog.featured_media) {
  //   blogFeaturedMedia = await getMediaById(blog.featured_media);
  // }
  // console.log("blog");
  // console.log(blog);

  const { tag: tagSlug, search } = await searchParams;

  const tag = tagSlug ? await getTagBySlug(tagSlug) : null;
  const posts = await getBlogPosts({
    tags: tag ? [tag.id] : [],
    search,
  });

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (post.featured_media) {
      medias[post.featured_media] = await getMediaById(post.featured_media);
    }
  }

  const seo = await getBlogSEO();

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <div className="bg-gray-100 w-full">
        {/* HEADER DU SITE */}
        <Header data={header} dark={true} />

        {/* HERO SECTION DU BLOG */}
        <HeroSection tag={tag} data={blog.acf} />

        <Toolbar search={search} data={blog.acf} />

        {/* LISTE DES ARTICLES */}
        <div className="w-full md:max-w-[1250px] mx-auto pt-20 pb-10 px-2 md:px-0 text-black">
          <div className="mb-10 rounded-3xl border border-black/10 bg-white px-6 py-6 shadow-lg/10">
            <p className="text-base leading-7 text-gray-700">
              Explore practical ideas from the Boxcom team, then dive deeper
              into our core services:
              {" "}
              <Link
                href={urls.creativeContent}
                className="font-semibold text-black underline underline-offset-4"
              >
                Creative Content
              </Link>
              ,{" "}
              <Link
                href={urls.webDevelopment}
                className="font-semibold text-black underline underline-offset-4"
              >
                Web Development
              </Link>
              , and{" "}
              <Link
                href={urls.leadGeneration}
                className="font-semibold text-black underline underline-offset-4"
              >
                Lead Generation
              </Link>
              . If you are new to Boxcom, start with our{" "}
              <Link
                href={urls.about}
                className="font-semibold text-black underline underline-offset-4"
              >
                About page
              </Link>
              .
            </p>
          </div>

          {posts.length === 0 && search && (
            <div
              className="text-xl text-center"
              dangerouslySetInnerHTML={{
                __html: blog.acf.search_not_found.replace("%search%", search),
              }}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {posts.map((post, i) => {
              const featuredMedia = post.featured_media
                ? medias[post.featured_media]
                : null;
              return (
                <PostThumbnail
                  key={i}
                  post={post}
                  featuredMedia={featuredMedia}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
