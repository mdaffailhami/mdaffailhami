"use client";

import { ThemeSwitcher } from "@/lib/components/layout/theme-switcher";
import { DesktopNavbar } from "@/lib/components/layout/desktop-navbar";
import { MobileNavbar } from "@/lib/components/layout/mobile-navbar";

type MainHeaderProps = {
  hasVideos: boolean;
};

export function MainHeader({ hasVideos }: MainHeaderProps) {
  return (
    <header>
      <DesktopNavbar hasVideos={hasVideos} />
      <ThemeSwitcher />
      <MobileNavbar hasVideos={hasVideos} />
    </header>
  );
}
