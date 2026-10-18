import type { Metadata } from 'next';
import { Poppins, Source_Sans_3 } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import SmoothScroll from './components/SmoothScroll';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://desinic.com'),
  title: 'Desinic - Get Best UI Design',
  description: 'Desinic - We Design Interfaces That Users Love. Digital agency offering strategy, research, web development, and modern digital solutions.',
  keywords: ['UI Design', 'Web Development', 'Digital Agency', 'Desinic', 'Product Design'],
  authors: [{ name: 'Desinic Team' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Desinic - Get Best UI Design',
    description: 'We Design Interfaces That Users Love.',
    url: 'https://desinic.com',
    siteName: 'Desinic',
    images: [
      {
        url: '/images/hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'Desinic Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${sourceSans.variable}`}>
      <body id="top">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
