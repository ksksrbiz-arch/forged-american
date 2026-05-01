import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';

const display = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://forgedamerican.com'),
  title: {
    default: 'Forged American — No Apologies. Just Real.',
    template: '%s | Forged American',
  },
  description: "Built for the ones who work hard, live loud, and don't ask permission. Backwoods raised. American made. This isn't fashion — it's who you are.",
  openGraph: {
    title: 'Forged American',
    description: "Built for the ones who work hard, live loud, and don't ask permission. Backwoods raised. American made. This isn't fashion — it's who you are.",
    type: 'website',
    siteName: 'Forged American',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
