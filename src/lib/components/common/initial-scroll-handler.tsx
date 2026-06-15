"use client";

import { useEffect } from "react";
import { scrollTo } from "@/lib/utils";

export function InitialScrollHandler() {
  useEffect(() => {
    // Scroll to the hash on initial load
    scrollTo(window.location.hash);
  }, []);

  return null;
}
