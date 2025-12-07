import Image from "next/image";
import { Slide } from "@/components/slide";
import { config } from "@/database/data/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserCircle2Icon } from "lucide-react";
import { GetToKnowButton } from "./get-to-know-button";

export default function HomeSlide() {
  return (
    <Slide id="home">
      <div className="w-full max-w-[92%] md:max-w-[80%] mx-auto flex flex-col md:flex-row-reverse items-center min-h-full">
        <section className="w-full md:flex-2 flex justify-center md:justify-end">
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
        <section className="flex flex-col w-full md:flex-3 items-start">
          <h1 className="font-serif text-5xl md:text-[4rem] font-medium leading-18">
            Daffa Ilhami
          </h1>
          <p className="text-left text-base md:text-lg text-muted-foreground">
            {config.bio}
          </p>
          <GetToKnowButton />
        </section>
      </div>
    </Slide>
  );
}
