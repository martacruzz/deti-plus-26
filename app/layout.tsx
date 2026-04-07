import React from "react"
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "deti+",
  description:
    "DETIPlus is a 3-day company fair organized by NEEETA, NEI and NEECT at DETI, University of Aveiro. May 19-21, 2026.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
