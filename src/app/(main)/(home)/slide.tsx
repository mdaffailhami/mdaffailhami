import { Slide } from "@/lib/components/common/slide";
import { CallToActionButton } from "./call-to-action-button";
import { HeroPicture } from "@/lib/components/common/hero-picture";
import { daffa1, daffa2 } from "@/lib/assets";
import { AnimateIn } from "@/lib/components/animation/animate-in";
import { PROFILE } from "@/lib/constants";

export default function HomeSlide() {
  return (
    <Slide id="home">
      <div className="fl-px-4/40 md:fl-px-[-2rem/10rem] flex flex-col justify-center md:max-lg:flex-row lg:flex-row-reverse items-center min-h-full fl-gap-4/6">
        <section className="w-full max-md:max-w-2xs md:flex-3 flex justify-center md:max-lg:justify-start lg:justify-end">
          <AnimateIn animation="zoom-in-[0.9]">
            <HeroPicture mobile={daffa2} desktop={daffa1} />
          </AnimateIn>
        </section>
        <AnimateIn
          animation="zoom-in-[1.1]"
          render={
            <section className="flex flex-col w-full md:flex-4 items-start md:max-lg:items-end text-left md:max-lg:text-right" />
          }
        >
          <h1 className="font-serif fl-text-[3.2rem/4.5rem] md:fl-text-[2.2rem/4.5rem] font-medium leading-14 lg:leading-18">
            {PROFILE.name}
          </h1>
          <p className="fl-text-base/lg md:fl-text-xs/lg text-muted-foreground mb-5">
            {PROFILE.bio}
          </p>
          <CallToActionButton />
        </AnimateIn>
      </div>
    </Slide>
  );
}
