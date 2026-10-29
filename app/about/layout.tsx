import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Pureways Logistics, a people-first Delivery Service Partner in London focused on safe, efficient and client-focused last-mile delivery.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Us | Pureways Logistics", description: "Meet Pureways Logistics, a people-first Delivery Service Partner in London focused on safe, efficient and client-focused last-mile delivery.", url: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
