"use client";

import { ProjectCard } from "./project-card";
import { projects } from "@/database/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Carousel } from "@/components/carousel";
import { useStreamBreakpoint } from "@/hooks/use-stream-breakpoint";

export function ProjectListSection() {
  // Limit to 9 projects and group them into slides of 3
  const breakpoint = useStreamBreakpoint();

  // Reserved for future use
  // const maxProjects = breakpoint === 1 ? 5 : breakpoint < 5 ? 6 : 9;
  // const displayedProjects = projects.slice(0, maxProjects);

  // We'll simply just show all projects for now
  const displayedProjects = projects;

  const itemsPerSlide = (() => {
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
      {breakpoint <= 2 ? (
        // If the breakpoint is sm or below, show the projects vertically scrollable
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 sm:gap-3 w-full">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              className="w-full"
            />
          ))}
        </div>
      ) : (
        // If not, show the projects horizontally snap scrollable
        <Carousel
          items={slides}
          className="max-w-216 lg:max-w-4xl xl:max-w-7xl"
          indicatorClassName="-mt-4 mb-5"
        />
      )}

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
