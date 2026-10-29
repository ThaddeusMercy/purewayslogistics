import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pureways Logistics. Call +44 7388 752493, email office@purewayslogistics.co.uk or send us a message through the contact form.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us | Pureways Logistics", description: "Get in touch with Pureways Logistics. Call +44 7388 752493, email office@purewayslogistics.co.uk or send us a message through the contact form.", url: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
