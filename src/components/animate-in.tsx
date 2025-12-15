"use client";

import { useInView } from "@/hooks";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimateInProps {
  children: React.ReactNode;
  /**
   * The animation class to apply from tw-animate-css or custom.
   * Default: "animate-fade-in-up"
   */
  animation?: string;
  /**
   * Delay in milliseconds.
   */
  delay?: number;
  /**
   * Duration in milliseconds.
   */
  duration?: number;
  /**
   * Threshold for IntersectionObserver (0-1).
   * Default: 0
   */
  threshold?: number;
  className?: string;
  /**
   * Style object to merge with animation styles.
   */
  style?: React.CSSProperties;
}

export const AnimateIn = ({
  children,
  animation = "animate-in fade-in slide-in-from-bottom-8 duration-500",
  delay,
  duration,
  threshold = 0,
  className,
  style,
}: AnimateInProps) => {
  const { ref, isInView } = useInView({ threshold });

  const combinedStyle: React.CSSProperties = {
    ...style,
    animationDelay: delay ? `${delay}ms` : undefined,
    animationDuration: duration ? `${duration}ms` : undefined,
    // Only apply opacity 0 if not in view to hide it before animation starts
    // Once in view, the animation class handles the opacity
    opacity: isInView ? undefined : 0,
  };

  return (
    <div
      ref={ref}
      className={cn(isInView ? animation : null, className)}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};
