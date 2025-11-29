import { ParticlesBackground } from "@/components/particles";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Navbar } from "../../components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Navbar />
        <ThemeSwitcher />
      </header>
      {children}
      <ParticlesBackground id="particles" />
      {/* <ParticlesBackground id="particles-2" /> */}
      <footer></footer>
    </>
  );
}
