import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Driver Jobs",
  description: "Join Pureways Logistics as a delivery driver. Be your own boss with flexible last-mile delivery work, training and support in London.",
  alternates: { canonical: "/join-us" },
  openGraph: { title: "Delivery Driver Jobs | Pureways Logistics", description: "Join Pureways Logistics as a delivery driver. Be your own boss with flexible last-mile delivery work, training and support in London.", url: "/join-us" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
