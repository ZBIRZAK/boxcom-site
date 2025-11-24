import Link from "next/link";
import { urls } from "../../lib/urls";

const PostThumbnail = ({ post, featuredMedia }) => {
  const url = urls.blogPost.replace(":slug", post.slug);

  const date = new Date(post.date);

  const fmtDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

  console.log("post._embedded.wp:term", post._embedded["wp:term"]);
  const terms = post._embedded["wp:term"];
  const tags = [];
  terms.forEach((_terms) => {
    _terms.forEach((term) => {
      if (term.taxonomy === "post_tag") {
        tags.push(term);
      }
    });
  });
  console.log("tags", tags);

  return (
    <Link href={url}>
      <article className="relative bg-white shadow-lg/40 md:shadow-none md:hover:shadow-xl/40 transition-shadow duration-300">
        <div className="h-[260px] w-full">
          {featuredMedia ? (
            <img
              src={featuredMedia.media_details.sizes.medium.source_url}
              className="w-full h-full object-cover"
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="p-7">
          <div className="text-[#eb2f5b] mb-5 text-xs tracking-widest">
            {/* Jun 19, 2021 3:34:39 PM */}
            {fmtDate}
          </div>
          <div
            className="text-xl font-bold text-black mb-5 truncate"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div
            className="text-gray-500 h-[180px]"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div className="flex items-center gap-2 flex-wrap text-gray-600">
            {/* <div>Tags: </div> */}
            {tags.map((tag, i) => (
              <Link
                href={urls.blog + "?tag=" + tag.slug}
                key={i}
                className="cursor-pointer hover:bg-gray-500 hover:text-white transition-all badge-tag px-2 py-1"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostThumbnail;
