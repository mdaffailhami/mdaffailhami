import { Slide } from "@/components/slide";
import { TechListSection } from "./tech-list-section";
import Markdown from "react-markdown";
import { config } from "@/database/data/config";
import { HeroPicture } from "./../hero-picture";
import Daffa1 from "@/assets/mdaffailhami-1.png";
import Daffa2 from "@/assets/mdaffailhami-2.png";

export default function AboutSlide() {
  return (
    <Slide id="about">
      <div className="fl-px-4/40 md:fl-px-[-2rem/10rem] flex flex-col lg:flex-row items-center min-h-full fl-gap-4/6">
        <section className="w-full lg:flex-3 flex justify-center lg:justify-start">
          <HeroPicture mobile={Daffa1} desktop={Daffa2} />
        </section>
        <section className="flex flex-col w-full lg:flex-5 fl-gap-y-1.5/6">
          <h1 className="font-serif fl-text-[2.75rem/3.5rem] md:fl-text-[2.25rem/3.5rem] font-medium leading-12 lg:leading-10">
            About Me
          </h1>
          <hr />
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
          <TechListSection />
        </section>
      </div>
    </Slide>
  );
}
