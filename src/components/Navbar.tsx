"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Section 1", href: "#section-1" },
  { label: "Section 2", href: "#section-2" },
  { label: "Section 3", href: "#section-3" },
  { label: "Section 4", href: "#section-4" },
  { label: "Section 5", href: "#section-5" },
];

export function Navbar() {
  const getHash = () => {
    if (typeof window === "undefined") return "";
    return window.location.hash;
  };

  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    window.location.hash = hash;
  }, [hash]);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 flex justify-center">
      <div className="relative bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex gap-6 items-center border border-gray-200">
        <div className="absolute top-0 h-1 bg-blue-500 rounded-full transition-all duration-300 ease-in-out" />
        {navItems.map((item) => (
          <Button
            suppressHydrationWarning
            key={item.href}
            variant={"ghost"}
            onClick={() => setHash(item.href)}
            className={cn(
              "font-semibold text-md transition-colors z-10 hover:text-primary hover:rounded-full",
              hash === item.href ? "text-primary" : "",
            )}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
