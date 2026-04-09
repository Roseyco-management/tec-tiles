import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Partytown } from "@qwik.dev/partytown/react"
import "./globals.css"
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
      <head>
        <Partytown forward={["dataLayer.push", "gtag"]} />
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-1ZYTTJQNDK"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1ZYTTJQNDK');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
