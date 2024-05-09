import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Nikhil S - nikhilsnayak3473',
    template: '%s | Nikhil S - nikhilsnayak3473',
  },
  description: 'Software Engineer from India',
  metadataBase: new URL('https://nikhilsnayak3473.vercel.app'),
  openGraph: {
    title: 'Nikhil S - nikhilsnayak3473',
    description: 'Software Engineer from India',
    url: 'https://nikhilsnayak3473.vercel.app',
    siteName: 'Nikhil S - nikhilsnayak3473',
    locale: 'en_US',
    type: 'website',
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
  },
  twitter: {
    title: 'Nikhil S - nikhilsnayak3473',
    card: 'summary_large_image',
  },
  verification: {
    google: 'Ako36nekKPve0mWwGE-aLy1f_0bPXoqbK2sQhoAitEg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div className='mx-auto flex min-h-dvh max-w-screen-lg flex-col justify-between gap-4'>
            <Header />
            <main className='px-4 py-2'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
