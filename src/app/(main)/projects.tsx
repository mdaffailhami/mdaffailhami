"use client";

import { Slide } from "@/components/slide";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Carousel } from "@/components/carousel";

export default function ProjectsSlide() {
  // Limit to 9 projects and group them into slides of 3
  const maxProjects = 9;
  const displayedProjects = projects.slice(0, maxProjects);
  const itemsPerSlide = 3;
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
        className="flex justify-center gap-6 px-3 py-7"
      >
        {chunk.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            className="w-full md:w-[calc(33.333%)]"
          />
        ))}
      </div>
    );
  });

  return (
    <Slide
      id="projects"
      className="flex flex-col gap-y-0 items-center justify-center"
    >
      <h1 className="text-[2.5rem] font-semibold text-center -mb-1.5">
        My Projects
      </h1>

      <Carousel
        items={slides}
        showIndicator={true}
        className="max-w-7xl mx-auto"
        indicatorClassName="-mt-4 mb-5"
      />

      {projects.length > maxProjects && (
        <Button
          variant={"link"}
          className="text-center text-lg group hover:opacity-80"
        >
          View All Projects <ArrowRightIcon className="size-5" />
        </Button>
      )}
    </Slide>
  );
}
