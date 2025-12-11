import { useEffect, useState } from "react";
import { getCurrentBreakpoint } from "@/lib/utils";

export const useIsHydrated = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
};

/**
 * Hook to get the current breakpoint as a number.
 *
 * Return values:
 *
 * 1: xs (< 640px)
 *
 * 2: sm (>= 640px)
 *
 * 3: md (>= 768px)
 *
 * 4: lg (>= 1024px)
 *
 * 5: xl (>= 1280px)
 *
 * 6: 2xl (>= 1536px)
 */
export const useStreamBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
