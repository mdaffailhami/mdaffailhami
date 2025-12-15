import { useEffect, useRef, useState } from "react";
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

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

export const useAnimateOnViewportIntersect = <T extends HTMLElement>({
  classNameTrigger,
  options,
}: {
  classNameTrigger: string;
  options?: IntersectionObserverInit;
}) => {
  const ref = useRef<T>(null);
  const observerOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const parsedClassNameTrigger = classNameTrigger.split(" ");
        if (entry.isIntersecting) {
          // Play the animation
          element.classList.add(...parsedClassNameTrigger);
          // Add Tailwind utility classes for the transition here if you prefer this over the CSS file approach
        } else {
          // Reset the animation by removing the class when it leaves the view
          element.classList.remove(...parsedClassNameTrigger);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [observerOptions]);

  return ref;
};
