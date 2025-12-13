"use client";

import { createContext, use, useState } from "react";

type ActiveSlideContextType = {
  activeSlide: string;
  setActiveSlide: (slide: string) => void;
};

const ActiveSlideContext = createContext<ActiveSlideContextType | null>(null);

export const useActiveSlide = () => {
  const context = use(ActiveSlideContext);
  if (!context) {
    throw new Error(
      "useActiveSlide must be used within an ActiveSlideProvider"
    );
  }
  return context;
};

export const ActiveSlideProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSlide, setActiveSlide] = useState("");

  return (
    <ActiveSlideContext.Provider value={{ activeSlide, setActiveSlide }}>
      {children}
    </ActiveSlideContext.Provider>
  );
};
