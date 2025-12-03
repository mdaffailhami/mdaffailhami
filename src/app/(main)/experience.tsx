"use client";

import { useEffect, useState } from "react";
import { Slide } from "@/components/slide";
import ExperienceCard from "@/components/experience-card";
import { experiences } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function ExperienceSlide() {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const maxUnexpandedExperiences = 3;
  const displayedExperiences = isExpanded
    ? experiences
    : experiences.slice(0, maxUnexpandedExperiences);

  useEffect(() => {
    setIsExpanded(isMobile);
  }, [isMobile]);

  return (
    <Slide
      id="experience"
      className="flex flex-col items-center justify-center gap-y-6 max-md:px-0"
    >
      <h1 className="text-[2.5rem] font-semibold">My Experience</h1>
      <div className="relative max-w-4xl flex flex-row w-full justify-center">
        {/* Line */}
        <div className="w-0.5 bg-primary/50 shrink-0 absolute left-3 top-0 bottom-0"></div>
        <div
          className={cn(
            "flex flex-col gap-y-6 transition-all duration-300 pl-8",
            isExpanded ? "max-h-136 overflow-y-auto pr-4" : "",
          )}
          style={{ scrollbarWidth: "thin" }}
        >
          {displayedExperiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-6.75 top-1/2 size-4 rounded-full bg-primary/50 border-4 border-primary -translate-y-1/2"></div>

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
    </Slide>
  );
}
