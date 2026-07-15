"use client";

import { AnimateIn } from "@/lib/components/animation/animate-in";
import { Carousel } from "@/lib/components/common/carousel";
import type { VideoPost } from "@/lib/types/videos";
import { VideoCard } from "./video-card";

type VideoListSectionProps = {
  videos: VideoPost[];
};

export function VideoListSection({ videos }: VideoListSectionProps) {
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(videos.length / itemsPerSlide);
  const slides = Array.from({ length: totalSlides }).map((_, i) => {
    const chunk = videos.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide);

    return (
      <div
        key={`video-slide-${i + 1}`}
        className="flex w-full justify-center gap-8 px-3 py-7"
      >
        {chunk.map((video) => (
          <VideoCard key={video.id} video={video} className="w-56 xl:w-64" />
        ))}
      </div>
    );
  });

  return (
    <>
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-3 sm:gap-4 w-full max-w-3xl">
        {videos.map((video) => (
          <AnimateIn
            key={video.id}
            animation="slide-in-from-bottom-8"
            className="w-full max-w-52"
          >
            <VideoCard video={video} />
          </AnimateIn>
        ))}
      </div>

      <AnimateIn animation="slide-in-from-bottom-8">
        <Carousel
          items={slides}
          className="max-lg:hidden w-full max-w-5xl"
          indicatorClassName="-mt-4 mb-5"
        />
      </AnimateIn>
    </>
  );
}
