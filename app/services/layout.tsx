import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Last-Mile Delivery Services",
  description: "Last-mile parcel delivery, trained drivers, fleet management and customer support from Pureways Logistics, a Delivery Service Partner based in London.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Last-Mile Delivery Services | Pureways Logistics", description: "Last-mile parcel delivery, trained drivers, fleet management and customer support from Pureways Logistics, a Delivery Service Partner based in London.", url: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
