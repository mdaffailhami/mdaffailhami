"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";
import { navs } from "@/lib/constants";
import { useStreamBreakpoint } from "@/hooks";

export function DesktopNavbar() {
  const [activeHash, setActiveHash] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const breakpoint = useStreamBreakpoint();
  const navRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);

  // Effect to set up IntersectionObserver for scroll spying (Updating url hash)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Skip updates if the user is currently clicking a nav button
        // Skip updates if we're on mobile
        if (isClickingRef.current || breakpoint! < 4) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            setActiveHash(`#${newId}`);

            // Update URL hash without triggering a scroll or reload
            if (newId === "home") {
              window.history.replaceState(null, "", " ");
            } else {
              window.history.replaceState(null, "", `#${newId}`);
            }
          }
        });
      },
      {
        // rootMargin defines the "active" area.
        // For vertical scrolling: "-50% 0px -50% 0px" checks at center of viewport
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    // Small timeout to ensure DOM elements are ready before observing
    const timeoutId = setTimeout(() => {
      navs.forEach((nav) => {
        // Extract ID from hash (e.g., "#home" -> "home")
        const id = nav.hash.substring(1);
        const element = document.getElementById(id);

        if (element) {
          observer.observe(element);
        } else {
          console.warn(`Navbar: Element with id ${id} not found`);
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [breakpoint]); // Re-run when breakpoint changes

  // Effect to update the indicator position when activeHash changes
  useEffect(() => {
    if (navRef.current) {
      // Find the button corresponding to the active section
      // Match the data-hash attribute with the active section ID
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
    }
  }, [activeHash]);

  // Handler for nav button clicks
  const handleNavClick = (hash: string) => {
    isClickingRef.current = true;

    // Determine the ID to set as active
    setActiveHash(hash);

    // Update URL hash using replaceState to avoid cluttering browser history
    if (hash === "#home") {
      window.history.replaceState(null, "", " ");
    } else {
      window.history.replaceState(null, "", hash);
    }

    // Manually scroll to the section
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Reset clicking flag after animation to allow observer updates again
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
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
                  activeHash === nav.hash,
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
