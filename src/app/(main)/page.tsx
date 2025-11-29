import AboutSlide from "./about";
import ContactSlide from "./contact";
import ExperienceSlide from "./experience";
import HomeSlide from "./home";
import ProjectsSlide from "./projects";

export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <HomeSlide />
      <AboutSlide />
      <ProjectsSlide />
      <ExperienceSlide />
      <ContactSlide />
    </main>
  );
}
