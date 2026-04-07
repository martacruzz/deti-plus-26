import React from "react"
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const architype = localFont({
  src: "../public/fonts/Architype-Stedelijk.ttf",
  variable: "--font-architype", // Creates a CSS variable we can use in Tailwind
});

const vayuSans = localFont({
  src: "../public/fonts/VayuSans-Medium.ttf",
  variable: "--font-vayusans", 
});

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${architype.variable} ${vayuSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
