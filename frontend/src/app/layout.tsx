import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://prismtech.klhieee.com'),
  title: {
    default: 'PRISMTECH 2026 | IEEE KLH Hackathon | Hyderabad',
    template: '%s | PRISMTECH 2026',
  },
  description:
    'PRISMTECH — A 24-Hour Sprint across the Tech Spectrum. IEEE hackathon organized by KLH Aziz Nagar IEEE Student Branch. September 19–20, 2026, Hyderabad.',
  keywords: [
    'PRISMTECH', 'IEEE Hackathon', 'KLH Hyderabad', 'IEEE KLH',
    'hackathon 2026', 'Aziz Nagar', 'IEEE Photonics', 'IEEE Computer Society',
    'IEEE WIE', 'Hyderabad hackathon', 'engineering hackathon',
  ],
  authors: [{ name: 'IEEE KLH SB Aziz Nagar' }],
  creator: 'IEEE KLH SB Aziz Nagar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://prismtech.klhieee.com',
    siteName: 'PRISMTECH 2026',
    title: 'PRISMTECH 2026 — A 24-Hour Sprint across the Tech Spectrum',
    description:
      'Multidisciplinary hackathon where hardware (Light), software (Logic), and social impact (Equity) converge. September 19–20, 2026 · KLH Hyderabad.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PRISMTECH 2026 IEEE Hackathon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRISMTECH 2026 — IEEE Hackathon',
    description: 'A 24-Hour Sprint across the Tech Spectrum · September 19–20, 2026 · KLH Hyderabad',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'PRISMTECH 2026',
              alternateName: 'A 24-Hour Sprint across the Tech Spectrum',
              startDate: '2026-09-26T08:15:00+05:30',
              endDate: '2026-09-27T10:45:00+05:30',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'KL University (KLH) Hyderabad Off-Campus',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'R.V.S Nagar, Moinabad Road, near TS Police Academy',
                  addressLocality: 'Aziz Nagar',
                  addressRegion: 'Telangana',
                  postalCode: '500075',
                  addressCountry: 'IN',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'IEEE KLH SB Aziz Nagar',
                url: 'https://prismtech.klhieee.com',
              },
              description:
                'A multidisciplinary hackathon where hardware (Light), software (Logic), and social impact (Equity) converge.',
              url: 'https://prismtech.klhieee.com',
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
