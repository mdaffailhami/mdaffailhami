"use client";

import Image from "next/image";
import { TechBadge } from "@/components/tech-badge";
import type { Project } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ProjectDetail } from "@/components/project-detail";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        type="button"
        className={cn(
          "group/card relative max-w-110 cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-md shadow-foreground/5 transition-all duration-300 hover:scale-101 hover:border-primary/50 hover:shadow-lg",
          className,
        )}
        onClick={() => setDialogOpen(true)}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 z-10 bg-linear-to-tl from-primary/5 dark:from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

        {/* Thumbnail */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover/card:scale-101"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col gap-y-4 p-5 text-left">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="line-clamp-1 text-2xl text-primary font-medium decoration-2 underline-offset-4 group-hover/card:underline">
              {project.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="max-h-7.5 overflow-y-hidden">
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-5">
              {project.technologies.slice(0, 4).map((tech) => (
                <TechBadge
                  key={tech.label}
                  icon={tech.Icon}
                  label={tech.label}
                  href={tech.url}
                  color={
                    mounted && resolvedTheme === "dark"
                      ? tech.color.dark
                      : tech.color.light
                  }
                  size="sm"
                  className="cursor-pointer hover:outline-border"
                />
              ))}
              {project.technologies.length > 4 && (
                <span className="self-center text-sm text-muted-foreground">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </button>

      <ProjectDetail
        project={project}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
