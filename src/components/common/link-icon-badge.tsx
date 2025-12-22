import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { GradientOverlay } from "@/components/common/gradient-overlay";
import { SvgRenderer } from "./svg-renderer";
import { CSSProperties } from "react";

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
  icon: { svg: string; light: string; dark: string };
  label: string;
  href?: string;
  className?: string;
};

export function LinkIconBadge({
  icon,
  label,
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
      <div className="shrink-0 flex items-center justify-center">
        <div className={cn("relative", iconSizeVariants[size || "md"])}>
          <SvgRenderer
            svg={icon.svg}
            style={
              { "--light": icon.light, "--dark": icon.dark } as CSSProperties
            }
            className="text-(--light) dark:text-(--dark) w-full h-full"
          />
        </div>
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
        <GradientOverlay />
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
