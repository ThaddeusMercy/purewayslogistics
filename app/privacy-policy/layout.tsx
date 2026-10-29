import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pureways Logistics collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Privacy Policy | Pureways Logistics", description: "How Pureways Logistics collects, uses and protects your personal data.", url: "/privacy-policy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
