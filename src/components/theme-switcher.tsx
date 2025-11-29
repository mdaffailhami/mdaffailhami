"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Laptop2Icon, MoonIcon, SunIcon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0 });
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!containerRef.current) return;

    const activeButton = containerRef.current.querySelector<HTMLButtonElement>(
      `button[data-theme="${theme}"]`,
    );

    if (activeButton) {
      setIndicatorStyle({ left: activeButton.offsetLeft });
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="flex flex-row fixed max-md:top-1.5 md:bottom-5 right-1/2 translate-x-1/2 bg-card border border-border shadow-md shadow-foreground/5 rounded-full"
    >
      <div
        className="absolute inset-0 w-12 bg-primary/20 rounded-full outline-2 outline-primary transition-all duration-300 ease-in-out"
        style={indicatorStyle}
      />
      <ThemeButton
        theme="light"
        isActive={mounted && theme === "light"}
        onClick={() => setTheme("light")}
        icon={<SunIcon className="size-6" />}
      />
      <ThemeButton
        theme="system"
        isActive={mounted && theme === "system"}
        onClick={() => setTheme("system")}
        icon={<Laptop2Icon className="size-6" />}
      />
      <ThemeButton
        theme="dark"
        onClick={() => setTheme("dark")}
        isActive={mounted && theme === "dark"}
        icon={<MoonIcon className="size-6" />}
      />
    </div>
  );
}

function ThemeButton({
  theme,
  isActive,
  onClick,
  icon,
}: {
  theme: string;
  isActive: boolean;
  onClick(): void;
  icon: React.ReactNode;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      data-theme={theme}
      onClick={onClick}
      className={cn("rounded-full size-12", {
        "text-primary": isActive,
      })}
    >
      {icon}
    </Button>
  );
}
