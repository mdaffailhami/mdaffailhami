import { AnimateIn } from "@/components/animation/animate-in";
import { Slide } from "@/components/common/slide";
import { ExperienceListSection } from "./experience-list-section";
import { getExperiences } from "@/lib/api/experiences";

export default async function ExperienceSlide() {
  const experiences = (await getExperiences()).data ?? [];

  return (
    <Slide id="experience">
      <div className="w-full min-h-full mx-auto flex flex-col items-center justify-center gap-y-6 max-md:pl-0 max-md:pr-2.5 md:pl-2.5 md:pr-5">
        <AnimateIn animation="zoom-in-[0.9]">
          <h1 className="text-4xl font-medium text-center">My Experience</h1>
        </AnimateIn>
        <ExperienceListSection experiences={experiences} />
      </div>
    </Slide>
  );
}
