import { ParticlesBackground } from "@/components/animation/particles-background";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { DesktopNavbar } from "@/components/layout/desktop-navbar";
import { MobileNavbar } from "@/components/layout/mobile-navbar";
import { GradientOverlay } from "@/components/common/gradient-overlay";
import { TutorialOverlay } from "@/components/common/tutorial-overlay";

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
