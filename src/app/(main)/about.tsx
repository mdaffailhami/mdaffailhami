import Image from "next/image";
import { Slide } from "@/components/slide";

export default function AboutSlide() {
  return (
    <Slide id="about" className="flex flex-col md:flex-row items-center gap-8">
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
      <section className="flex flex-col w-full md:flex-3">
        <h1 className="text-[4rem] font-medium leading-18">About Me</h1>
        <p className="text-left text-base text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus
          corporis eos fuga? Rem error reiciendis, eveniet temporibus vel
          possimus dolores iusto, unde deleniti corporis qui ducimus dolorem
          dignissimos numquam!.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
          tempora sequi consectetur praesentium pariatur quod vero facilis quia
          quidem, labore, atque necessitatibus mollitia qui, temporibus dolores
          ab optio distinctio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam aliquid architecto expedita doloremque
          consectetur pariatur quis repudiandae, officiis voluptatum,
          perferendis cupiditate perspiciatis dolore amet ab aliquam minima
          dolorem esse totam.
        </p>
      </section>
    </Slide>
  );
}
