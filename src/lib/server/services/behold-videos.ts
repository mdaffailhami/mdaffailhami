import { cache } from "react";
import type { VideoPost } from "@/lib/types/videos";

type BeholdPost = {
  id?: unknown;
  caption?: unknown;
  permalink?: unknown;
  mediaType?: unknown;
  mediaUrl?: unknown;
  thumbnailUrl?: unknown;
  isReel?: unknown;
  visibility?: unknown;
  sizes?: {
    medium?: { mediaUrl?: unknown };
    large?: { mediaUrl?: unknown };
    small?: { mediaUrl?: unknown };
    full?: { mediaUrl?: unknown };
  };
};

type BeholdFeed = {
  posts?: unknown;
};

const toStringOrEmpty = (value: unknown) =>
  typeof value === "string" ? value : "";

const getThumbnailUrl = (post: BeholdPost) => {
  return (
    toStringOrEmpty(post.sizes?.medium?.mediaUrl) ||
    toStringOrEmpty(post.sizes?.large?.mediaUrl) ||
    toStringOrEmpty(post.sizes?.small?.mediaUrl) ||
    toStringOrEmpty(post.sizes?.full?.mediaUrl) ||
    toStringOrEmpty(post.thumbnailUrl)
  );
};

export const getBeholdVideos = cache(async (): Promise<VideoPost[]> => {
  const feedUrl = process.env.BEHOLD_API_URL;

  if (!feedUrl) return [];

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const feed = (await response.json()) as BeholdFeed;

    if (!Array.isArray(feed.posts)) return [];

    return feed.posts
      .filter((post): post is BeholdPost => {
        if (!post || typeof post !== "object") return false;

        const beholdPost = post as BeholdPost;
        return (
          beholdPost.isReel === true &&
          beholdPost.mediaType === "VIDEO" &&
          beholdPost.visibility !== "hidden"
        );
      })
      .map((post) => ({
        id: toStringOrEmpty(post.id),
        caption: toStringOrEmpty(post.caption),
        permalink: toStringOrEmpty(post.permalink),
        mediaUrl: toStringOrEmpty(post.mediaUrl),
        thumbnailUrl: getThumbnailUrl(post),
      }))
      .filter((post) => post.id && post.mediaUrl && post.thumbnailUrl);
  } catch {
    return [];
  }
});
