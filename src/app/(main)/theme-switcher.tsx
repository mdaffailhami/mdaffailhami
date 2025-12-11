"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Laptop2Icon, MoonIcon, SunIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsHydrated, useStreamBreakpoint } from "@/hooks";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const activeButton = containerRef.current.querySelector<HTMLButtonElement>(
      `button[data-theme="${theme}"]`
    );

    if (activeButton) {
      setIndicatorStyle({ left: activeButton.offsetLeft });
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="z-50 flex flex-row fixed max-lg:top-1.5 lg:bottom-5 right-1/2 translate-x-1/2 bg-background border border-border shadow-md shadow-foreground/5 rounded-full"
    >
      <div
        className="absolute inset-0 w-10 bg-primary/20 rounded-full outline-2 outline-primary transition-all duration-300 ease-in-out"
        style={indicatorStyle}
      />
      <ThemeButton
        theme="light"
        isActive={theme === "light"}
        onClick={() => setTheme("light")}
        icon={<SunIcon className="size-5" />}
      />
      <ThemeButton
        theme="system"
        isActive={theme === "system"}
        onClick={() => setTheme("system")}
        icon={<Laptop2Icon className="size-5" />}
      />
      <ThemeButton
        theme="dark"
        onClick={() => setTheme("dark")}
        isActive={theme === "dark"}
        icon={<MoonIcon className="size-5" />}
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
  const breakpoint = useStreamBreakpoint();
  const isMobile = breakpoint < 4;

  return (
    <Tooltip
      open={isMobile ? false : undefined} // Mobile devices should not show tooltip
      delayDuration={500}
    >
      <TooltipTrigger asChild>
        <Button
          suppressHydrationWarning
          variant="ghost"
          size="icon"
          data-theme={theme}
          onClick={onClick}
          className={cn("rounded-full size-10 hover:text-primary", {
            "text-primary": isActive,
          })}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
      </TooltipContent>
    </Tooltip>
  );
}
