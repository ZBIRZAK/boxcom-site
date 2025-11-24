"use client";

import clsx from "clsx";
import {
  AlertTriangle,
  Bookmark,
  Ellipsis,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sleep } from "../../../lib/helpers";
import Loader from "../../Loaders/Loader";

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

// Sources:
// https://developers.facebook.com/docs/instagram-platform/reference/instagram-media/
// https://muhammadkasim.medium.com/fetch-account-media-using-instagram-api-5ab29c219ab3
export default function InstaFeed() {
  const [instagramFeed, setInstagramFeed] = useState(null);
  const [after, setAfter] = useState(null);
  const [error, setError] = useState(null);

  const pageSize = 4;

  const fetchFeed = async (after) => {
    try {
      let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&limit=${pageSize}&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
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
      // console.error("Error fetching Instagram feed:", err.message);
      setError(err.message);
    }
  };

  // const loadMore = () => {
  //   fetchFeed(after);
  // };

  // Fetch the initial feed
  useEffect(() => {
    fetchFeed();
  }, []);

  // console.log("instagramFeed:", instagramFeed);

  return (
    <>
      {error && (
        <div className="text-red-500 flex items-center justify-center h-32 my-10">
          <div className="flex items-center gap-2 text-2xl">
            <AlertTriangle size={40} />
            An error occurred while loading our Instagram feed...
          </div>
        </div>
      )}

      {!instagramFeed && !error && (
        <div className="flex flex-col gap-10 items-center justify-center relative z-10 h-56 my-10">
          <div className="max-h-10">
            <Loader />
          </div>
          <div className="opacity-70">Loading Instagram feed...</div>
        </div>
      )}

      {instagramFeed && (
        <div className="my-8">
          <div className="max-w-[1300px] mx-auto w-full flex gap-4">
            {(instagramFeed.data || []).slice(0, pageSize).map((post) => (
              <div
                key={post.id}
                className="relative group h-[400px] px-3 lg:w-[25%] rounded-2xl overflow-hidden bg-black"
              >
                {/* Le header de la carte */}
                <div className="flex justify-end py-2 gap-3">
                  <button className="text-gray-300 bg-gray-700 px-2 py-1 rounded-lg text-sm">
                    Follow
                  </button>
                  <div className="z-10">
                    <Ellipsis color="#aaa" />
                  </div>
                </div>

                {/* Le contenu de la carte */}
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative !block"
                >
                  <div className="border border-gray-900 rounded-xl overflow-hidden h-[300px]">
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

                    <div
                      className={clsx(
                        "absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-300 bg-black",
                        "bg-opacity-50 flex justify-center p-4 w-full h-full overflow-hidden"
                      )}
                    >
                      <p className="text-white text-pretty text-center">
                        {post.caption}
                      </p>
                    </div>

                    <div className="transition duration-300 opacity-0 group-hover:opacity-100 absolute left-0 right-0 bottom-0 w-full h-32 bg-gradient-to-b from-black/0 to-black/100"></div>
                  </div>
                </Link>

                {/* Le footer de la carte */}
                <div className="flex justify-between py-1">
                  <div className="flex gap-1">
                    <Heart />
                    <MessageCircle />
                    <Send />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white" />
                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                  </div>
                  <div>
                    <Bookmark />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* {after && <button onClick={loadMore}>Load More</button>} */}
        </div>
      )}
    </>
  );
}
