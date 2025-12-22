import { ThemeProvider } from "next-themes";

import { ActiveSlideProvider } from "@/contexts/active-slide";
import { getSettings } from "@/lib/api/settings";

export default async function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = (await getSettings()).data;

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
