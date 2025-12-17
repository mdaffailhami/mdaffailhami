import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentBreakpoint() {
  if (typeof window === "undefined")
    throw new Error(
      "getCurrentBreakpoint() must be used in a client-side environment"
    );

  const width = window.innerWidth;

  if (width >= 1536) return 6;
  if (width >= 1280) return 5;
  if (width >= 1024) return 4;
  if (width >= 768) return 3;
  if (width >= 640) return 2;
  return 1;
}

export const scrollTo = (hash: string) => {
  try {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } catch {
    // Silently fail if element not found
  }
};
