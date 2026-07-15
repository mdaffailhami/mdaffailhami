import { ParticlesBackground } from "@/lib/components/animation/particles-background";
import { GradientOverlay } from "@/lib/components/common/gradient-overlay";
import { TutorialOverlay } from "@/lib/components/common/tutorial-overlay";
import { MainHeader } from "@/lib/components/layout/main-header";
import { getBeholdVideos } from "@/lib/server/services/behold-videos";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const videosPromise = getBeholdVideos();

  return (
    <VideosAwareLayout videosPromise={videosPromise}>
      {children}
      <ParticlesBackground id="particles" />
      <GradientOverlay className="opacity-100! z-50" />
      <TutorialOverlay />
    </VideosAwareLayout>
  );
}

async function VideosAwareLayout({
  children,
  videosPromise,
}: {
  children: React.ReactNode;
  videosPromise: ReturnType<typeof getBeholdVideos>;
}) {
  const videos = await videosPromise;

  return (
    <>
      <MainHeader hasVideos={videos.length > 0} />
      {children}
    </>
  );
}
