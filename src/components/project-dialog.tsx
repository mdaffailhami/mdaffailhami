"use client";

import { useState, useEffect, useRef } from "react";
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
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Reset slide when dialog opens
    if (open) {
      setCurrentSlide(0);
    }
  }, [open]);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handlePrevSlide = () => {
    const newIndex =
      currentSlide > 0 ? currentSlide - 1 : project.images.length - 1;
    scrollToSlide(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex =
      currentSlide < project.images.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(newIndex);
  };

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
        <div className="relative group">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {project.images.map((image) => (
              <div
                key={image}
                className="min-w-full snap-center relative aspect-video"
              >
                <Image
                  src={image}
                  alt={`${project.title} - ${image}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {project.images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handlePrevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleNextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Slide Indicators */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {project.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => scrollToSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all cursor-pointer",
                    currentSlide === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

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
