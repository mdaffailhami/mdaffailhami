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
import { useBreakpoint } from "@/hooks";
import { Button } from "@/components/ui/button";
import { LinkIconBadge } from "@/components/common/link-icon-badge";
import type { Project, Tech } from "@/lib/db/types";
import {
  ExternalLink,
  Download,
  GlobeIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/common/carousel";
import Link from "next/link";
import { GradientOverlay } from "@/components/common/gradient-overlay";

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
  const breakpoint = useBreakpoint();
  const isMobile = !breakpoint ? false : breakpoint < 3;

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <GradientOverlay className="opacity-100!" />
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
        <GradientOverlay className="opacity-100!" />
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
  const getButtonIcon = (type: Project["links"][number]["type"]) => {
    switch (type) {
      case "github":
        return FiGithub;
      case "website":
        return GlobeIcon;
      case "download":
        return DownloadIcon;
      default:
        return ExternalLinkIcon;
    }
  };

  // Create image slides
  const imageSlides = (project.images as string[]).map(
    (image: string, i: number) => (
      <div key={i} className="relative aspect-video">
        <Image
          src={image}
          alt={`${project.title} - ${i + 1}`}
          fill
          className="object-contain rounded-md"
        />
      </div>
    )
  );

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
            {project.techs.map((tech: Tech) => (
              <LinkIconBadge
                key={tech.label}
                icon={tech.icon}
                label={tech.label}
                href={tech.url}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((link: Project["links"][number]) => {
              const Icon = link.icon || getButtonIcon(link.type);
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    key={link.url}
                    variant={"default"}
                    className={cn({
                      "dark:bg-white bg-[#181717] text-background hover:bg-[#181717]/80 hover:dark:bg-white/80":
                        link.type === "github",
                      "bg-primary hover:bg-primary/80 ":
                        link.type === "website" || link.type === "download",
                      "bg-secondary hover:bg-secondary/80":
                        link.type === "other",
                    })}
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
