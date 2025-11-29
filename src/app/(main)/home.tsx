import Image from "next/image";
import { Slide } from "@/components/slide";

export default function HomeSlide() {
  return (
    <Slide
      id="home"
      className="flex flex-col md:flex-row-reverse items-center gap-8"
    >
      <section className="w-full md:flex-2 flex justify-center">
        <Image
          src="/mdaffailhami-1.png"
          alt="Daffa Ilhami (1)"
          width={779}
          height={1080}
          className="rounded-b-full w-[75%] md:w-md max-md:hidden"
        />
        <Image
          src="/mdaffailhami-2.png"
          alt="Daffa Ilhami (2)"
          width={676}
          height={1064}
          className="rounded-b-full w-[75%] md:w-md md:hidden"
        />
      </section>
      <section className="flex flex-col w-full md:flex-3">
        <h1 className="text-[4rem] font-medium leading-18">Daffa Ilhami</h1>
        <p className="text-left text-base text-muted-foreground">
          UWU Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          minus corporis eos fuga? Rem error reiciendis, eveniet temporibus vel
          possimus dolores iusto, unde deleniti corporis qui ducimus dolorem
          dignissimos numquam!
        </p>
      </section>
    </Slide>
  );
}
