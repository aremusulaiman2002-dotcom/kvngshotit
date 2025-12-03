// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://kvngshotit.vercel.app';

export const metadata: Metadata = {
  title: 'KVNGSHOTIT | Cinematic Photography & Visual Storytelling',
  description: 'Premium cinematic photography for weddings, portraits, and events. Capturing moments with royal precision.',
  
  // Open Graph
  openGraph: {
    title: 'KVNGSHOTIT | Cinematic Photography',
    description: 'Premium cinematic photography for weddings, portraits, and events.',
    url: baseUrl,
    siteName: 'KVNGSHOTIT',
    images: [
      {
        url: `${baseUrl}/images/logo/kvngshotit-logo.png`,
        width: 1200,
        height: 630,
        alt: 'KVNGSHOTIT Photography Logo',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'KVNGSHOTIT | Cinematic Photography',
    description: 'Capturing moments with royal precision',
    images: [`${baseUrl}/images/logo/kvngshotit-logo.png`],
  },
  
  // Additional SEO
  keywords: [
    'KVNGSHOTIT',
    'cinematic photography',
    'wedding photography',
    'portrait photography',
    'event photography',
    'professional photographer',
    'visual storytelling'
  ],
  authors: [{ name: 'KVNGSHOTIT' }],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0D0D0D" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Developer Credit */}
        <meta name="author" content="Sulaiman Aremu" />
        <link rel="author" href="https://sulaiman-portfolio-sigma.vercel.app/" />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-cinematic-black text-silver-gray`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        
        {/* Developer Credit - Fixed position */}
        <div className="fixed bottom-4 right-4 z-50">
          <a 
            href="https://sulaiman-portfolio-sigma.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer nofollow"
            className="bg-gradient-to-r from-cinematic-black via-accent-gold/20 to-cinematic-black text-silver-gray px-4 py-2 rounded-full text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 border border-accent-gold/30 backdrop-blur-sm"
            aria-label="Visit developer portfolio (opens in new tab)"
          >
            <span className="text-accent-gold">💻</span>
            <span className="hidden sm:inline">Developed by</span>
            <span className="text-accent-gold font-bold">SulaimanDev</span>
          </a>
        </div>
      </body>
    </html>
  );
}