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
import type { Experience } from "@/database/schema";
import { ExternalLink } from "lucide-react";
import { Carousel } from "@/components/carousel";

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
      <DialogContent
        className="max-w-2xl overflow-y-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
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
  const imageSlides = experience.images.map((image) => (
    <div key={image} className="relative aspect-video">
      <Image
        src={image}
        alt={`${experience.company} - ${image}`}
        fill
        className="object-cover rounded-md"
      />
    </div>
  ));

  return (
    <>
      {/* Image Carousel */}
      <Carousel items={imageSlides} />

      {/* Experience Details */}
      <div className="space-y-4 mt-4">
        {/* Company and Period */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-primary">
            {experience.company}
          </h3>
          <span className="text-sm text-muted-foreground">
            {experience.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        {/* Company Link */}
        <Button
          variant="default"
          className="w-full gap-2 mt-1 bg-primary hover:bg-primary/80"
          asChild
        >
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            Visit Company Website
          </a>
        </Button>
      </div>
    </>
  );
}
