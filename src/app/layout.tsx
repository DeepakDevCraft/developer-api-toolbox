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
  metadataBase: new URL("https://buildafterwrk.com"),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description:
    "Free online developer tools including JSON Formatter, JWT Decoder, Base64 Encoder, URL Encoder, UUID Generator, and Unix Timestamp Converter.",

  keywords: [
    "developer tools",
    "json formatter",
    "jwt decoder",
    "base64 encoder",
    "url encoder",
    "uuid generator",
    "unix timestamp converter",
    "developer api toolbox",
  ],

  authors: [
    {
      name: "Deepak Kumar",
    },
  ],

  creator: "Deepak Kumar",
  openGraph: {
  title: siteConfig.name,

  description:
    "Free online developer tools including JSON Formatter, JWT Decoder, Base64 Encoder, URL Encoder, UUID Generator, and Unix Timestamp Converter.",

  url: "https://buildafterwrk.com",

  siteName: siteConfig.name,

  locale: "en_US",

  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: siteConfig.name,
  description:
    "Free online developer tools including JSON Formatter, JWT Decoder, Base64 Encoder, URL Encoder, UUID Generator, and Unix Timestamp Converter.",
  creator: "@deekumar_d22",
},
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