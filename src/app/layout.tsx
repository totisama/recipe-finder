import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipe Finder',
  description: 'Find the best recipes here.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#2d2013]`}>
        <main className='mb-10 flex max-h-full min-h-screen flex-col items-center gap-y-10 px-24 py-10'>
          <Link href={'/'}>
            <h1 className='text-6xl text-white'>Repice Finder</h1>
          </Link>
          {children}
        </main>
      </body>
    </html>
  )
}
