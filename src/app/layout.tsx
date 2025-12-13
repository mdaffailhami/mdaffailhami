import type { Metadata } from "next";
import { Inter, Arvo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RootProviders from "./providers";

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

export const metadata: Metadata = {
  title: "Daffa Ilhami",
  description: "Muhammad Daffa Ilhami's Personal Web",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

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
