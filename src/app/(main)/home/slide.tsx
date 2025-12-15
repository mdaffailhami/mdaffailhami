import { Slide } from "@/components/slide";
import { config } from "@/database/data/config";
import { GetToKnowButton } from "./get-to-know-button";
import { HeroPicture } from "./../hero-picture";
import daffa1 from "@/assets/mdaffailhami-1.png";
import daffa2 from "@/assets/mdaffailhami-2.png";

export default function HomeSlide() {
  return (
    <Slide id="home">
      <div className="fl-px-4/40 md:fl-px-[-2rem/10rem] flex flex-col justify-center md:max-lg:flex-row lg:flex-row-reverse items-center min-h-full fl-gap-4/6">
        <section className="w-full max-md:max-w-2xs md:flex-3 flex justify-center md:max-lg:justify-start lg:justify-end">
          <HeroPicture mobile={daffa2} desktop={daffa1} />
        </section>
        <section className="flex flex-col w-full md:flex-4 items-start md:max-lg:items-end text-left md:max-lg:text-right">
          <h1 className="font-serif fl-text-[3.2rem/4.5rem] md:fl-text-[2.2rem/4.5rem] font-medium leading-14 lg:leading-18">
            Daffa Ilhami
          </h1>
          <p className="fl-text-base/lg md:fl-text-xs/lg text-muted-foreground mb-5">
            {config.bio}
          </p>
          <GetToKnowButton />
        </section>
      </div>
    </Slide>
  );
}
