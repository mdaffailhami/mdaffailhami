import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const techBadgeVariants = cva(
  "bg-card gap-x-2 font-normal border-2 border-border hover:border-primary active:border-primary transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 hover:bg-linear-to-r from-primary/10 dark:from-primary/20 to-transparent",
  {
    variants: {
      size: {
        sm: "px-2.5 py-0.5 text-sm",
        md: "px-3 py-1 text-base",
        // lg: "px-4 py-1.5 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const iconSizeVariants = {
  sm: "size-4!",
  md: "size-5!",
  // lg: "size-6!",
};

type TechBadgeProps = VariantProps<typeof techBadgeVariants> & {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  label: string;
  color: string;
  href: string;
  className?: string;
};

export function TechBadge({
  icon: Icon,
  label,
  color,
  size,
  href,
  className,
  ...props
}: TechBadgeProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      <Badge
        variant="secondary"
        className={cn(techBadgeVariants({ size }), className)}
        {...props}
      >
        <Icon
          style={{ color: color }}
          className={iconSizeVariants[size || "md"]}
        />
        <span>{label}</span>
      </Badge>
    </Link>
  );
}
