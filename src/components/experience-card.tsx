"use client";

import Image from "next/image";
import type { Experience } from "@/lib/constants";
import Link from "next/link";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-101">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 dark:from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex gap-6">
          {/* Company Image */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={experience.image}
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
                <h3 className="text-xl font-semibold text-foreground">
                  {experience.role}
                </h3>
                <Link
                  href={experience.companyUrl}
                  className="text-lg font-medium text-primary group-hover:text-primary group-hover:underline group-hover:underline-offset-4 cursor-pointer"
                >
                  {experience.company}
                </Link>
              </div>
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                {experience.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
