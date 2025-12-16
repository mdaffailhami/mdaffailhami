"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "@/lib/utils";
import { useIsInView } from "@/hooks";

type AnimateInProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * The "tw-animate-css" animation class to apply when the component is in view.
   * Default = "fade-in"
   */
  animation?: string;
  /**
   * A number between 0 and 1 indicating the percentage of the target element
   * which must be visible in the viewport to trigger the animation.
   * Default = 0
   */
  threshold?: number;
  /**
   * The duration of the animation in seconds.
   * Default = 1.5
   */
  duration?: number;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  render?: React.ReactElement;
};

export const AnimateIn = ({
  animation,
  threshold = 0,
  duration = 1.2,
  render,
  ...props
}: AnimateInProps) => {
  const { componentRef, isInView } = useIsInView<HTMLDivElement>({ threshold });

  const mergedProps = mergeProps(
    {
      ref: componentRef,
      style: {
        "--duration": `${duration}s`,
      } as React.CSSProperties,
      className: cn(
        isInView && "animate-in duration-(--duration)",
        isInView ? animation : "invisible", // Use invisible to solve the flashing bug
        isInView && "fade-in" // Always combine with fade-in animation so it won't look weird yk
      ),
    },
    props
  );

  return useRender({
    defaultTagName: "div",
    render,
    props: mergedProps,
  });
};
