import Image from "next/image";
import { Slide } from "@/components/slide";
import { TechListSection } from "./tech-list-section";
import Markdown from "react-markdown";
import { config } from "@/database/data/config";

export default function AboutSlide() {
  return (
    <Slide id="about">
      <div className="w-[92%] mx-auto flex flex-col md:flex-row items-center min-h-full gap-8">
        <section className="w-full md:flex-2 flex justify-center">
          <Image
            src="/mdaffailhami-1.png"
            alt="Daffa Ilhami (1)"
            width={779}
            height={1080}
            className="rounded-b-full w-[75%] md:w-md md:hidden"
          />
          <Image
            src="/mdaffailhami-2.png"
            alt="Daffa Ilhami (2)"
            width={676}
            height={1064}
            className="rounded-b-full w-[75%] md:w-md max-md:hidden"
          />
        </section>
        <section className="flex flex-col w-full md:flex-3 gap-y-4">
          <h1 className="font-serif text-[3.25rem] text-foreground font-medium leading-14">
            About Me
          </h1>
          <hr />
          <div className="space-y-2 text-base md:text-lg text-muted-foreground text-justify">
            <Markdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl md:text-2xl" {...props} />
                ),
              }}
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
