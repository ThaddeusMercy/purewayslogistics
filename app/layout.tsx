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

export const metadata: Metadata = {
  title: "Pureway Logistics - Your Strategic Solution for Logistics and Cybersecurity",
  description: "Pureway Logistics provides integrated solutions for logistics and cybersecurity needs, helping your business operate efficiently and securely.",
  keywords: "logistics, cybersecurity, pureway logistics, business solutions, logistics management, cybersecurity services, business efficiency, business security",
  openGraph: {
    title: "Pureway Logistics - Your Strategic Solution for Logistics and Cybersecurity",
    description: "Pureway Logistics provides integrated solutions for logistics and cybersecurity needs, helping your business operate efficiently and securely.",
    url: process.env.URL || "https://pureway-logistics.co.uk",
    siteName: "Pureway Logistics",
    images: [
      {
        url: "/images/pureway-og-image.png",
        width: 1200,
        height: 630,
        alt: "Pureway Logistics - Your Strategic Solution for Logistics and Cybersecurity",
      }
    ]
  }
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
