"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// type InstagramPost = {
//   id: string;
//   caption: string;
//   media_url: string;
//   media_type: string;
//   timestamp: string;
//   permalink: string;
// };

// type InstagramPaging = {
//   cursors: {
//     before: string;
//     after: string;
//   };
// };

// type InstagramFeed = {
//   data: InstagramPost[];
//   paging?: InstagramPaging;
// };

export default function InstaFeed() {
  const [instagramFeed, setInstagramFeed] = useState(null);
  const [after, setAfter] = useState(null);
  const [error, setError] = useState(null);

  // const accessToken = "IGAATZAwIzxh0pBZAFFWbnJFTlg1TDRlVjQ0LVBReVo1OFM5c0VVSDkyU0hRSXc4YkxwUFFZAVTRDM3FrX29aa3JKMGNRbHZAYMlhHdC1jblFyemtCSEEtbzVmQmtOZADR6RjM1dTZARdzF3WFlNSEs2SkttY2g2UmRMcFFiQzA0WnZA4UQZDZD"

  const fetchFeed = async (after) => {
    try {
      let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
      if (after) {
        url += `&after=${after}`;
      }
      const data = await fetch(url);

      if (!data.ok) {
        throw new Error("Failed to fetch Instagram feed");
      }

      const feed = await data.json();
      console.log(feed);

      setInstagramFeed(feed);

      setAfter(feed.paging?.cursors.after);
    } catch (err) {
      console.error("Error fetching Instagram feed:", err.message);
      setError(err.message);
    }
  };

  const loadMore = () => {
    fetchFeed(after);
  };

  // Fetch the initial feed
  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}

      {instagramFeed && (
        <section className="w-full flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold">Instagram Feed:</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {instagramFeed.data.map((post) => (
              <div key={post.id} className="relative group w-full h-[300px]">
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  {post.media_type === "VIDEO" ? (
                    <video
                      src={post.media_url}
                      controls={false}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={post.media_url}
                      alt={post.caption ?? ""}
                      className="w-full h-full object-cover"
                      width={300}
                      height={300}
                    />
                  )}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 flex items-center justify-center p-4 w-full h-[300px]">
                    <p className="text-white text-center text-xs truncate">
                      {post.caption}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {after && <button onClick={loadMore}>Load More</button>}
        </section>
      )}
    </>
  );
}
