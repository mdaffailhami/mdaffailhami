"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Experience } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { Carousel } from "@/components/carousel";

interface ExperienceDialogProps {
  experience: Experience;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExperienceDialog({
  experience,
  open,
  onOpenChange,
}: ExperienceDialogProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">{experience.role}</DialogTitle>
          <DialogDescription className="sr-only">
            Experience details for {experience.role} at {experience.company}
          </DialogDescription>
        </DialogHeader>

        {/* Image Carousel */}
        <Carousel items={imageSlides} />

        {/* Experience Details */}
        <div className="space-y-4">
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
          <Button variant="default" className="w-full gap-2 mt-1" asChild>
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
      </DialogContent>
    </Dialog>
  );
}
