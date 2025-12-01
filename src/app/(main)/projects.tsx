"use client";

import { Slide } from "@/components/slide";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function ProjectsSlide() {
  return (
    <Slide
      id="projects"
      className="flex flex-col gap-y-12 items-center justify-center"
    >
      <h1 className="text-5xl font-semibold text-center">My Projects</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
      <Button
        variant={"link"}
        className="text-center text-base group hover:opacity-80"
      >
        View All Projects <ArrowRightIcon className="size-5" />
      </Button>
    </Slide>
  );
}
