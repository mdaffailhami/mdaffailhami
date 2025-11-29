import { cn } from "@/lib/utils";

export function Slide({
  id,
  children,
  className,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={cn(
        "snap-center snap-always size-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32",
        className,
      )}
    >
      {children}
    </div>
  );
}
