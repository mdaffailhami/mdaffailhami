"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { navs } from "@/lib/constants";

export function DesktopNavbar() {
  // State to track the active section ID
  const [activeHash, setactiveHash] = useState("");
  // State to control the position and width of the active indicator
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 76 });
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  // Ref for the nav container to query buttons
  const navRef = useRef<HTMLDivElement>(null);
  // Ref to prevent observer updates while clicking a nav button
  const isClickingRef = useRef(false);

  // Effect to track window resize and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to set up IntersectionObserver for scroll spying
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Skip updates if the user is currently clicking a nav button
        if (isClickingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            setactiveHash(`#${newId}`);

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
        // For horizontal scrolling: "0px -50% 0px -50%" checks at center of viewport
        rootMargin: isMobile ? "0px -50% 0px -50%" : "-50% 0px -50% 0px",
        threshold: 0,
      },
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
  }, [isMobile]); // Re-run when isMobile changes

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
        });
      }
    }
  }, [activeHash]);

  // Handler for nav button clicks
  const handleNavClick = (hash: string) => {
    isClickingRef.current = true;

    // Determine the ID to set as active
    setactiveHash(hash);

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
      className="max-md:hidden bg-background backdrop-blur-md w-min absolute top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-2.5 shadow-md shadow-foreground/5 border border-border"
    >
      <div className="relative flex gap-6 items-center">
        {/* Animated active indicator */}
        <div
          className="absolute inset-0 bg-primary/20 outline-2 outline-primary rounded-full transition-all duration-300 ease-in-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
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
              },
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
