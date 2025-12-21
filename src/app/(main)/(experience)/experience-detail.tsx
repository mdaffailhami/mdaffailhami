"use client";

import Image from "next/image";
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
import type { Experience } from "@/lib/db/types";
import {
  ExternalLink,
  LinkedinIcon,
  GlobeIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Carousel } from "@/components/common/carousel";
import Link from "next/link";
import { GradientOverlay } from "@/components/common/gradient-overlay";
import { formatPeriod } from "@/lib/utils";

interface ExperienceDetailProps {
  experience: Experience;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExperienceDetail({
  experience,
  open,
  onOpenChange,
}: ExperienceDetailProps) {
  const breakpoint = useBreakpoint();
  const isMobile = !breakpoint ? false : breakpoint < 3;

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <GradientOverlay className="opacity-100!" />
          <DrawerHeader className="text-left">
            <DrawerTitle>{experience.role}</DrawerTitle>
            {/* Visually hidden, but screen readers can still read it */}
            <DrawerDescription className="sr-only">
              Experience details for {experience.role} at {experience.company}
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-8 overflow-y-auto">
            <ExperienceContent experience={experience} />
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
      <DialogContent className="max-w-2xl overflow-y-auto" autoFocus={true}>
        <GradientOverlay className="opacity-100!" />
        <DialogHeader>
          <DialogTitle className="text-2xl">{experience.role}</DialogTitle>
          <DialogDescription className="sr-only">
            Experience details for {experience.role} at {experience.company}
          </DialogDescription>
        </DialogHeader>
        <ExperienceContent experience={experience} />
      </DialogContent>
    </Dialog>
  );
}

function ExperienceContent({ experience }: { experience: Experience }) {
  // Create image slides
  const imageSlides = experience.images.map((image, i: number) => (
    <div key={i} className="relative aspect-video">
      <Image
        src={image}
        alt={`${experience.company} - ${i + 1}`}
        fill
        className="object-contain rounded-md"
      />
    </div>
  ));

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "linkedin":
        return LinkedinIcon;
      case "website":
        return GlobeIcon;
      default:
        return ExternalLinkIcon;
    }
  };

  return (
    <>
      {/* Image Carousel */}
      <Carousel items={imageSlides} />

      {/* Experience Details */}
      <div className="space-y-4 mt-4">
        <div className="flex justify-between items-start border-b pb-2 border-border/50">
          <h3 className="text-xl font-semibold text-primary">
            {experience.company}
          </h3>
          <span className="text-sm text-muted-foreground">
            {formatPeriod(experience.start, experience.end)}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        {/* Links */}
        {experience.links.length > 0 && (
          <div className="flex flex-col gap-2 pt-2">
            {experience.links.map((link: Experience["links"][number]) => {
              const Icon = getLinkIcon(link.type);
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    className="w-full gap-2 bg-primary hover:bg-primary/80"
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
