"use client";

import { LinkIconBadge } from "@/lib/components/common/link-icon-badge";
import { useBreakpoint } from "@/lib/hooks";
import { favoriteTechs } from "@/lib/data/favorite-techs";

export function TechListSection() {
  const breakpoint = useBreakpoint();

  return (
    <ul className="flex flex-row fl-gap-2/4 flex-wrap">
      {favoriteTechs.map((tech) => (
        <li key={tech.label}>
          <LinkIconBadge
            icon={tech.icon}
            label={tech.label}
            href={tech.url}
            size={!breakpoint ? "sm" : breakpoint <= 5 ? "sm" : "md"}
          />
        </li>
      ))}
    </ul>
  );
}
