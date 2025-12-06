"use client";

import { LinkIconBadge } from "@/components/link-icon-badge";
import { technologies } from "@/lib/constants";
import { useTheme } from "next-themes";

export function TechListSection() {
  const { resolvedTheme } = useTheme();

  return (
    <ul className="flex flex-row gap-4 flex-wrap">
      {technologies.map((tech) => (
        <li key={tech.label}>
          <LinkIconBadge
            icon={tech.Icon}
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
