"use client";

import { Slide } from "@/components/slide";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Carousel } from "@/components/carousel";
import { useStreamBreakpoint } from "@/hooks/use-stream-breakpoint";

export default function ProjectsSlide() {
  // Limit to 9 projects and group them into slides of 3
  const breakpoint = useStreamBreakpoint();

  const maxProjects = breakpoint === 1 ? 5 : breakpoint < 5 ? 6 : 9;
  const displayedProjects = projects.slice(0, maxProjects);
  const itemsPerSlide = (() => {
    if (breakpoint >= 5) return 3;
    if (breakpoint >= 2) return 2;
    return 1;
  })();
  const totalSlides = Math.ceil(displayedProjects.length / itemsPerSlide);

  // Create slides with 3 projects each
  const slides = Array.from({ length: totalSlides }).map((_, i) => {
    // Get the chunk of projects for the current slide
    const chunk = displayedProjects.slice(
      i * itemsPerSlide,
      (i + 1) * itemsPerSlide,
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
    <Slide id="projects">
      <div className="container md:h-full mx-auto flex flex-col md:justify-center items-center px-3 md:px-5">
        <h1 className="text-[2.5rem] font-semibold text-center mb-6 md:-mb-1.5">
          My Projects
        </h1>

        {breakpoint <= 2 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 sm:gap-3 w-full mb-5">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                className="w-full"
              />
            ))}
          </div>
        ) : (
          <Carousel
            items={slides}
            className="max-w-216 lg:max-w-4xl xl:max-w-7xl"
            indicatorClassName="-mt-4 mb-5"
          />
        )}

        {projects.length > maxProjects && (
          <Button
            variant={"link"}
            className="text-center text-lg hover:opacity-80"
          >
            View All Projects <ArrowRightIcon className="size-5" />
          </Button>
        )}
      </div>
    </Slide>
  );
}
