import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import './globals.css'


export const metadata: Metadata = {
  title: "TrimTab Modern Marine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.className} ${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
