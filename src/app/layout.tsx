import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import MainLayout from "@/components/layout/MainLayout";
import { siteConfig } from "@/constants/site";
import {ThemeProvider} from "@/components/providers/ThemeProvider";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="...">
  <ThemeProvider>
    <MainLayout>{children}</MainLayout>
  </ThemeProvider>
</body>
    </html>
  );
}