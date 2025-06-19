// src/app/layout.js
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Patrick_Hand } from 'next/font/google';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mochii\'s Portfolio',
  description: 'Loves doing random stuff',
}

const patrick = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={patrick.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}