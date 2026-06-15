import { ParticlesBackground } from "@/lib/components/animation/particles-background";
import { ThemeSwitcher } from "@/lib/components/layout/theme-switcher";
import { DesktopNavbar } from "@/lib/components/layout/desktop-navbar";
import { MobileNavbar } from "@/lib/components/layout/mobile-navbar";
import { GradientOverlay } from "@/lib/components/common/gradient-overlay";
import { TutorialOverlay } from "@/lib/components/common/tutorial-overlay";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <DesktopNavbar />
        <ThemeSwitcher />
        <MobileNavbar />
      </header>
      {children}
      <ParticlesBackground id="particles" />
      <GradientOverlay className="opacity-100! z-50" />
      <TutorialOverlay />
    </>
  );
}
