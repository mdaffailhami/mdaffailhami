import { ParticlesBackground } from "@/components/particles";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { DesktopNavbar } from "../../components/desktop-navbar";
import { MobileNavbar } from "@/components/mobile-navbar";

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
