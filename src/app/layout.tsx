import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KVNGSHOTIT | Cinematic Photography & Visual Storytelling',
  description: 'Premium cinematic photography for weddings, portraits, and events. Capturing moments with royal precision.',
  keywords: ['photography', 'cinematic', 'wedding', 'portrait', 'events', 'KVNGSHOTIT'],
  authors: [{ name: 'KVNGSHOTIT' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kvnghotit.com',
    title: 'KVNGSHOTIT | Cinematic Photography',
    description: 'Premium cinematic photography for weddings, portraits, and events.',
    siteName: 'KVNGSHOTIT',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0D0D0D" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#E5E5E5',
              border: '1px solid #C9A86A',
            },
          }}
        />
      </body>
    </html>
  );
}