"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Laptop2Icon, LucideIcon, MoonIcon, SunIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsHydrated, useBreakpoint } from "@/hooks";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, opacity: 0 });

  // Effect to update the indicator position when theme changes
  useEffect(() => {
    if (!containerRef.current) return;

    const activeButton = containerRef.current.querySelector<HTMLButtonElement>(
      `button[data-theme="${theme}"]`
    );

    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        opacity: 1,
      });
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="z-50 flex flex-row fixed max-lg:top-1.5 lg:bottom-3 right-1/2 translate-x-1/2 bg-background border border-border shadow-md shadow-foreground/5 rounded-full"
    >
      <div
        className="absolute inset-0 w-10 bg-primary/20 rounded-full outline-2 outline-primary transition-all duration-300 ease-in-out"
        style={indicatorStyle}
      />
      <ThemeButton
        theme="light"
        isActive={isHydrated && theme === "light"}
        onClick={() => setTheme("light")}
        icon={SunIcon}
      />
      <ThemeButton
        theme="system"
        isActive={isHydrated && theme === "system"}
        onClick={() => setTheme("system")}
        icon={Laptop2Icon}
      />
      <ThemeButton
        theme="dark"
        isActive={isHydrated && theme === "dark"}
        onClick={() => setTheme("dark")}
        icon={MoonIcon}
      />
    </div>
  );
}

function ThemeButton({
  theme,
  isActive,
  onClick,
  icon: Icon,
}: {
  theme: string;
  isActive: boolean;
  onClick(): void;
  icon: LucideIcon;
}) {
  const breakpoint = useBreakpoint();

  // Don't create the button as function to solve the tooltip not showing bug
  const theButton = (
    <Button
      variant="ghost"
      size="icon"
      data-theme={theme}
      onClick={onClick}
      className={cn(
        "rounded-full size-10 hover:text-primary",
        isActive && "text-primary"
      )}
    >
      <Icon className="size-5" />
    </Button>
  );

  const ButtonWithTooltip = () => (
    <Tooltip>
      <TooltipTrigger render={() => theButton} />
      <TooltipContent>
        <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
      </TooltipContent>
    </Tooltip>
  );

  // If not hydrated yet or breakpoint is less than 4 (< "lg")
  if (!breakpoint || breakpoint < 4) {
    return theButton;
  } else {
    return <ButtonWithTooltip />;
  }
}
