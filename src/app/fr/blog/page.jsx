import {
  getBlog,
  getBlogPosts,
  getBlogSEO,
  getHeader,
  getMediaById,
  getTagBySlug,
} from "../../../lib/BackendContents";
import PostThumbnail from "../../../components/Blog/PostThumbnail";
import HeroSmallTitle from "../../../components/Headings/HeroSmallTitle";
import HeroMainTitle from "../../../components/Headings/HeroMainTitle";
import Header from "../../../components/Headers/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { parseSeoTagsForMetaData } from "../../../lib/seo";
import LDJsonScripts from "../../../components/Seo/LDJsonScripts";
import InputText from "../../../components/Forms/InputText";
import { Search } from "lucide-react";
import { getHost } from "../../../lib/helpers";
import Link from "next/link";
import { localizeUrl, urls } from "../../../lib/urls";

gsap.registerPlugin(useGSAP);

export async function generateMetadata() {
  const seo = await getBlogSEO("fr");
  const data = parseSeoTagsForMetaData(seo);
  const host = getHost();

  return {
    ...data,
    alternates: {
      ...(data.alternates || {}),
      canonical: `${host}${localizeUrl(urls.blog, "fr")}`,
      languages: {
        en: `${host}${localizeUrl(urls.blog, "en")}`,
        fr: `${host}${localizeUrl(urls.blog, "fr")}`,
      },
    },
    openGraph: {
      ...(data.openGraph || {}),
      url: `${host}${localizeUrl(urls.blog, "fr")}`,
    },
  };
}

const HeroSection = ({ tag, data }) => {
  return (
    <div className="relative !bg-black w-full h-[400px]">
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

export default async function BlogFr({ searchParams }) {
  const medias = {};
  const header = await getHeader("fr");
  const blog = await getBlog("fr");

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

  const seo = await getBlogSEO("fr");

  return (
    <>
      <LDJsonScripts seoData={seo.head} />
      <div className="bg-gray-100 w-full">
        <Header data={header} dark={true} locale="fr" />
        <HeroSection tag={tag} data={blog.acf} />
        <Toolbar search={search} data={blog.acf} />

        <div className="w-full md:max-w-[1250px] mx-auto pt-20 pb-10 px-2 md:px-0 text-black">
          <div className="mb-10 rounded-3xl border border-black/10 bg-white px-6 py-6 shadow-lg/10">
            <p className="text-base leading-7 text-gray-700">
              Explorez les idees de l'equipe Boxcom, puis decouvrez nos services
              principaux :
              {" "}
              <Link
                href={localizeUrl(urls.creativeContent, "fr")}
                className="font-semibold text-black underline underline-offset-4"
              >
                Contenu Creatif
              </Link>
              ,{" "}
              <Link
                href={localizeUrl(urls.webDevelopment, "fr")}
                className="font-semibold text-black underline underline-offset-4"
              >
                Developpement Web
              </Link>
              , et{" "}
              <Link
                href={localizeUrl(urls.leadGeneration, "fr")}
                className="font-semibold text-black underline underline-offset-4"
              >
                Generation de Leads
              </Link>
              . Si vous decouvrez Boxcom, commencez par notre{" "}
              <Link
                href={localizeUrl(urls.about, "fr")}
                className="font-semibold text-black underline underline-offset-4"
              >
                page A Propos
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
}
