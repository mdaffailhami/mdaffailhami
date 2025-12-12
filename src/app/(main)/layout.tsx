import { ParticlesBackground } from "./particles-background";
import { ThemeSwitcher } from "./theme-switcher";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

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
    </>
  );
}
