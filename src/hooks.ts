import { useEffect, useState, useSyncExternalStore } from "react";
import { getCurrentBreakpoint } from "@/lib/utils";

/**
 * Hook to detect if component is hydrated on the client.
 * @returns {boolean} True if component is hydrated on client
 */
export const useIsHydrated = () => {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
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
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export const useIsInView = <T extends Element>(
  options?: IntersectionObserverInit
) => {
  const [isInView, setIsInView] = useState(false);
  // We use useState instead of useRef here to implement the "Callback Ref" pattern.
  //
  // Why?
  // useRef object content (.current) changes do NOT trigger a re-render or effect re-execution.
  // If the ref is attached to an element that is conditionally rendered (e.g. {show && <div ref={ref} />}),
  // a standard useRef + useEffect([ref.current]) would fail to observe the element because the effect
  // wouldn't re-run when the element is finally created.
  //
  // By using useState, setting the ref (when the element mounts) updates the state,
  // which forces a re-render and ensures the IntersectionObserver effect runs with the correct element.
  const [componentRef, setComponentRef] = useState<T | null>(null);

  useEffect(() => {
    // If ref is null (element not mounted yet), skip
    if (!componentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(componentRef);

    return () => {
      observer.disconnect();
    };
  }, [componentRef, options]);

  return { componentRef: setComponentRef, isInView };
};
