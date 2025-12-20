"use client";

import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

export function GetToKnowButton() {
  return (
    <Button
      onClick={() => {}}
      className="animate-bounce fl-p-3/5! bg-primary group text-primary-foreground hover:bg-primary/5! hover:border-primary hover:text-primary transition-colors border-border border-2"
    >
      {/* <UserCircle2Icon className="size-5 md:size-6 group-hover:scale-105 transition-transform group-hover:-translate-x-1" /> */}
      {/* <PlayIcon className="size-5 md:size-6 group-hover:scale-105 transition-transform group-hover:-translate-x-1" /> */}
      <CodeIcon className="size-5 md:size-6 group-hover:scale-105 transition-transform group-hover:-translate-x-1" />
      <span className="fl-text-base/lg font-medium group-hover:scale-110 transition-transform group-hover:translate-x-0.5">
        Watch Me Code
      </span>
    </Button>
  );
}
