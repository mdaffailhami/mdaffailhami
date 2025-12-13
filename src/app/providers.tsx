import { ThemeProvider } from "next-themes";

import { ActiveSlideProvider } from "@/contexts/active-slide";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      // disableTransitionOnChange
    >
      <ActiveSlideProvider>{children}</ActiveSlideProvider>
    </ThemeProvider>
  );
}
