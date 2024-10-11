import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

import 'animate.css';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'B & B Removal',
  description: 'Our aim is to satisfy customers.',
  keywords:
    'Moving Company, Removal Services, Moving Services, Relocation Services, Moving and Storage, Residential Moving, Commercial Moving, Local Movers, Long-Distance Movers, Sydney Moving Company, Sydney Removal Services, Sydney Local Movers, Eco-Friendly Moving, Same-Day Moving Services, Affordable Movers, Best Moving Company, Household Movers',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'B & B Removal',
    description: 'Our aim is to satisfy customers.',
    url: 'https://bandbremoval.com',
    images: [
      {
        url: 'https://bandbremoval.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'B&B logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B & B Removal',
    description: 'Our aim is to satisfy customers.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer />
        <MantineProvider>
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
