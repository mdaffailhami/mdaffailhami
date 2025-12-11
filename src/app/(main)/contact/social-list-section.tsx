"use client";

import { socials } from "@/database/data/socials";
import { useTheme } from "next-themes";
import Link from "next/link";
import { GradientOverlay } from "@/components/gradient-overlay";

export function SocialListSection() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-row flex-wrap justify-evenly lg:gap-4 lg:grid lg:grid-cols-2">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-103 block h-full p-3 lg:p-4"
        >
          <GradientOverlay />
          <div className="relative flex items-center justify-center lg:justify-start gap-3">
            <div
              suppressHydrationWarning
              className="shrink-0"
              style={{
                color:
                  resolvedTheme === "dark"
                    ? social.color.dark
                    : social.color.light,
              }}
            >
              <social.Icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="hidden lg:block font-medium text-foreground group-hover:text-primary transition-colors">
              {social.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
