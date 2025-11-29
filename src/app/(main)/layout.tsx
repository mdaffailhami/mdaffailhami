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
      <footer></footer>
    </>
  );
}
