"use client";

import { LinkIconBadge } from "@/components/common/link-icon-badge";
import { useBreakpoint } from "@/hooks";
import { PublicTech } from "@/lib/types/database";

export function TechListSection({ techs }: { techs: PublicTech[] }) {
  const breakpoint = useBreakpoint();

  return (
    <ul className="flex flex-row fl-gap-2/4 flex-wrap">
      {techs.map((tech) => (
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
