"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TechBadge } from "@/components/tech-badge";
import type { Project } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ProjectDialog } from "@/components/project-dialog";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Card
        className="group bg-card max-w-100 pt-0 gap-y-4 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-101 hover:border-primary"
        onClick={() => setDialogOpen(true)}
      >
        <div className="relative w-full h-65 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-101"
          />
        </div>
        <CardHeader className="px-5">
          <CardTitle className="group-hover:underline text-primary decoration-2 underline-offset-4 text-[1.4rem] line-clamp-1">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-[0.95rem]">
            {project.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-7.5 overflow-y-hidden px-5">
          <div className="flex flex-row flex-wrap gap-x-1 gap-y-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge
                key={tech.label}
                icon={tech.Icon}
                label={tech.label}
                color={
                  mounted && resolvedTheme === "dark"
                    ? tech.color.dark
                    : tech.color.light
                }
                size="sm"
                className="hover:outline-border cursor-pointer"
              />
            ))}
            {project.technologies.length > 4 && (
              <span className="text-sm text-muted-foreground self-center">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      <ProjectDialog
        project={project}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
