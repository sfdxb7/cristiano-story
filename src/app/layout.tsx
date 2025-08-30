import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'The Making of Greatness | Cristiano Ronaldo',
  description: 'A luxury digital biography exploring the internal journey and character development of Cristiano Ronaldo from the streets of Madeira to global icon.',
  keywords: [
    'Cristiano Ronaldo',
    'biography',
    'football',
    'soccer',
    'luxury design',
    'interactive story',
    'digital experience'
  ],
  authors: [{ name: 'Digital Biography Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#f17a0f',
  openGraph: {
    title: 'The Making of Greatness | Cristiano Ronaldo',
    description: 'A luxury digital biography exploring the character development of football\'s greatest icon.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Making of Greatness'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Making of Greatness | Cristiano Ronaldo',
    description: 'A luxury digital biography of football\'s greatest icon.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}