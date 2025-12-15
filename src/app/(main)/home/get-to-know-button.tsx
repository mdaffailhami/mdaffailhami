"use client";

import { Button } from "@/components/ui/button";
import { useAnimateOnViewportIntersect } from "@/hooks";
import { scrollTo } from "@/lib/utils";
import { UserCircle2Icon } from "lucide-react";

export function GetToKnowButton() {
  const ref = useAnimateOnViewportIntersect<HTMLElement>({
    classNameTrigger: "opacity-100 translate-x-64",
    options: {
      threshold: 0.1,
    },
  });
  return (
    <Button
      ref={ref}
      onClick={() => scrollTo("#about")}
      className="opacity-0 transition-all duration-1000 ease-out fl-p-3/5! bg-primary group text-primary-foreground hover:bg-primary/5! hover:border-primary hover:text-primary border-border border-2"
    >
      <UserCircle2Icon className="size-5 md:size-6 group-hover:scale-105 transition-transform group-hover:-translate-x-1" />
      <span className="fl-text-base/lg font-medium group-hover:scale-110 transition-transform group-hover:translate-x-0.5">
        Get to Know
      </span>
    </Button>
  );
}
