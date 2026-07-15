"use client";

import Image from "next/image";
import { PlayIcon } from "lucide-react";
import { useState } from "react";
import { GradientOverlay } from "@/lib/components/common/gradient-overlay";
import type { VideoPost } from "@/lib/types/videos";
import { cn } from "@/lib/utils";
import { VideoDialog } from "./video-dialog";

type VideoCardProps = {
  video: VideoPost;
  className?: string;
};

export function VideoCard({ video, className }: VideoCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={
          video.caption ? `Play video: ${video.caption}` : "Play Instagram video"
        }
        className={cn(
          "group relative aspect-9/16 w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-md shadow-foreground/5 transition-all duration-300 hover:scale-102 hover:border-primary/50 hover:shadow-lg focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/30",
          className
        )}
        onClick={() => setDialogOpen(true)}
      >
        <Image
          src={video.thumbnailUrl}
          alt=""
          fill
          unoptimized
          sizes="(min-width: 1280px) 256px, (min-width: 1024px) 224px, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <GradientOverlay className="bg-linear-to-t opacity-70" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/30 bg-background/25 p-3 text-white/80 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-background/85 group-hover:text-primary group-focus-visible:scale-110 group-focus-visible:border-primary/50 group-focus-visible:bg-background/85 group-focus-visible:text-primary">
            <PlayIcon className="size-6 fill-current" />
          </span>
        </span>
      </button>

      <VideoDialog video={video} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
