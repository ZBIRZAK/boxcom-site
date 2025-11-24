import Link from "next/link";
import HeroSmallTitle from "../Headings/HeroSmallTitle";
import { urls } from "../../lib/urls";
import clsx from "clsx";

const ProjectsList = ({ projects, medias, className }) => {
  const posts = projects || [];

  return (
    <section
      className={clsx("w-full !h-auto flex flex-col items-center", className)}
    >
      <div className="w-[80%] my-20 grid  grid-cols-1 md:grid-cols-2 gap-5 ">
        {posts.map((post, i) => {
          const featuredMedia = post.featured_media
            ? medias[post.featured_media]
            : null;

          return (
            <Link href={urls.projectPost.replace(":slug", post.slug)} key={i}>
              <article className="relative overflow-hidden w-[100%] h-[350px] group cursor-pointer">
                {featuredMedia && (
                  <img
                    src={featuredMedia.media_details.sizes.vp_sm.source_url}
                    className="w-full h-full absolute object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div
                  className="absolute mt-5 ml-7 top-0 left-0 p-3 h-[90%] w-[90%] flex flex-col justify-end items-start
                              bg-yellow-300 text-black
                              transform -translate-x-[100%] -translate-y-[100%] opacity-0
                              group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100
                              transition-all duration-450 ease-in-out"
                >
                  <HeroSmallTitle>
                    <div
                      className="overflow-hidden text-left"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  </HeroSmallTitle>

                  <p
                    className="text-3xl border-t border-[#ff0062] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,#ff0062_70%)] bg-[length:100px_1.1em]  font-bold uppercase mb-2 truncate"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsList;
