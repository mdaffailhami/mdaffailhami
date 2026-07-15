"use client";

import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/lib/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/lib/components/ui/dialog";
import { GradientOverlay } from "@/lib/components/common/gradient-overlay";
import type { VideoPost } from "@/lib/types/videos";

type VideoDialogProps = {
  video: VideoPost;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function VideoDialog({ video, open, onOpenChange }: VideoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-2rem)] max-w-xl overflow-y-auto">
        <GradientOverlay className="opacity-100!" />
        <DialogHeader>
          <DialogTitle className="sr-only">Instagram video</DialogTitle>
          <DialogDescription className="sr-only">
            {video.caption || "Instagram video from Daffa Ilhami"}
          </DialogDescription>
        </DialogHeader>

        <div className="relative flex flex-col gap-4">
          {open && (
            <video
              className="mx-auto aspect-[9/16] max-h-[62dvh] w-full max-w-90 rounded-2xl bg-black object-contain"
              controls
              autoPlay
              playsInline
              poster={video.thumbnailUrl}
            >
              <source src={video.mediaUrl} type="video/mp4" />
            </video>
          )}

          <div className="flex min-w-0 flex-col gap-4">
            <p className="max-h-20 overflow-y-auto whitespace-pre-wrap pr-2 text-sm leading-relaxed text-muted-foreground lg:text-base">
              {video.caption || "No caption."}
            </p>

            {video.permalink && (
              <Link
                href={video.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <Button>
                  Open on Instagram
                  <ExternalLinkIcon className="size-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
