import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tour the Kitchen | Shared Kitchen Network",
  description:
    "Schedule your free tour of our licensed commercial kitchen. Launch your food business in as little as one business day. Available 24/7 for food trucks, catering, bakeries, and meal prep.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
            <head>
        {/* CSS Dosyalarını Buraya Link Olarak Ekle */}
        <link rel="stylesheet" href="/assets/css/plugins.bundle.css" />
        <link rel="stylesheet" href="/assets/css/style.bundle.css" />
        <link rel="stylesheet" href="/assets/css/select2.min.css" />
      </head>
      <body>
        {children}

        {/* JS Dosyalarını 'Script' Bileşeni ile En Alta Ekle */}
        {/* jQuery önce yüklenmeli, strategy="beforeInteractive" kritik olabilir */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/js/scripts.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/js/select2.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

