"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Slide({
  id,
  children,
  className,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideElement = slideRef.current;
    if (!slideElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When slide is no longer visible, reset its scroll position
          if (!entry.isIntersecting) {
            slideElement.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when less than 50% visible
      },
    );

    observer.observe(slideElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={slideRef}
      id={id}
      className={cn(
        "snap-center snap-always min-h-full min-w-full overflow-y-auto md:overflow-y-hidden max-md:pt-16.5 max-md:pb-38 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32",
        className,
      )}
    >
      {children}
    </div>
  );
}
