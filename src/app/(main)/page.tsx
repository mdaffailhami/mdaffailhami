import AboutSlide from "./about/slide";
import ContactSlide from "./contact/slide";
import ExperienceSlide from "./experience/slide";
import HomeSlide from "./home/slide";
import ProjectsSlide from "./projects/slide";
import { InitialScrollHandler } from "./initial-scroll-handler";

export default function HomePage() {
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
      <ContactSlide />
    </main>
  );
}
