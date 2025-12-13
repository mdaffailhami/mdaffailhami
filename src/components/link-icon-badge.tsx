import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { GradientOverlay } from "@/components/gradient-overlay";

const linkIconBadgeVariants = cva(
  "bg-card gap-x-2 font-normal border-2 border-border transition-all duration-200 ease-in-out",
  {
    variants: {
      size: {
        sm: "px-2.25 py-3.25 text-sm",
        md: "px-3 py-4 text-base",
        // lg: "px-4 py-1.5 text-lg",
      },
      interactive: {
        true: "hover:border-primary cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      interactive: false,
    },
  }
);

const iconSizeVariants = {
  sm: "size-4.5!",
  md: "size-5!",
  // lg: "size-6!",
};

type LinkIconBadgeProps = VariantProps<typeof linkIconBadgeVariants> & {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  label: string;
  iconColor: string;
  href?: string;
  className?: string;
};

export function LinkIconBadge({
  icon: Icon,
  label,
  iconColor,
  size,
  href,
  className,
  ...props
}: LinkIconBadgeProps & React.HTMLAttributes<HTMLSpanElement>) {
  const badge = (
    <Badge
      variant="outline"
      className={cn(
        linkIconBadgeVariants({ size, interactive: !!href }),
        className
      )}
      {...props}
    >
      <div className="shrink-0" style={{ color: iconColor }}>
        <Icon className={iconSizeVariants[size || "md"]} />
      </div>
      <span>{label}</span>
    </Badge>
  );

  if (href) {
    return (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="group relative inline-flex rounded-full overflow-hidden transition-transform duration-200 hover:scale-105"
      >
        {badge}
        <GradientOverlay className="from-primary/15!" />
      </Link>
    );
  }

  return (
    <div className="relative group rounded-full overflow-hidden">
      {badge}
      <GradientOverlay />
    </div>
  );
}
