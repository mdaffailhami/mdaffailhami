import { Slide } from "@/components/slide";
import { AnimateIn } from "@/components/animate-in";
import { TechListSection } from "./tech-list-section";
import Markdown from "react-markdown";
import { config } from "@/database/data/config";
import { HeroPicture } from "./../hero-picture";
import daffa1 from "@/assets/mdaffailhami-1.png";
import daffa2 from "@/assets/mdaffailhami-2.png";

export default function AboutSlide() {
  return (
    <Slide id="about">
      <div className="fl-px-4/40 md:fl-px-[-2rem/10rem] flex flex-col lg:flex-row items-center justify-center min-h-full fl-gap-4/6">
        <section className="w-full max-md:max-w-2xs lg:flex-3 flex justify-center lg:justify-start">
          <HeroPicture mobile={daffa1} desktop={daffa2} />
        </section>
        <section className="flex flex-col w-full lg:flex-5 fl-gap-y-1.5/6">
          <AnimateIn delay={5000}>
            <h1 className="font-serif fl-text-[2.75rem/3.5rem] md:fl-text-[2.25rem/3.5rem] font-medium leading-12 lg:leading-10">
              About Me
            </h1>
          </AnimateIn>
          <AnimateIn delay={5000}>
            <hr />
          </AnimateIn>
          <AnimateIn delay={5000}>
            <div className="space-y-2 text-base lg:fl-text-[0.8rem/1.1rem] text-muted-foreground text-left">
              <Markdown
              // components={{
              //   h2: ({ node, ...props }) => (
              //     <h2 className="text-xl lg:text-2xl" {...props} />
              //   ),
              // }}
              >
                {config.about}
              </Markdown>
            </div>
          </AnimateIn>
          <AnimateIn delay={5000}>
            <TechListSection />
          </AnimateIn>
        </section>
      </div>
    </Slide>
  );
}
