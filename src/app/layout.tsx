import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { TopBar } from "@/components/layout/TopBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { siteConfig } from "@/config/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Premium Tiles & Flooring`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "tiles",
    "floor tiles",
    "wall tiles",
    "outdoor tiles",
    "bathroom tiles",
    "kitchen tiles",
    "SPC flooring",
    "PVC panels",
    "UK tiles",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <TopBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
