"use client";

import { useEffect, useState } from "react";
import ExperienceCard from "./experience-card";
import { experiences } from "@/database/data/experiences";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStreamBreakpoint } from "@/hooks";

export function ExperienceListSection() {
  const breakpoint = useStreamBreakpoint();
  // If not hydrated yet, assume it's not mobile
  const isMobile = !breakpoint ? false : breakpoint < 4;
  const [isExpanded, setIsExpanded] = useState(false);
  const maxUnexpandedExperiences = 3;
  const displayedExperiences = isExpanded
    ? experiences
    : experiences.slice(0, maxUnexpandedExperiences);

  useEffect(() => {
    setIsExpanded(isMobile);
  }, [isMobile]);

  return (
    <>
      <div className="relative max-w-4xl flex flex-row w-full justify-center">
        {/* Line */}
        <div className="w-0.5 bg-primary/50 shrink-0 absolute left-3 top-0 bottom-0"></div>
        <div
          className={cn(
            "flex flex-col gap-y-6 transition-all duration-300 pl-8",
            isExpanded && !isMobile ? "max-h-136 overflow-y-auto pr-4" : ""
          )}
          style={{ scrollbarWidth: "thin" }}
        >
          {displayedExperiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-6.75 top-1/2 size-4 rounded-full bg-primary/75 border-4 border-primary -translate-y-1/2"></div>

              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
      {!isMobile && experiences.length > maxUnexpandedExperiences && (
        <Button
          variant={"link"}
          className="text-center text-lg group hover:opacity-80"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}{" "}
          {isExpanded ? (
            <ArrowUpIcon className="size-5 ml-1" />
          ) : (
            <ArrowDownIcon className="size-5 ml-1" />
          )}
        </Button>
      )}
    </>
  );
}
