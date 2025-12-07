"use client";

import Image from "next/image";
import { LinkIconBadge } from "@/components/link-icon-badge";
import type { Project } from "@/database/schema";
import { useTheme } from "next-themes";
import { ProjectDetail } from "./project-detail";
import { cn } from "@/lib/utils";
import { GradientOverlay } from "@/components/gradient-overlay";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={cn(
          "group relative w-full max-w-110 cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-md shadow-foreground/5 transition-all duration-300 hover:scale-101 hover:border-primary/50 hover:shadow-lg",
          className
        )}
        onClick={() => setDialogOpen(true)}
      >
        <GradientOverlay className="bg-linear-to-tl" />

        {/* Thumbnail */}
        <div className="relative h-70 md:h-75 w-full overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-101"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col gap-y-4 p-5 text-left">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="line-clamp-1 text-2xl text-primary font-medium decoration-2 underline-offset-4 group-hover:underline">
              {project.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="max-h-7.5 overflow-y-hidden">
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-5">
              {project.techs.slice(0, 4).map((tech) => (
                <LinkIconBadge
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  // href={tech.url} // Make it unclickable
                  size="sm"
                  iconColor={
                    resolvedTheme === "dark"
                      ? tech.color.dark
                      : tech.color.light
                  }
                  suppressHydrationWarning
                />
              ))}
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
