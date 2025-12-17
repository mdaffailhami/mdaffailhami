import type { Metadata } from "next";
import { Inter, Arvo } from "next/font/google";
import "./globals.css";
import RootProviders from "./providers";
import { config } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const arvo = Arvo({
  weight: ["400", "700"],
  variable: "--font-arvo",
  subsets: ["latin"],
});

// const jetBrainsMono = JetBrains_Mono({
//   variable: "--font-jetbrains-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = config.metadata;

// export const viewport: Viewport = {
//   viewportFit: "cover",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${arvo.variable}`}
    >
      <body className={`antialiased font-sans transition duration-300`}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
