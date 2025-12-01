"use client";

import { Slide } from "@/components/slide";
import ExperienceCard from "@/components/experience-card";
import { experiences } from "@/lib/constants";

export default function ExperienceSlide() {
  return (
    <Slide
      id="experience"
      className="flex flex-col items-center justify-center gap-y-6"
    >
      <h1 className="text-[2.5rem] font-semibold">My Experience</h1>
      <div className="max-w-4xl flex flex-row gap-x-7.75">
        {/* Line */}
        <div className="w-0.5 h-full bg-primary/50"></div>
        <div className="flex flex-col gap-y-6">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-10 top-1/2 size-4 rounded-full bg-primary/50 border-4 border-primary"></div>

              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
