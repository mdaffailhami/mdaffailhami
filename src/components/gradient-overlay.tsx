import { cn } from "@/lib/utils";

export function GradientOverlay({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "z-10 pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100",
        className,
      )}
    />
  );
}
