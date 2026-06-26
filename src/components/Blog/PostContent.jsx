"use client";

import Link from "next/link";
import { localizeUrl, urls } from "../../lib/urls";

const PostContent = ({ post }) => {
  return (
    <>
      {/* <div
        className="text-5xl font-bold mb-8"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      /> */}
      <div
        className="mb-8"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <div className="mt-10 rounded-3xl border border-black/10 bg-gray-50 px-6 py-6">
        <p className="text-base leading-7 text-gray-700">
          Continue exploring Boxcom:
          {" "}
          <Link
            href={localizeUrl(urls.blog, "en")}
            className="font-semibold text-black underline underline-offset-4"
          >
            Blog
          </Link>
          ,{" "}
          <Link
            href={localizeUrl(urls.creativeContent, "en")}
            className="font-semibold text-black underline underline-offset-4"
          >
            Creative Content
          </Link>
          ,{" "}
          <Link
            href={localizeUrl(urls.webDevelopment, "en")}
            className="font-semibold text-black underline underline-offset-4"
          >
            Web Development
          </Link>
          ,{" "}
          <Link
            href={localizeUrl(urls.leadGeneration, "en")}
            className="font-semibold text-black underline underline-offset-4"
          >
            Lead Generation
          </Link>
          , and{" "}
          <Link
            href={localizeUrl(urls.about, "en")}
            className="font-semibold text-black underline underline-offset-4"
          >
            About Boxcom
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default PostContent;
