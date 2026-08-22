import { AnimateIn } from "@/lib/components/animation/animate-in";
import { Slide } from "@/lib/components/common/slide";
import type { VideoPost } from "@/lib/types/videos";
import { VideoListSection } from "./video-list-section";

type VideosSlideProps = {
  videos: VideoPost[];
};

export default function VideosSlide({ videos }: VideosSlideProps) {
  if (videos.length === 0) return null;

  return (
    <Slide id="videos">
      <div className="w-full min-h-full mx-auto flex flex-col items-center justify-center gap-y-6 px-3 md:px-5">
        <AnimateIn animation="zoom-in-[0.9]">
          <h1 className="text-4xl font-medium text-center mb-2">My Yaps</h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Short videos where I yap about tech, AI, programming, and the things
            I&apos;m currently exploring. Visit my{" "}
            <a
              href="https://www.instagram.com/m.daffailhami/"
              className="underline italic font-semibold text-primary"
              target="_blank"
            >
              Instagram
            </a>{" "}
            to see all of them.
          </p>
        </AnimateIn>
        <VideoListSection videos={videos} />
      </div>
    </Slide>
  );
}
