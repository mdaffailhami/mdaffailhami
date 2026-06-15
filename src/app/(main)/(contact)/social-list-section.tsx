"use client";

import Link from "next/link";
import { GradientOverlay } from "@/lib/components/common/gradient-overlay";
import { orderedSocials } from "@/lib/data/socials";
import { IconRenderer } from "@/lib/components/common/icon-renderer";
import { CSSProperties } from "react";

export function SocialListSection() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly lg:gap-4 lg:grid lg:grid-cols-2">
      {orderedSocials.map((social) => (
        <Link
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-md shadow-foreground/5 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-[1.03] block h-full p-3 lg:p-4"
        >
          <GradientOverlay />
          <div className="relative flex items-center justify-center lg:justify-start gap-3">
            <div className="shrink-0 relative size-6">
              <IconRenderer
                icon={social.icon}
                style={
                  {
                    "--light": social.icon.light,
                    "--dark": social.icon.dark,
                  } as CSSProperties
                }
                className="text-(--light) dark:text-(--dark)"
              />
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
