"use client";

import Link from "next/link";

const PostContent = ({ post }) => {
  console.log({ post });

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
      {/* <div>
        <Link href="/blog">&laquo; Back to blog home</Link>
      </div> */}
    </>
  );
};

export default PostContent;
