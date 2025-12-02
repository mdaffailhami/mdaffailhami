import AboutSlide from "./about";
import ContactSlide from "./contact";
import ExperienceSlide from "./experience";
import HomeSlide from "./home";
import ProjectsSlide from "./projects";

export default function HomePage() {
  return (
    <main
      id="main"
      className="flex flex-row md:flex-col snap-x md:snap-y max-w-500 mx-auto snap-mandatory h-screen w-screen overflow-x-scroll overflow-y-hidden md:overflow-x-hidden md:overflow-y-scroll scroll-smooth scrollbar-hidden"
    >
      <HomeSlide />
      <AboutSlide />
      <ProjectsSlide />
      <ExperienceSlide />
      <ContactSlide />
    </main>
  );
}
