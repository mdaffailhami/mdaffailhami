"use client";

import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: ReactNode[];
  showIndicator?: boolean;
  showNavigation?: boolean;
  className?: string;
  slideClassName?: string;
  indicatorClassName?: string;
}

export function Carousel({
  items,
  showIndicator = true,
  showNavigation = true,
  className,
  slideClassName,
  indicatorClassName,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = items.length;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = carousel.offsetWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handlePrevSlide = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    scrollToSlide(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    scrollToSlide(newIndex);
  };

  return (
    <div className="w-full space-y-4">
      {/* Carousel Container */}
      <div className={cn("relative group", className)}>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <div
              key={`slide-${index + 1}`}
              className={cn("min-w-full snap-center", slideClassName)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {showNavigation && totalSlides > 1 && (
          <>
            {currentSlide > 0 && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-30"
                onClick={handlePrevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            {currentSlide < totalSlides - 1 && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-30"
                onClick={handleNextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </>
        )}
      </div>

      {/* Slide Indicators */}
      {showIndicator && totalSlides > 1 && (
        <div className={cn("flex justify-center gap-2", indicatorClassName)}>
          {items.map((_, index) => (
            <button
              key={`indicator-${index + 1}`}
              type="button"
              onClick={() => scrollToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all cursor-pointer",
                currentSlide === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
