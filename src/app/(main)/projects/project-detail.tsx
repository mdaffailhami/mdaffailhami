"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useStreamBreakpoint } from "@/hooks";
import { Button } from "@/components/ui/button";
import { LinkIconBadge } from "@/components/link-icon-badge";
import type { Project } from "@/database/schema";
import { ExternalLink, Download } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/carousel";

type ProjectDetailProps = {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDetail({
  project,
  open,
  onOpenChange,
}: ProjectDetailProps) {
  const breakpoint = useStreamBreakpoint();
  const isMobile = !breakpoint ? false : breakpoint < 3;

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{project.title}</DrawerTitle>
            {/* Visually hidden, but screen readers can still read it */}
            <DrawerDescription className="sr-only">
              Project details for {project.title}
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-8 overflow-y-auto">
            <ProjectContent project={project} />
          </div>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Project details for {project.title}
          </DialogDescription>
        </DialogHeader>
        <ProjectContent project={project} />
      </DialogContent>
    </Dialog>
  );
}

function ProjectContent({ project }: { project: Project }) {
  const { resolvedTheme } = useTheme();

  const getButtonIcon = (type: string) => {
    switch (type) {
      case "github":
        return FiGithub;
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
    <>
      {/* Image Carousel */}
      <Carousel items={imageSlides} />

      {/* Project Description */}
      <div className="space-y-4 mt-4">
        <p className="text-muted-foreground">{project.description}</p>

        {/* Technologies Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <LinkIconBadge
                key={tech.label}
                icon={tech.icon}
                label={tech.label}
                href={tech.url}
                iconColor={
                  resolvedTheme === "dark" ? tech.color.dark : tech.color.light
                }
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((link) => {
              const Icon = link.icon || getButtonIcon(link.type);
              return (
                <Button
                  key={link.url}
                  variant={"default"}
                  className={cn({
                    "dark:bg-white bg-[#181717] text-background hover:bg-[#181717]/80 hover:dark:bg-white/80":
                      link.type === "github",
                    "bg-primary hover:bg-primary/80 ": link.type === "project",
                  })}
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
