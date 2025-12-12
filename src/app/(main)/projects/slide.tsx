import { Slide } from "@/components/slide";
import { ProjectListSection } from "./project-list-section";

export default function ProjectsSlide() {
  return (
    <Slide id="projects">
      <div className="container md:h-full mx-auto flex flex-col lg:justify-center items-center px-3 lg:px-5">
        <h1 className="text-4xl font-medium text-center mb-5.5 lg:-mb-1.5">
          My Projects
        </h1>
        <ProjectListSection />
      </div>
    </Slide>
  );
}
