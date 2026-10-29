import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from 'react';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import { AnimatePresence } from "motion/react"

const InterSans = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const SITE_URL = "https://www.purewayslogistics.co.uk";
const DESCRIPTION = "Pureways Logistics is a London-based Delivery Service Partner providing safe, efficient and reliable last-mile delivery, helping businesses get parcels to their customers on time.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pureways Logistics | Last-Mile Delivery Services in London",
    template: "%s | Pureways Logistics",
  },
  description: DESCRIPTION,
  keywords: "last-mile delivery, delivery service partner, courier London, parcel delivery, logistics company London, pureways logistics, delivery driver jobs",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pureways Logistics | Last-Mile Delivery Services in London",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Pureways Logistics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/pureway-og-Image.png",
        width: 1200,
        height: 630,
        alt: "Pureways Logistics - Fast & Reliable Delivery Services",
      }
    ]
  }
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pureways Logistics",
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/pureway-og-Image.png`,
  telephone: "+447388752493",
  email: "office@purewayslogistics.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Wenlock Road",
    addressLocality: "London",
    postalCode: "N1 7GU",
    addressCountry: "GB",
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
        className={`${InterSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
      </body>
    </html>
  );
}
