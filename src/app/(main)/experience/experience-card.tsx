"use client";

import Image from "next/image";
import type { Experience } from "@/database/schema";
import { useState } from "react";
import { ExperienceDetail } from "./experience-detail";
import { GradientOverlay } from "@/components/gradient-overlay";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setDialogOpen(true)}
        className="group h-30.75 md:h-36.5 flex items-start relative overflow-hidden rounded-lg border border-border bg-card p-4 shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-101 cursor-pointer text-left w-full"
      >
        <GradientOverlay />

        <div className="relative flex gap-6 w-full h-full">
          {/* Company Image */}
          <div className="max-md:hidden relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={experience.images[0]}
              alt={experience.company}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="line-clamp-1 text-lg md:text-xl font-semibold text-foreground">
                  {experience.role}
                </h3>
                <span className="line-clamp-1 text-lg md:text-xl font-medium text-primary group-hover:underline group-hover:underline-offset-4">
                  {experience.company}
                </span>
              </div>
              <span className="whitespace-nowrap text-[0.825rem] md:text-sm text-muted-foreground">
                {experience.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-1 md:line-clamp-2">
              {experience.description}
            </p>
          </div>
        </div>
      </button>

      <ExperienceDetail
        experience={experience}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
