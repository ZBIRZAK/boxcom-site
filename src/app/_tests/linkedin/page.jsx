"use client";
import { useEffect, useState } from "react";

const LinkedInPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/linkedin")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.elements || []);
      });
  }, []);

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Latest LinkedIn Posts
      </h2>
      <div className="space-y-6">
        {posts.map((post) => {
          const text =
            post.specificContent?.["com.linkedin.ugc.ShareContent"]
              ?.shareCommentary?.text || "";

          const image =
            post.specificContent?.["com.linkedin.ugc.ShareContent"]
              ?.shareMediaCategory === "IMAGE" &&
            post.specificContent?.["com.linkedin.ugc.ShareContent"]?.media?.[0]
              ?.thumbnails?.[0]?.resolvedUrl;

          return (
            <article
              key={post.id}
              className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white"
            >
              <p className="text-gray-800 whitespace-pre-line">{text}</p>
              {image && (
                <img
                  src={image}
                  alt=""
                  className="mt-4 w-full rounded-xl object-cover"
                />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LinkedInPage;
