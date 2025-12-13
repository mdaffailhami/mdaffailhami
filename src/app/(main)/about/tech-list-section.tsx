"use client";

import { LinkIconBadge } from "@/components/link-icon-badge";
import { favoriteTechs } from "@/database/data/favorite-techs";
import { useTheme } from "next-themes";
import { useBreakpoint } from "@/hooks";

export function TechListSection() {
  const { resolvedTheme } = useTheme();
  const breakpoint = useBreakpoint();
  const isHydrated = breakpoint !== undefined;

  return (
    <ul className="flex flex-row fl-gap-2/4 flex-wrap">
      {favoriteTechs.map((tech) => (
        <li key={tech.label}>
          <LinkIconBadge
            icon={tech.icon}
            label={tech.label}
            href={tech.url}
            size={!breakpoint ? "sm" : breakpoint <= 5 ? "sm" : "md"}
            iconColor={
              !isHydrated
                ? "var(--color-foreground)"
                : resolvedTheme === "dark"
                ? tech.color.dark
                : tech.color.light
            }
          />
        </li>
      ))}
    </ul>
  );
}
