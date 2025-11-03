// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Juan Jefferson',
  description: 'Portfolio pribadi Juan Jefferson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      {/* Latar belakang abu-abu muda dan teks hitam (desain modern) */}
      <body
        className={`${inter.className} bg-gray-100 text-gray-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}