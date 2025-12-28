import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type OverlayViewProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
  description: string;
  showCloseButton?: boolean;
  className?: string;
  contentClassName?: string;
};

export function OverlayView({
  open,
  onOpenChange,
  children,
  title,
  description,
  showCloseButton = true,
  className,
  contentClassName,
}: OverlayViewProps) {
  // Desktop view using Dialog
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-[95vw] max-h-[95vh] p-0 overflow-hidden",
          className
        )}
      >
        {/* Title and Description */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>

        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}

        {/* Content */}
        <div
          className={cn(
            "relative w-full h-full overflow-y-auto p-6",
            contentClassName
          )}
        >
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
