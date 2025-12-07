"use client";

import { LinkIconBadge } from "@/components/link-icon-badge";
import { favoriteTechs } from "@/database/data/favorite-techs";
import { useTheme } from "next-themes";

export function TechListSection() {
  const { resolvedTheme } = useTheme();

  return (
    <ul className="flex flex-row gap-4 flex-wrap">
      {favoriteTechs.map((tech) => (
        <li key={tech.label}>
          <LinkIconBadge
            icon={tech.icon}
            label={tech.label}
            href={tech.url}
            iconColor={
              resolvedTheme === "dark" ? tech.color.dark : tech.color.light
            }
          />
        </li>
      ))}
    </ul>
  );
}
