import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "./site-shell";

export const metadata: Metadata = {
  title: "Azizul Wahid",
  description:
    "Software and data engineer focused on cloud infrastructure, data platforms, and practical engineering systems.",
  metadataBase: new URL("https://azizulwahid.com"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
