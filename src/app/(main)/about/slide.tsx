import Image from "next/image";
import { Slide } from "@/components/slide";
import { TechListSection } from "./tech-list-section";

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
          <h1 className="font-serif text-6xl font-medium leading-14">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
            tempora sequi consectetur praesentium pariatur quod vero facilis
            quia quidem, labore, atque necessitatibus mollitia qui, temporibus
            dolores ab optio distinctio? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam aliquid architecto expedita doloremque
            consectetur pariatur quis repudiandae, officiis voluptatum,
            perferendis cupiditate perspiciatis dolore amet ab aliquam minima
            dolorem esse totam.
          </p>
          <div>
            <p className="text-lg text-muted-foreground text-justify mb-2.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              provident ducimus sint laboriosam ipsa nulla, nemo temporibus eum
              et id fuga delectus quasi cum! Aut doloribus maxime nulla unde
              illo:
            </p>
            <TechListSection />
          </div>
        </section>
      </div>
    </Slide>
  );
}
