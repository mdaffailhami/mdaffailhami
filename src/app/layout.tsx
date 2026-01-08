import "./globals.css";
import { Inter, Arvo } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { daffa1Square } from "@/lib/assets/images";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";
import { Metadata } from "next";
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

// export const viewport: Viewport = {
//   viewportFit: "cover",
// };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: APP_TITLE,
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    countryName: "Indonesia",
    emails: "mdaffailhami@gmail.com",
    images: [
      {
        url: daffa1Square.src,
        width: daffa1Square.width,
        height: daffa1Square.height,
        alt: APP_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    images: [
      {
        url: daffa1Square.src,
        width: daffa1Square.width,
        height: daffa1Square.height,
        alt: APP_TITLE,
      },
    ],
  },
};

export default async function RootLayout({
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
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-PW7JWRRS" />

      <body className={`antialiased font-sans transition duration-300`}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
