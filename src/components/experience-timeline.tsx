"use client";

import { experiences } from "@/lib/constants";
import ExperienceCard from "./experience-card";

export default function ExperienceTimeline() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
