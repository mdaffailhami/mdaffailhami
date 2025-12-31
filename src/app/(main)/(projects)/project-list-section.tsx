"use client";

import { ProjectCard } from "./project-card";
import { Carousel } from "@/components/common/carousel";
import { useBreakpoint } from "@/hooks";
import { AnimateIn } from "@/components/animation/animate-in";
import type { Project } from "@/lib/db/types";

export function ProjectListSection({ projects }: { projects: Project[] }) {
  // Limit to 9 projects and group them into slides of 3
  const breakpoint = useBreakpoint();

  // Reserved for future use
  // const maxProjects = breakpoint === 1 ? 5 : breakpoint < 5 ? 6 : 9;
  // const displayedProjects = projects.slice(0, maxProjects);

  // We'll simply just show all projects for now
  const displayedProjects = projects;

  const itemsPerSlide = (() => {
    if (!breakpoint) return 2; // If not hydrated yet
    if (breakpoint >= 5) return 3;
    if (breakpoint >= 2) return 2;
    return 1;
  })();
  const totalSlides = Math.ceil(displayedProjects.length / itemsPerSlide);

  const slides = Array.from({ length: totalSlides }).map((_, i) => {
    // Get the chunk of projects for the current slide
    const chunk = displayedProjects.slice(
      i * itemsPerSlide,
      (i + 1) * itemsPerSlide
    );

    return (
      <div
        key={`project-slide-${i + 1}`}
        className="flex flex-row justify-center gap-6 px-3 py-7"
      >
        {chunk.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    );
  });

  return (
    <>
      {/* If the breakpoint is lg or below, show the projects vertically scrollable */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 sm:gap-3 w-full">
        {displayedProjects.map((project) => (
          <AnimateIn key={project.title} animation="slide-in-from-bottom-8">
            <ProjectCard project={project} className="w-full" />
          </AnimateIn>
        ))}
      </div>
      {/* If not, show the projects horizontally snap scrollable */}
      <AnimateIn animation="slide-in-from-bottom-8">
        <Carousel
          items={slides}
          className="max-lg:hidden max-w-216 lg:max-w-4xl xl:max-w-7xl"
          // If not hydrated yet, hide the indicators
          indicatorClassName={`-mt-4 mb-5 ${!breakpoint && "hidden"}`}
        />
      </AnimateIn>

      {/* Reserved for future use */}
      {/* {projects.length > maxProjects && (
        <Button
          variant={"link"}
          className="text-center text-lg hover:opacity-80"
        >
          View All Projects <ArrowRightIcon className="size-5" />
        </Button>
      )} */}
    </>
  );
}
