import { Slide } from "@/components/slide";
import { ExperienceListSection } from "./experience-list-section";

export default function ExperienceSlide() {
  return (
    <Slide id="experience">
      <div className="w-full min-h-full mx-auto flex flex-col items-center md:justify-center gap-y-6 max-md:pl-0 max-md:pr-2.5 md:pl-2.5 md:pr-5">
        <h1 className="text-4xl font-semibold text-center">My Experience</h1>
        <ExperienceListSection />
      </div>
    </Slide>
  );
}
