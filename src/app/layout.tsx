import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { cookies } from "next/headers";

import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { base } from "@/utils/hostname";

export const metadata: Metadata = {
  title: {
    absolute: "Jereko - My personal website | Jesse Koldewijn",
    template: "%s | Jereko - My personal website | Jesse Koldewijn",
  },
  description:
    "Jereko - My personal website | build and developed by Jesse Koldewijn",
  metadataBase: new URL(base),
  icons: [
    {
      rel: "icon",
      sizes: "512x512",
      url: "/favicons/android-chrome-512x512.png",
    },
    {
      rel: "icon",
      sizes: "192x192",
      url: "/favicons/android-chrome-192x192.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicons/favicon.ico",
    },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Jereko",
    description: "tbh idk what to put here yet",
    url: "https://jereko.dev",
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieJar = cookies();
  const cookieJarTheme = cookieJar.get("theme");

  return (
    <html
      lang="en"
      className={cn(
        "transition-colors duration-500 ease-in-out",
        cookieJarTheme?.value,
        GeistSans.variable,
        GeistMono.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body className="font-sans">
        <div className="pb-8">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
