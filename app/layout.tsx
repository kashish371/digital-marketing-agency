import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Rites Digital Marketing | Premium Digital Marketing Agency',
    template: '%s | Rites Digital Marketing',
  },
  description: 'We scale brands in the digital world. Premium digital marketing services including SEO, PPC, Social Media Marketing, Web Development, and Branding.',
  keywords: ['digital marketing', 'SEO', 'PPC', 'social media marketing', 'web development', 'branding', 'marketing agency'],
  authors: [{ name: 'Rites Digital Marketing' }],
  creator: 'Rites Digital Marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ritesdigital.com',
    siteName: 'Rites Digital Marketing',
    title: 'Rites Digital Marketing | Premium Digital Marketing Agency',
    description: 'We scale brands in the digital world. Premium digital marketing services.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rites Digital Marketing',
    description: 'We scale brands in the digital world.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
