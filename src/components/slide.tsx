"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useActiveSlide } from "@/contexts/active-slide";
import { config } from "@/database/data/config";

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
  const { setActiveSlide } = useActiveSlide();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const slideElement = slideRef.current;
    if (!slideElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update title when slide is visible
          if (entry.isIntersecting) {
            // Clear any existing timer just in case
            if (timerRef.current) clearTimeout(timerRef.current);

            // Debounce the update: Wait 200ms to ensure user "settles" on this slide
            timerRef.current = setTimeout(() => {
              setActiveSlide(id); // Update context

              // Update page title
              const baseTitle = config.metadata.title;

              let pageTitle = baseTitle;

              if (id !== "home") {
                pageTitle = `${baseTitle} | ${
                  id.charAt(0).toUpperCase() + id.slice(1)
                }`;
              }

              document.title = pageTitle;

              // Also update URL hash without scrolling
              let urlHash = " "; // Make sure to add space to make it works

              if (id !== "home") {
                urlHash = `#${id}`;
              }

              window.history.replaceState(null, "", urlHash);
            }, 200);
          }

          // When slide is no longer visible, reset its scroll position
          if (!entry.isIntersecting) {
            // If user leaves before timeout, cancel the pending update!
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }

            slideElement.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% visible
      }
    );

    observer.observe(slideElement);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [id]);

  return (
    <div
      ref={slideRef}
      id={id}
      className={cn(
        "snap-center snap-always min-h-full min-w-full overflow-y-auto lg:overflow-y-hidden max-lg:pt-16 max-lg:pb-23",
        className
      )}
    >
      {children}
    </div>
  );
}
