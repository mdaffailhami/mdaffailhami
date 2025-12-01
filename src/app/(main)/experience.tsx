import { Slide } from "@/components/slide";
import ExperienceTimeline from "@/components/experience-timeline";

export default function ExperienceSlide() {
  return (
    <Slide
      id="experience"
      className="flex flex-col items-center justify-center gap-12 py-20"
    >
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p className="text-muted-foreground">
          My professional journey and career milestones
        </p>
      </div>
      <ExperienceTimeline />
    </Slide>
  );
}
