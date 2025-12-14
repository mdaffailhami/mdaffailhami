"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  HandIcon,
} from "lucide-react";

export function TutorialOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const isVisibleTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    // Remove from DOM after animation completes
    const shouldRebnderTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2500); // 2000ms + 500ms transition
    return () => {
      clearTimeout(isVisibleTimer);
      clearTimeout(shouldRebnderTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={() => setIsVisible(false)} // Allow dismissing by click
    >
      <div className="flex flex-col items-center px-4 gap-2 text-foreground animate-in fade-in zoom-in-95 duration-300">
        <div className="relative">
          <HandIcon className="size-16 animate-bounce text-primary" />
          {/* Mobile Hint Arrow */}
          <ArrowLeftIcon className="size-8 absolute top-1/2 -left-8 -translate-y-1/2 lg:hidden text-primary" />
          <ArrowRightIcon className="size-8 absolute top-1/2 -right-8 -translate-y-1/2 lg:hidden text-primary" />
          {/* Desktop Hint Arrow */}
          <ArrowUpIcon className="size-8 absolute top-1/2 -left-8 -translate-y-1/2 max-lg:hidden text-primary" />
          <ArrowDownIcon className="size-8 absolute top-1/2 -right-8 -translate-y-1/2 max-lg:hidden text-primary" />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold font-serif">Welcome!</h2>
          <p className="text-lg text-muted-foreground lg:hidden">
            Swipe{" "}
            <span className="text-primary font-medium">left or right</span> to
            easily navigate between section
          </p>
          <p className="text-lg text-muted-foreground hidden lg:block">
            Scroll <span className="text-primary font-medium">down or up</span>{" "}
            to easily navigate between section
          </p>
        </div>
      </div>
    </div>
  );
}
