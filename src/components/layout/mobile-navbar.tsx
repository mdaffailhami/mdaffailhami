"use client";

import { Button } from "@/components/ui/button";
import { cn, scrollTo } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { navs } from "@/lib/constants";
import { useActiveSlide } from "@/contexts/active-slide";

export function MobileNavbar() {
  const { activeSlide, setActiveSlide } = useActiveSlide();
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Update indicator when active slide changes or window resizes
  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) return;

      const activeHash = `#${activeSlide}`;
      const selector = `button[data-hash="${activeHash}"]`;
      const activeButton =
        navRef.current.querySelector<HTMLButtonElement>(selector);

      if (activeButton) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
          opacity: 1,
        });
      }
    };

    // Update indicator on active slide changes
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSlide]);

  // Handler for nav button clicks
  const handleNavClick = (hash: string) => {
    const id = hash.substring(1);
    setActiveSlide(id);
    scrollTo(hash);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-background border-t border-border px-2 z-50">
      <div ref={navRef} className="relative flex flex-row items-center">
        {/* Animated active indicator - positioned on top */}
        <div
          className="absolute inset-0 bg-primary/20 outline-2 outline-primary h-9 translate-y-1/2 rounded-full transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        />

        {navs.map((nav) => {
          const isActive = `#${activeSlide}` === nav.hash;

          return (
            <Button
              key={nav.label}
              variant={"ghost"}
              data-hash={nav.hash}
              onClick={() => handleNavClick(nav.hash)}
              className={cn(
                "flex flex-row flex-1 items-center gap-x-1 hover:text-primary h-18",
                {
                  "text-primary hover:bg-transparent dark:hover:bg-transparent hover:cursor-default":
                    isActive,
                  "text-muted-foreground": !isActive,
                }
              )}
            >
              <nav.Icon className="size-5" />
              {isActive && (
                <span className="text-sm font-medium">{nav.label}</span>
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
