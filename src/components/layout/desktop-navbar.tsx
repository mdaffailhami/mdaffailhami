"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navs } from "@/lib/constants";
import { scrollTo } from "@/lib/utils";
import { useActiveSlide } from "@/contexts/active-slide";

export function DesktopNavbar() {
  const { activeSlide, setActiveSlide } = useActiveSlide();
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLDivElement>(null);

  // Effect to update the indicator position when activeSlide changes
  useEffect(() => {
    if (!navRef.current) return;

    const activeHash = `#${activeSlide}`;
    // Find the button corresponding to the active section
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
  }, [activeSlide]);

  // Handler for nav button clicks
  const handleNavClick = (hash: string) => {
    const id = hash.substring(1);
    setActiveSlide(id);
    scrollTo(hash);
  };

  return (
    <nav
      ref={navRef}
      className="max-lg:hidden z-50 bg-background backdrop-blur-md w-min absolute top-3 left-1/2 -translate-x-1/2 rounded-full p-1.5 shadow-md shadow-foreground/5 border border-border"
    >
      <div className="relative flex gap-4.5 items-center">
        {/* Animated active indicator */}
        <div
          className="absolute inset-0 bg-primary/20 outline-2 outline-primary rounded-full transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        />
        {navs.map((nav) => (
          <Button
            key={nav.label}
            variant={"ghost"}
            data-hash={nav.hash}
            onClick={() => handleNavClick(nav.hash)}
            className={cn(
              "font-medium text-md transition-colors z-10 hover:text-primary rounded-full",
              {
                // Highlight if active
                "text-primary hover:bg-transparent! hover:cursor-default":
                  `#${activeSlide}` === nav.hash,
              }
            )}
          >
            {/* {nav.hash === "#home" ? <HomeIcon /> : nav.label} */}
            {nav.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
