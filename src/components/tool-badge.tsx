import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

interface ToolBadgeProps {
  icon: IconType;
  label: string;
  color: string;
  className?: string;
}

export function ToolBadge({
  icon: Icon,
  label,
  color,
  className,
}: ToolBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "gap-x-2 px-3 py-1 text-base font-normal outline-2 outline-border hover:outline-primary active:outline-primary hover:cursor-default",
        className,
      )}
    >
      <Icon
        // Define custom CSS variable
        style={{ "--icon-color": color } as React.CSSProperties}
        className="size-5! text-(--icon-color)"
      />
      <span>{label}</span>
    </Badge>
  );
}
