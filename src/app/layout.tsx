import type React from 'react'
import type { Metadata } from 'next'
import { Itim } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const itim = Itim({ subsets: ['latin'], weight: ['400'] })

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
      <body className={`${itim.className} bg-[#2d2013]`}>
        <main className='mx-auto mb-10 flex max-w-6xl flex-col items-center justify-center px-10 py-10 lg:px-0'>
          <Link href={'/'}>
            <h1 className='text-6xl text-white'>Recipe Finder</h1>
          </Link>
          {children}
        </main>
      </body>
    </html>
  )
}
