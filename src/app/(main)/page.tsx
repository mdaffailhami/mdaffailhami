import AboutSlide from "./about/slide";
import ContactSlide from "./contact/slide";
import ExperienceSlide from "./experience/slide";
import HomeSlide from "./home/slide";
import ProjectsSlide from "./projects/slide";

export default function HomePage() {
  return (
    <main
      id="main"
      className="flex flex-row md:flex-col snap-x md:snap-y max-w-500 mx-auto snap-mandatory h-dvh w-screen overflow-x-scroll overflow-y-hidden md:overflow-x-hidden md:overflow-y-scroll scroll-smooth scrollbar-hidden"
    >
      <HomeSlide />
      <AboutSlide />
      <ProjectsSlide />
      <ExperienceSlide />
      <ContactSlide />
    </main>
  );
}
