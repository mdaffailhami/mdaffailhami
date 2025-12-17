import { Slide } from "@/components/common/slide";
import { AnimateIn } from "@/components/animation/animate-in";
import { ProjectListSection } from "./project-list-section";

export default function ProjectsSlide() {
  return (
    <Slide id="projects">
      <div className="container min-h-full mx-auto flex flex-col justify-center items-center px-3 lg:px-5">
        <AnimateIn animation="zoom-in-[0.9]">
          <h1 className="text-4xl font-medium text-center mb-5.5 lg:-mb-1.5">
            My Projects
          </h1>
        </AnimateIn>
        <ProjectListSection />
      </div>
    </Slide>
  );
}
