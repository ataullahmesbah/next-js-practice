

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New 2024',
  description: 'Next Hero',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  console.log('from RootLayout');
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        
      </body>
    </html>
  )
}

export default RootLayout;
