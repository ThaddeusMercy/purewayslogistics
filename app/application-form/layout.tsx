import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Driver Application",
  description: "Apply to drive with Pureways Logistics. Fill in the short application form and upload your CV to start your journey as a delivery driver.",
  alternates: { canonical: "/application-form" },
  openGraph: { title: "Delivery Driver Application | Pureways Logistics", description: "Apply to drive with Pureways Logistics. Fill in the short application form and upload your CV to start your journey as a delivery driver.", url: "/application-form" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
