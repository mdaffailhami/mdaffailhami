"use client";

import { socials } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GradientOverlay } from "@/components/gradient-overlay";

export function SocialListSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-evenly md:gap-4 md:grid md:grid-cols-2">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-103 block w-full h-full p-3 md:p-4"
        >
          <GradientOverlay />
          <div className="relative flex items-center justify-center md:justify-start gap-3">
            <div
              className="shrink-0"
              style={{
                color:
                  mounted && resolvedTheme === "dark"
                    ? social.color.dark
                    : social.color.light,
              }}
            >
              <social.Icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="hidden md:block font-medium text-foreground group-hover:text-primary transition-colors">
              {social.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
