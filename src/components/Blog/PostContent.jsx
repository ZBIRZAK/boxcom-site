"use client";

import Link from "next/link";
import { urls } from "../../lib/urls";

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
            href={urls.blog}
            className="font-semibold text-black underline underline-offset-4"
          >
            Blog
          </Link>
          ,{" "}
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
          ,{" "}
          <Link
            href={urls.leadGeneration}
            className="font-semibold text-black underline underline-offset-4"
          >
            Lead Generation
          </Link>
          , and{" "}
          <Link
            href={urls.about}
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
