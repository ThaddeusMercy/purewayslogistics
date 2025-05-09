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
  title: "Pureways Logistics - Fast & Reliable Delivery Services",
  description: "Pureways Logistics provides efficient and reliable delivery services to meet all your shipping needs, helping your business deliver on time, every time.",
  keywords: "delivery service, logistics, pureways logistics, shipping solutions, package delivery, delivery service, prompt delivery, reliable logistics, final mile delivery",
  openGraph: {
    title: "Pureways Logistics - Fast & Reliable Delivery Services",
    description: "Pureways Logistics provides efficient and reliable delivery services to meet all your shipping needs, helping your business deliver on time, every time.",
    url: process.env.URL || "https://www.purewayslogistics.co.uk",
    siteName: "Pureways Logistics",
    images: [
      {
        url: "/images/pureway-og-image.png",
        width: 1200,
        height: 630,
        alt: "Pureways Logistics - Fast & Reliable Delivery Services",
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
