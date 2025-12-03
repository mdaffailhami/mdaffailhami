"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/tech-badge";
import type { Project } from "@/lib/constants";
import { Github, ExternalLink, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/carousel";

interface ProjectDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getButtonIcon = (type: string) => {
    switch (type) {
      case "github":
        return Github;
      case "demo":
        return ExternalLink;
      case "download":
        return Download;
      default:
        return ExternalLink;
    }
  };

  // Create image slides
  const imageSlides = project.images.map((image) => (
    <div key={image} className="relative aspect-video">
      <Image
        src={image}
        alt={`${project.title} - ${image}`}
        fill
        className="object-cover rounded-md"
      />
    </div>
  ));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Project details for {project.title}
          </DialogDescription>
        </DialogHeader>

        {/* Image Carousel */}
        <Carousel items={imageSlides} />

        {/* Project Description */}
        <div className="space-y-4">
          <p className="text-muted-foreground">{project.longDescription}</p>

          {/* Technologies Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {project.buttons.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.buttons.map((button) => {
                const Icon = button.icon || getButtonIcon(button.type);
                return (
                  <Button
                    key={button.url}
                    variant={button.type === "project" ? "outline" : "default"}
                    className={cn({
                      "dark:bg-white bg-[#181717] text-background hover:bg-[#181717]/80 hover:dark:bg-white/80":
                        button.type === "github",
                      "hover:border-primary! hover:text-primary":
                        button.type === "project",
                    })}
                    asChild
                  >
                    <a
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {button.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
