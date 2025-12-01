"use client";

import Image from "next/image";
import type { Experience } from "@/lib/constants";
import { TechBadge } from "./tech-badge";
import { useTheme } from "next-themes";

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

export default function ExperienceCard({
  experience,
  isLast = false,
}: ExperienceCardProps) {
  const { theme } = useTheme();

  return (
    <div className="relative flex gap-6 pb-12">
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div className="z-10 h-4 w-4 rounded-full border-4 border-primary bg-background" />
        {/* Vertical line */}
        {!isLast && (
          <div className="absolute top-4 h-full w-0.5 bg-linear-to-b from-primary/50 to-primary/10" />
        )}
      </div>

      {/* Card content */}
      <div className="group flex-1 pb-4">
        <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/50">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
                  <p className="text-lg font-medium text-primary">
                    {experience.company}
                  </p>
                </div>
                <span className="whitespace-nowrap text-sm text-muted-foreground">
                  {experience.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {experience.technologies.map((tech) => (
                  <TechBadge
                    key={tech.label}
                    icon={tech.Icon}
                    label={tech.label}
                    color={
                      theme === "dark" ? tech.color.dark : tech.color.light
                    }
                    size="sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
