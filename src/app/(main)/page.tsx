import HomeSlide from "./(home)/slide";
import AboutSlide from "./(about)/slide";
import ProjectsSlide from "./(projects)/slide";
import ExperienceSlide from "./(experience)/slide";
import VideosSlide from "./(videos)/slide";
import ContactSlide from "./(contact)/slide";
import { InitialScrollHandler } from "@/lib/components/common/initial-scroll-handler";
import { getBeholdVideos } from "@/lib/server/services/behold-videos";

export default async function HomePage() {
  const videos = await getBeholdVideos();

  return (
    <main
      id="main"
      className="flex flex-row lg:flex-col snap-x lg:snap-y max-w-500 mx-auto snap-mandatory h-dvh w-screen overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden lg:overflow-y-scroll scroll-smooth scrollbar-hidden"
    >
      <InitialScrollHandler />
      <HomeSlide />
      <AboutSlide />
      <ProjectsSlide />
      <ExperienceSlide />
      <VideosSlide videos={videos} />
      <ContactSlide />
    </main>
  );
}
