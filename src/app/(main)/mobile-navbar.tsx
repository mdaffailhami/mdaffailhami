"use client";

import { Button } from "../../components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useStreamBreakpoint } from "@/hooks/use-stream-breakpoint";
import { navs } from "@/lib/constants";

export function MobileNavbar() {
  const [activeHash, setActiveHash] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const breakpoint = useStreamBreakpoint();
  const isMobile = breakpoint < 3;
  const navRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);

  // Effect to set up IntersectionObserver for scroll spying (Updating url hash)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Skip updates if the user is currently clicking a nav button
        // Skip updates if we're on desktop
        if (isClickingRef.current || !isMobile) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            setActiveHash(`#${newId}`);

            if (newId === "home") {
              window.history.replaceState(null, "", " ");
            } else {
              window.history.replaceState(null, "", `#${newId}`);
            }
          }
        });
      },
      {
        rootMargin: "0px -50% 0px -50%", // Horizontal scrolling
        threshold: 0,
      },
    );

    const timeoutId = setTimeout(() => {
      navs.forEach((nav) => {
        const id = nav.hash.substring(1);
        const element = document.getElementById(id);

        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Effect to update the indicator position when activeHash changes
  useEffect(() => {
    if (navRef.current) {
      const selector = `button[data-hash="${activeHash}"]`;
      const activeButton =
        navRef.current.querySelector<HTMLButtonElement>(selector);

      if (activeButton) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        });
      }
    }
  }, [activeHash]);

  // Handler for nav button clicks
  const handleNavClick = (hash: string) => {
    isClickingRef.current = true;
    setActiveHash(hash);

    if (hash === "#home") {
      window.history.replaceState(null, "", " ");
    } else {
      window.history.replaceState(null, "", hash);
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 bg-background border-t border-border px-2 z-50">
      <div ref={navRef} className="relative flex flex-row items-center">
        {/* Animated active indicator - positioned at top */}
        <div
          className="absolute inset-0 bg-primary/20 outline-2 outline-primary h-9 translate-y-1/2 rounded-full transition-all duration-300 ease-in-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />

        {navs.map((nav) => {
          const isActive = activeHash === nav.hash;

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
                },
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
