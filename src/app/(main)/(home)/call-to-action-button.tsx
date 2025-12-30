"use client";

import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import { OverlayView } from "@/components/common/overlay-view";
import { useEffect, useRef } from "react";

export function CallToActionButton() {
  const everOpened = useRef(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // As long as the user has never clicked the button yet,
      // open the overlay automatically after 8 seconds
      if (!everOpened.current) {
        document.getElementById("cta")?.click();
      }
    }, 8 * 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <OverlayView
      className="w-full"
      trigger={
        <Button
          id="cta"
          onClick={() => (everOpened.current = true)}
          className="animate-bounce fl-p-3/5! bg-primary group text-primary-foreground hover:bg-primary/5! hover:border-primary hover:text-primary transition-colors border-border border-2"
        >
          {/* <UserCircle2Icon className="size-5 md:size-6 group-hover:scale-105 transition-transform group-hover:-translate-x-1" /> */}
          {/* <PlayIcon className="size-5 md:size-6 group-hover:scale-105 transition-transform group-hover:-translate-x-1" /> */}
          <CodeIcon className="size-5 md:size-6 group-hover:scale-105 transition-transform group-hover:-translate-x-1" />
          <span className="fl-text-base/lg font-medium group-hover:scale-110 transition-transform group-hover:translate-x-0.5">
            Watch Me Code
          </span>
        </Button>
      }
    >
      <iframe
        src="https://www.youtube.com/embed/2-plG_Rz2ls?si=fZcwQTqhidLh_n9-"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="aspect-video w-full"
      ></iframe>
    </OverlayView>
  );
}
