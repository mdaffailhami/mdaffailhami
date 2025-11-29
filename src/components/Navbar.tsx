"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

// Navigation items configuration
const navItems = [
  { label: "Home", href: "#home" }, // First section - hash will be removed when active
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  // State to track the active section ID
  const [activeId, setActiveId] = useState("");
  // State to control the position and width of the active indicator
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  // Ref for the nav container to query buttons
  const navRef = useRef<HTMLDivElement>(null);
  // Ref to prevent observer updates while clicking a nav button
  const isClickingRef = useRef(false);

  // Effect to set up IntersectionObserver for scroll spying
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Skip updates if the user is currently clicking a nav button
        if (isClickingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            setActiveId(newId);
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
        // "-50% 0px -50% 0px" means the intersection is checked at the center of the viewport.
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    // Small timeout to ensure DOM elements are ready before observing
    const timeoutId = setTimeout(() => {
      navItems.forEach((item) => {
        // Extract ID from href (e.g., "#section-2" -> "section-2")
        const id = item.href.substring(1);
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
  }, []);

  // Effect to update the indicator position when activeId changes
  useEffect(() => {
    if (navRef.current) {
      // Find the button corresponding to the active section
      // Match the data-href attribute with the active section ID
      const selector = `button[data-href="#${activeId}"]`;

      const activeButton =
        navRef.current.querySelector<HTMLButtonElement>(selector);

      if (activeButton) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        });
      }
    }
  }, [activeId]);

  // Handler for nav button clicks
  const handleNavClick = (href: string) => {
    isClickingRef.current = true;

    // Determine the ID to set as active
    const id = href.substring(1);
    setActiveId(id);

    // Update URL hash using replaceState to avoid cluttering browser history
    if (id === "section-1") {
      window.history.replaceState(null, "", " ");
    } else {
      window.history.replaceState(null, "", href);
    }

    // Manually scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Reset clicking flag after animation to allow observer updates again
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 flex justify-center">
      <div
        ref={navRef}
        className="bg-card backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border"
      >
        <div className="relative flex gap-6 items-center">
          {/* Animated active indicator */}
          <div
            className="absolute inset-0 bg-primary/20 outline-2 outline-primary rounded-full transition-all duration-300 ease-in-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={"ghost"}
              data-href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "font-semibold text-md transition-colors z-10 hover:text-primary hover:rounded-full",
                // Highlight if active
                activeId === item.href.substring(1)
                  ? "text-primary hover:bg-transparent hover:cursor-default"
                  : "",
              )}
            >
              {/* {item.href === "#home" ? <HomeIcon /> : item.label} */}
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
