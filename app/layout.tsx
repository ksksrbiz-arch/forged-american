import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://forgedamerican.com'),
  title: { default: "Forged American \u2014 No Apologies. Just Real.", template: "%s \u00b7 Forged American" },
  description: "Lifted-truck Americana, big-sky riffs, hard-working apparel built for the road.",
  openGraph: {
    title: "Forged American",
    description: "Lifted-truck Americana, big-sky riffs, hard-working apparel built for the road.",
    type: 'website',
    siteName: "Forged American",
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg text-ink antialiased font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
