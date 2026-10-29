import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms and conditions for using the Pureways Logistics website and services.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms and Conditions | Pureways Logistics", description: "The terms and conditions for using the Pureways Logistics website and services.", url: "/terms" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
