import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function OverlayView({
  trigger,
  children,
  className,
  ...props
}: {
  trigger: React.ReactElement;
} & React.ComponentProps<typeof DialogContent>) {
  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent
        className={cn(
          "size-fit max-w-7xl! max-h-[90dvh]! p-0 rounded-none ring-0",
          className
        )}
        showCloseButton={false}
        {...props}
      >
        {children}
        <DialogClose
          render={
            <Button
              variant="outline"
              size="default"
              className="absolute -bottom-12 right-1/2 translate-x-1/2 text-white hover:text-white/80"
            />
          }
        >
          <XIcon />
          Close
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
