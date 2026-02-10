import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from './components/navigation';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Finitless Design System',
  description: 'Brand tokens, React components, and Tailwind preset for Finitless applications.',
  metadataBase: new URL('https://brand.finitless.com'),
  openGraph: {
    title: 'Finitless Design System',
    description: 'Brand tokens, React components, and Tailwind preset for Finitless applications.',
    url: 'https://brand.finitless.com',
    siteName: 'Finitless',
    images: [
      {
        url: '/assets/logos/finitless-logo-square-on-dark-1024.png',
        width: 1024,
        height: 1024,
        alt: 'Finitless Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finitless Design System',
    description: 'Brand tokens, React components, and Tailwind preset for Finitless applications.',
    images: ['/assets/logos/finitless-logo-square-on-dark-1024.png'],
  },
  icons: {
    icon: '/assets/icons/finitless-icon-on-dark-32.png',
    shortcut: '/assets/icons/finitless-icon-on-dark-32.png',
    apple: '/assets/icons/finitless-icon-on-dark-180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-background-base text-white antialiased">
        <Navigation />
        <main className="lg:pl-60">
          {children}
        </main>
      </body>
    </html>
  );
}
